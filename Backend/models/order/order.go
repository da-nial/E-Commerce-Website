package OrderModels

import (
	"gorm.io/gorm"
	"shop/models"
	ProductModels "shop/models/product"
	UserModels "shop/models/user"
	"strconv"
)

type OrderStatus int

const (
	InProcess OrderStatus = iota
	Done
	Canceled
)

type Order struct {
	gorm.Model
	ProductID uint `json:"product_id"`
	Product ProductModels.Product `json:"product"`
	UserID uint `json:"user_id"`
	User UserModels.User `json:"user"`
	Name string `gorm:"type:varchar(199)" json:"name"`
	Family string `gorm:"type:varchar(199)" json:"family"`
	Address string `json:"address"`
	Price uint `json:"price"`
	Count uint `json:"count"`
	Status int `json:"status"` // 0 -> in process, 1 -> done, 2 -> canceled
	Code string `gorm:"type:varchar(199)" json:"code"`
}

func (o *Order) Create() {
	result := models.DB().Create(o)
	if result.RowsAffected > 0 {
		o.Code = "SHP" + strconv.FormatUint(uint64(uint(1000) + o.ID), 10)
		models.DB().Save(o)
	}
}


func (o *Order) GetOrders(code *string, page *int, pageSize *int) (products []Order) {
	tx := models.DB().Where(o)
	if code != nil {
		tx.Where("code = ?", *code)
	}
	tx.Scopes(models.Paginate(page, pageSize)).Preload("User").Preload("Product").Preload("Product.Category").Find(&products)
	return
}

func (o *Order) GetOrder() bool {
	result := models.DB().Where(o).Preload("User").Preload("User").Preload("Product").Preload("Product.Category").First(o)
	return result.RowsAffected > 0
}

func (o *Order) Persist() {
	models.DB().Save(o)
}
