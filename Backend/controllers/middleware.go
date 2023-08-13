package controllers

import (
	"fmt"
	beego "github.com/beego/beego/v2/server/web"
	"github.com/beego/beego/v2/server/web/context"
	"github.com/beego/beego/v2/server/web/filter/cors"
	"net/http"
	UserModels "shop/models/user"
	"shop/utils"
	"strings"
)

type Route struct {
	Method string
	Path   string
}

var publicRoutes []Route
var adminRoutes []Route

func mathcRoute(uriParts []string, method string, routes []Route) (bool, Route) {
	for _, route := range routes {
		parts := strings.Split(route.Path, "/")
		if len(parts) != len(uriParts) || method != route.Method {
			continue
		}
		matched := true
		for i := 0; i < len(parts); i++ {
			if parts[i] == "*" {
				continue
			}

			if parts[i] != uriParts[i] {
				matched = false
				break
			}
		}

		if matched {
			return true, route
		}
	}

	return false, Route{}
}

func AuthenticationFilter(ctx *context.Context) {
	authorizationHeader := ctx.Input.Header("Authorization")
	uriParts := strings.Split(
		strings.TrimRight(
			strings.Split(ctx.Request.RequestURI, "?")[0],
			"/",
		),
		"/",
	)
	method := ctx.Request.Method

	doesMatch, _ := mathcRoute(uriParts, method, publicRoutes)

	if doesMatch {
		return
	}
	if authorizationHeader == "" {
		ctx.Output.SetStatus(http.StatusUnauthorized)
		ctx.Output.Body([]byte("{}"))
		return
	}
	parts := strings.Split(authorizationHeader, " ")
	if len(parts) < 2 {
		ctx.Output.SetStatus(http.StatusUnauthorized)
		ctx.Output.Body([]byte("{}"))
		return
	}
	token := parts[1]

	var payload UserModels.TokenModel
	err := utils.JWTPayload(token, &payload)
	user := UserModels.User{}
	if err != nil {
		fmt.Println(err)
		ctx.Output.SetStatus(http.StatusUnauthorized)
		ctx.Output.Body([]byte("{}"))
		return
	}

	user.ID = payload.ID

	exists := user.GetUser()

	if !exists {
		ctx.Output.SetStatus(http.StatusUnauthorized)
		ctx.Output.Body([]byte("{}"))
		return
	}

	if matches, _ := mathcRoute(uriParts, method, adminRoutes); matches && !user.IsAdmin {
		ctx.Output.SetStatus(http.StatusForbidden)
		ctx.Output.Body([]byte("{}"))
		return
	}

	ctx.Input.SetData("User", user)

}

func init() {
	publicRoutes = []Route{
		{
			Method: http.MethodPost,
			Path:   "/v1/user/register",
		},
		{
			Method: http.MethodPost,
			Path:   "/v1/user/login",
		},
		{
			Method: http.MethodGet,
			Path:   "/v1/category",
		},
		{
			Method: http.MethodGet,
			Path:   "/v1/product",
		},
		{
			Method: http.MethodGet,
			Path:   "/v1/product/*",
		},
	}

	adminRoutes = []Route{
		{
			Path: "/v1/user",
			Method: http.MethodGet,
		},
		{
			Path: "/v1/category",
			Method: http.MethodPost,
		},
		{
			Path: "/v1/category/*",
			Method: http.MethodPut,
		},
		{
			Path: "/v1/category/*",
			Method: http.MethodDelete,
		},
		{
			Path: "/v1/product",
			Method: http.MethodPost,
		},
		{
			Path: "/v1/product/*",
			Method: http.MethodPut,
		},
		{
			Path: "/v1/product/*",
			Method: http.MethodPut,
		},
		{
			Path: "/v1/product/file",
			Method: http.MethodPost,
		},
		{
			Path: "/v1/order/*/*",
			Method: http.MethodPut,
		},
	}
	beego.InsertFilter("*", beego.BeforeRouter, cors.Allow(&cors.Options{
		AllowOrigins:     []string{"*"},
		AllowMethods:     nil,
		AllowHeaders:     []string{"Origin"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))
	beego.InsertFilter("/*", beego.BeforeRouter, AuthenticationFilter)
}
