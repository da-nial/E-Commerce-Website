package ProductModels

import (
	"fmt"
	"gorm.io/gorm"
	"shop/models"
	"shop/models/category"
)

type Product struct {
	gorm.Model
	Name       string                  `gorm:"type:varchar(199)" json:"name"`
	CategoryID uint                    `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET DEFAULT;default:1" json:"category_id"`
	Category   CategoryModels.Category `json:"category"`
	Price      uint                    `json:"price"`
	Supply     uint                    `json:"supply"`
	Sold       uint                    `json:"sold"`
	Image      string                  `json:"image"`
}

func Money(min *int, max *int) func(db *gorm.DB) *gorm.DB {
	return func(db *gorm.DB) *gorm.DB {
		fmt.Println(min, max)
		if min != nil {
			db.Where("price >= ?", min)
		}

		if max != nil {
			db.Where("price <= ?", max)
		}

		return db
	}
}

func (p *Product) GetProducts(page *int, pageSize *int, minPrice *int, maxPrice *int) (products []Product) {
	tx := models.DB().Where(p)
	tx.Scopes(models.Paginate(page, pageSize)).Scopes(Money(minPrice, maxPrice)).Preload("Category").Find(&products)
	return
}

func (p *Product) GetProduct() bool {
	result := models.DB().Where(p).Preload("Category").First(p)
	return result.RowsAffected > 0
}

func (p *Product) Persist() {
	models.DB().Save(p)
}



func (p *Product) Create() {
	models.DB().Create(p)
	p.GetProduct()
}
