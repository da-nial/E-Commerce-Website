package controllers

import (
	"net/http"
	CategoryModels "shop/models/category"
)

type CategoryController struct {
	BaseController
}

// @Title GetCategories
// @Description Get all of categories
// @Success 200 {array} []CategoryModels.Category "categories"
// @router / [get]
func (c *CategoryController) GetCategories() {
	categories := (&CategoryModels.Category{}).GetCategories()

	c.Response(http.StatusOK, categories)
}

// @Title Create
// @Description Create a new category.
// @Param	input		body 	CategoryModels.CreateRequest	true		"create request"
// @Success 200 {object} CategoryModels.Category "categories"
// @router / [post]
func (c *CategoryController) Create(input CategoryModels.CreateRequest) {
	category := CategoryModels.Category{Name: input.Name}
	category.Create()
	c.Response(http.StatusOK, category)
}

// @Title Update
// @Description Update an existing category.
// @Param	id	path	uint	true	"caetgory id"
// @Param	input	body 	CategoryModels.UpdateRequest	true		"create request"
// @Success 200 {object} CategoryModels.Category "categories"
// @router /:id/ [put]
func (c *CategoryController) Update(id uint, input CategoryModels.UpdateRequest) {
	category := CategoryModels.Category{}
	category.ID = id
	exists := category.GetCategory()
	if !exists {
		c.Response(http.StatusNotFound, ErrorResponse{"Category not found."})
	}
	category.Name = input.Name
	category.Persist()
	c.Response(http.StatusOK, category)
}

// @Title Delete
// @Description Delete an existing category.
// @Param	id	path	uint	true	"caetgory id"
// @Success 200 {object} CategoryModels.Category "categories"
// @router /:id/ [delete]
func (c *CategoryController) DeleteCategory(id uint) {
	category := CategoryModels.Category{}
	category.ID = id
	exists := category.GetCategory()
	if !exists {
		c.Response(http.StatusNotFound, ErrorResponse{"Category not found."})
	}
	category.Remove()
	// todo: Change the products category id
	c.Response(http.StatusOK, category)
}
