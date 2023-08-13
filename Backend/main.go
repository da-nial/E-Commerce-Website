package main

import (
	beego "github.com/beego/beego/v2/server/web"
	"shop/models"
	_ "shop/models"
	CategoryModels "shop/models/category"
	OrderModels "shop/models/order"
	ProductModels "shop/models/product"
	UserModels "shop/models/user"
	_ "shop/routers"
)

func main() {
	if beego.BConfig.RunMode == "dev" {
		beego.BConfig.WebConfig.DirectoryIndex = true
		beego.BConfig.WebConfig.StaticDir["/swagger"] = "swagger"
	}

	models.DB().AutoMigrate(
		&UserModels.User{},
		&CategoryModels.Category{},
		&ProductModels.Product{},
		&OrderModels.Order{},
	)
	beego.Run()
}
