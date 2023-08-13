package controllers

import (
	"crypto/md5"
	"encoding/hex"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"path"
	CategoryModels "shop/models/category"
	ProductModels "shop/models/product"
	"shop/utils"
)

type ProductController struct {
	BaseController
}

// @Title GetProducts
// @Description Get products
// @Param categoryId query	uint	false	"category id"
// @Param page	query	int	false	"page"
// @Param pageSize	query	int	false	"page size"
// @Param minPrice	query	int	false	"min price"
// @Param maxPrice	query	int	false	"max price"
// @Success 200 {array} []ProductModels.Product Products list
// @router / [get]
func (c *ProductController) GetAll(categoryId *uint, page *int, pageSize *int, minPrice *int, maxPrice *int) {
	productModel := ProductModels.Product{}
	if categoryId != nil {
		productModel.CategoryID = *categoryId
	}
	c.Response(http.StatusOK, productModel.GetProducts(page, pageSize, minPrice, maxPrice))
}

// @Title GetProduct
// @Description Get product
// @Param id	path	uint	true	"id"
// @Success 200 {array} ProductModels.Product Products list
// @router /:id/ [get]
func (c *ProductController) GetProduct(id uint) {
	product := ProductModels.Product{}
	product.ID = id
	exists := product.GetProduct()
	if !exists {
		c.ErrorResponse(http.StatusNotFound, "Product not found.")
		return
	}

	c.Response(http.StatusOK, product)
}

// @Title UploadImage
// @router /file/ [post]
func (c *ProductController) FileUpload() {
	file, head, err := c.GetFile("file")
	if file != nil {
		defer file.Close()
	}
	if c.CheckError(err, http.StatusBadRequest) {
		return
	}

	// Check if file already exists.
	hash := md5.New()
	_, err = io.Copy(hash, file)
	if err != nil {
		fmt.Println(err)
	}
	hashInBytes := hash.Sum(nil)[:16]

	//Convert the bytes to a string
	uploadFileMd5 := hex.EncodeToString(hashInBytes)
	files, err := ioutil.ReadDir("static/")

	if err == nil {
		for _, existingFile := range files {
			if !existingFile.IsDir() {
				md5, err := utils.HashFileMD5("static/" + existingFile.Name())
				if err == nil {
					if md5 == uploadFileMd5 {
						c.Response(http.StatusCreated, ProductModels.UploadResponse{"static/" + existingFile.Name()})
						return
					}
				}
			}
		}
	}

	fileExt := path.Ext(head.Filename)

	fileStorePath := "static/" + utils.UUID() + fileExt
	c.SaveToFile("file", fileStorePath)
	c.Response(http.StatusCreated, ProductModels.UploadResponse{fileStorePath})
}

// @Title Create
// @Description Create a new product.
// @Param	input		body 	ProductModels.CreateRequest	true		"create request"
// @Success 200 {object} ProductModels.Product "categories"
// @router / [post]
func (c *ProductController) Create(input ProductModels.CreateRequest) {
	category := CategoryModels.Category{}
	category.ID = input.CategoryID
	exists := category.GetCategory()
	if !exists {
		c.ErrorResponse(http.StatusUnprocessableEntity, "Category does not exist.")
		return
	}
	product := ProductModels.Product{
		Name:       input.Name,
		CategoryID: input.CategoryID,
		Image:      input.Image,
		Price:      input.Price,
		Supply:     input.Supply,
		Sold:       0,
	}
	product.Create()
	if product.ID == 0 {
		c.ErrorResponse(http.StatusInternalServerError, "Error while creating product.")
		return
	}
	c.Response(http.StatusOK, product)
}

// @Title Update
// @Description Update a product.
// @Param id	path	uint	true	"id"
// @Param	input		body 	ProductModels.UpdateRequest	true	"update request"
// @Success 200 {object} ProductModels.Product "categories"
// @router /:id/ [put]
func (c *ProductController) Update(id uint, input ProductModels.UpdateRequest) {
	product := ProductModels.Product{}
	product.ID = id
	exists := product.GetProduct()
	if !exists {
		c.ErrorResponse(http.StatusNotFound, "Product not found.")
		return
	}
	category := CategoryModels.Category{}
	category.ID = input.CategoryID
	exists = category.GetCategory()
	if !exists {
		c.ErrorResponse(http.StatusUnprocessableEntity, "Category does not exist.")
		return
	}
	product.Name = input.Name
	product.Category = category
	product.Image = input.Image
	product.Price = input.Price
	product.Supply = input.Supply
	product.Persist()

	c.Response(http.StatusOK, product)
}
