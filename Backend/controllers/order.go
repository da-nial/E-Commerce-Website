package controllers

import (
	"net/http"
	OrderModels "shop/models/order"
	ProductModels "shop/models/product"
	UserModels "shop/models/user"
)

type OrderController struct {
	BaseController
}

// @Title Order
// @Descruption Order a product
// @Param	productId	query	uint	true	"product id"
// @Param	count	query	uint	true	"product count"
// @Success 200 {object} OrderModel.Order
// @router / [post]
func (c *OrderController) Order(productId uint, count uint) {
	user := c.CurrentUserObject()
	product := ProductModels.Product{}
	product.ID = productId
	exists := product.GetProduct()

	if !exists {
		c.ErrorResponse(http.StatusNotFound, "Product does not exist.")
		return
	}

	if product.Supply < count {
		c.ErrorResponse(http.StatusUnprocessableEntity, "Not enough supply.")
		return
	}

	totalPrice := product.Price * count

	if totalPrice > user.Credit {
		c.ErrorResponse(http.StatusUnprocessableEntity, "Not enough money.")
		return
	}

	user.Credit -= totalPrice
	user.Persist()
	product.Supply -= count
	product.Persist()

	order := OrderModels.Order{
		ProductID: productId,
		UserID:    user.ID,
		Name:      user.Name,
		Family:    user.Family,
		Price:     product.Price,
		Count:     count,
		Status:    int(OrderModels.InProcess),
		Address:   user.Address,
	}

	order.Create()
	c.Response(http.StatusOK, order)
}

// @Title GetOrders
// @Descruption Orders list
// @Param	orderCode	query	string	false	"order code"
// @Param page	query	int	false	"page"
// @Param pageSize	query	int	false	"page size"
// @Success 200 {array} []OrderModel.Order
// @router / [get]
func (c *OrderController) GetOrders(orderCode *string, page *int, pageSize *int) {
	orderModel := OrderModels.Order{}
	if !c.CurrentUserObject().IsAdmin {
		orderModel.UserID = c.CurrentUserObject().ID
	}
	orders := orderModel.GetOrders(orderCode, page, pageSize)
	c.Response(http.StatusOK, orders)
}

// @Title GetOrders
// @Descruption Orders list
// @Param	code	path	string	true	"order code"
// @Success 200 {object} OrderModel.Order
// @router /:code/ [get]
func (c *OrderController) GetOrder(code string) {
	order := OrderModels.Order{Code: code}
	if !c.CurrentUserObject().IsAdmin {
		order.UserID = c.CurrentUserObject().ID
	}
	exists := order.GetOrder()

	if !exists {
		c.ErrorResponse(http.StatusNotFound, "Order does not exist.")
		return
	}

	c.Response(http.StatusOK, order)
}

// @Title GetOrders
// @Descruption Orders list
// @Param	code	path	string	true	"order code"
// @Param	sttaus	path	OrderModels.OrderStatus	true	"new status"
// @Success 200 {object} OrderModel.Order
// @router /:code/:status/ [put]
func (c *OrderController) UpdateOrder(code string, status OrderModels.OrderStatus) {
	order := OrderModels.Order{Code: code}
	if !c.CurrentUserObject().IsAdmin {
		order.UserID = c.CurrentUserObject().ID
	}
	exists := order.GetOrder()

	if !exists {
		c.ErrorResponse(http.StatusNotFound, "Order does not exist.")
		return
	}

	if status == OrderModels.Canceled {
		user := UserModels.User{}
		user.ID = order.UserID
		user.GetUser()
		order.User.Credit += order.Price * order.Count
		order.User.Persist()

		order.Product.Supply += order.Count
		order.Product.Persist()
	}

	order.Status = int(status)
	order.Persist()

	c.Response(http.StatusOK, order)
}
