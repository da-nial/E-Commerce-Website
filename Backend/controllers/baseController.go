package controllers

import (
	beego "github.com/beego/beego/v2/server/web"
	UserModels "shop/models/user"
)

type ErrorResponse struct {
	Error string `json:"error"`
}

type BaseController struct {
	beego.Controller
}

func (c *BaseController) CurrentUserObject() UserModels.User {
	return c.Ctx.Input.GetData("User").(UserModels.User)
}

func (c *BaseController) Response(status int, body interface{}) {
	c.Data["json"] = body
	c.Ctx.Output.SetStatus(status)
	c.ServeJSON()
}

func (c *BaseController) ErrorResponse(status int, message string) {
	c.Response(status, ErrorResponse{message})
}

func (c *BaseController) CheckError(err error, status int) bool {
	if err == nil {
		return false
	}

	message := "Internal server error."

	if beego.BConfig.RunMode == "dev" {
		message = err.Error()
	}

	c.ErrorResponse(status, message)

	return true
}
