package CategoryModels

import (
	"gorm.io/gorm"
	"shop/models"
)

type Category struct {
	gorm.Model
	Name string `gorm:"type:varchar(199)" json:"name"`
}

func (c *Category) Persist() {
	models.DB().Save(c)
}

func (c *Category) Create() {
	models.DB().Create(c)
}

func (c *Category) GetCategories() (categories []Category) {
	tx := models.DB().Model(c)
	tx.Find(&categories)
	return
}

func (c *Category) GetCategory() bool {
	result := models.DB().Where(c).First(c)
	return result.RowsAffected > 0
}

func (c *Category) Remove() {
	models.DB().Delete(c)
}
