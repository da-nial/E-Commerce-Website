package controllers

import (
	"net/http"
	UserModels "shop/models/user"
	"shop/utils"
	"time"
)

// Operations about Users
type UserController struct {
	BaseController
}

// @Title Login
// @Description Logs user into the system
// @Param	input		body 	UserModels.LoginRequest	true		"login request"
// @Success 200 {object} UserModels.LoginResponse "login success"
// @Failure 403 user not exist
// @router /login [post]
func (u *UserController) Login(input UserModels.LoginRequest) {
	user := UserModels.User{Email: input.Email}
	exists := user.GetUser()
	if !exists {
		u.ErrorResponse(http.StatusForbidden, "Credentials are wrong.")
		return
	}

	if !utils.CheckPasswordHash(input.Password, user.Password) {
		u.ErrorResponse(http.StatusForbidden, "Credentials are wrong.")
		return
	}

	token, err := utils.CreateJWTToken(UserModels.TokenModel{
		ID: user.ID,
	}, time.Now().Add(365*24*time.Hour)) // Token will be valid for the next year :D

	if u.CheckError(err, http.StatusInternalServerError) {
		return
	}

	u.Response(http.StatusOK, UserModels.LoginResponse{
		Token: token,
	})
}

// @Title Register
// @Description Register a new user into system.
// @Param	input		body 	UserModels.RegisterRequest	true		"register request"
// @Success 200 {object} UserModels.User register sucess
// @Failure 422 Invalid data
// @router /register [post]
func (u *UserController) Register(input UserModels.RegisterRequest) {
	user := UserModels.User{Email: input.Email}
	exists := user.GetUser()
	if exists {
		u.ErrorResponse(http.StatusUnprocessableEntity, "A user with this email already exists.")
		return
	}

	user.Password = input.Password
	user.Name = input.Name
	user.Family = input.Family

	err := user.Create()

	if u.CheckError(err, http.StatusInternalServerError) {
		return
	}

	u.Response(http.StatusCreated, user)
}

// @Title GetMe
// @Description Get current user's details.
// @Success 200 {object} UserModels.User User object
// @Failure 422 Invalid data
// @router /me/ [get]
func (u *UserController) GetMe() {
	u.Response(http.StatusOK, u.CurrentUserObject())
}

// @Title GetUser
// @Description Get a user's details.
// @Param	id	path	uint	true	"User Id"
// @Success 200 {object} UserModels.User User object
// @Failure 422 Invalid data
// @router /:id [get]
func (u *UserController) GetUser(id uint) {
	user := UserModels.User{}
	user.ID = id
	ok := user.GetUser()
	if !ok {
		u.Response(http.StatusNotFound, ErrorResponse{"User not found!"})
	}
	u.Response(http.StatusOK, user)
}

// @Title GetUsers
// @Description Get users
// @Param page	query	int	false	"page"
// @Param pageSize	query	int	false	"page size"
// @Success 200 {array} []UserModels.User User object
// @router / [get]
func (u *UserController) GetUsers(page *int, pageSize *int) {
	model := UserModels.User{}
	users := model.GetUsers(page, pageSize)
	u.Response(http.StatusOK, users)
}

// @Title UpdateUser
// @Description update current user. send password only if you want to update it.
// @Param	input		body 	UserModels.UpdateRequest	true		"update request"
// @Success 200 {object} UserModels.User User object
// @Failure 422 Invalid data
// @router /me/ [put]
func (u *UserController) UpdateUser(input UserModels.UpdateRequest) {
	user := u.CurrentUserObject()
	if input.Password != nil {
		user.SetPassword(*input.Password)
	}
	user.Name = input.Name
	user.Family = input.Family
	user.Persist()

	u.Response(http.StatusOK, user)
}

// @Title ChangeCredit
// @Description change credit of user.
// @Param	credit	path	uint	true	"New credit"
// @Success 200 {object} UserModels.User User object
// @Failure 422 Invalid data
// @router /me/credit/:credit/ [put]
func (u *UserController) ChangeCredit(credit uint) {
	user := u.CurrentUserObject()
	user.Credit = credit
	user.Persist()

	u.Response(http.StatusOK, user)
}
