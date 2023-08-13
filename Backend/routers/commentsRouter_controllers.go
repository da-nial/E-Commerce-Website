package routers

import (
	beego "github.com/beego/beego/v2/server/web"
	"github.com/beego/beego/v2/server/web/context/param"
)

func init() {

    beego.GlobalControllerRouter["shop/controllers:CategoryController"] = append(beego.GlobalControllerRouter["shop/controllers:CategoryController"],
        beego.ControllerComments{
            Method: "GetCategories",
            Router: "/",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["shop/controllers:CategoryController"] = append(beego.GlobalControllerRouter["shop/controllers:CategoryController"],
        beego.ControllerComments{
            Method: "Create",
            Router: "/",
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(
				param.New("input", param.IsRequired, param.InBody),
			),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["shop/controllers:CategoryController"] = append(beego.GlobalControllerRouter["shop/controllers:CategoryController"],
        beego.ControllerComments{
            Method: "Update",
            Router: "/:id/",
            AllowHTTPMethods: []string{"put"},
            MethodParams: param.Make(
				param.New("id", param.IsRequired, param.InPath),
				param.New("input", param.IsRequired, param.InBody),
			),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["shop/controllers:CategoryController"] = append(beego.GlobalControllerRouter["shop/controllers:CategoryController"],
        beego.ControllerComments{
            Method: "DeleteCategory",
            Router: "/:id/",
            AllowHTTPMethods: []string{"delete"},
            MethodParams: param.Make(
				param.New("id", param.IsRequired, param.InPath),
			),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["shop/controllers:OrderController"] = append(beego.GlobalControllerRouter["shop/controllers:OrderController"],
        beego.ControllerComments{
            Method: "Order",
            Router: "/",
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(
				param.New("productId", param.IsRequired),
				param.New("count", param.IsRequired),
			),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["shop/controllers:OrderController"] = append(beego.GlobalControllerRouter["shop/controllers:OrderController"],
        beego.ControllerComments{
            Method: "GetOrders",
            Router: "/",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(
				param.New("orderCode"),
				param.New("page"),
				param.New("pageSize"),
			),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["shop/controllers:OrderController"] = append(beego.GlobalControllerRouter["shop/controllers:OrderController"],
        beego.ControllerComments{
            Method: "GetOrder",
            Router: "/:code/",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(
				param.New("code", param.IsRequired, param.InPath),
			),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["shop/controllers:OrderController"] = append(beego.GlobalControllerRouter["shop/controllers:OrderController"],
        beego.ControllerComments{
            Method: "UpdateOrder",
            Router: "/:code/:status/",
            AllowHTTPMethods: []string{"put"},
            MethodParams: param.Make(
				param.New("code", param.IsRequired, param.InPath),
				param.New("status", param.InPath),
			),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["shop/controllers:ProductController"] = append(beego.GlobalControllerRouter["shop/controllers:ProductController"],
        beego.ControllerComments{
            Method: "GetAll",
            Router: "/",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(
				param.New("categoryId"),
				param.New("page"),
				param.New("pageSize"),
				param.New("minPrice"),
				param.New("maxPrice"),
			),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["shop/controllers:ProductController"] = append(beego.GlobalControllerRouter["shop/controllers:ProductController"],
        beego.ControllerComments{
            Method: "Create",
            Router: "/",
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(
				param.New("input", param.IsRequired, param.InBody),
			),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["shop/controllers:ProductController"] = append(beego.GlobalControllerRouter["shop/controllers:ProductController"],
        beego.ControllerComments{
            Method: "GetProduct",
            Router: "/:id/",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(
				param.New("id", param.IsRequired, param.InPath),
			),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["shop/controllers:ProductController"] = append(beego.GlobalControllerRouter["shop/controllers:ProductController"],
        beego.ControllerComments{
            Method: "Update",
            Router: "/:id/",
            AllowHTTPMethods: []string{"put"},
            MethodParams: param.Make(
				param.New("id", param.IsRequired, param.InPath),
				param.New("input", param.IsRequired, param.InBody),
			),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["shop/controllers:ProductController"] = append(beego.GlobalControllerRouter["shop/controllers:ProductController"],
        beego.ControllerComments{
            Method: "FileUpload",
            Router: "/file/",
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["shop/controllers:UserController"] = append(beego.GlobalControllerRouter["shop/controllers:UserController"],
        beego.ControllerComments{
            Method: "GetUsers",
            Router: "/",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(
				param.New("page"),
				param.New("pageSize"),
			),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["shop/controllers:UserController"] = append(beego.GlobalControllerRouter["shop/controllers:UserController"],
        beego.ControllerComments{
            Method: "GetUser",
            Router: "/:id",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(
				param.New("id", param.IsRequired, param.InPath),
			),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["shop/controllers:UserController"] = append(beego.GlobalControllerRouter["shop/controllers:UserController"],
        beego.ControllerComments{
            Method: "Login",
            Router: "/login",
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(
				param.New("input", param.IsRequired, param.InBody),
			),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["shop/controllers:UserController"] = append(beego.GlobalControllerRouter["shop/controllers:UserController"],
        beego.ControllerComments{
            Method: "GetMe",
            Router: "/me/",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["shop/controllers:UserController"] = append(beego.GlobalControllerRouter["shop/controllers:UserController"],
        beego.ControllerComments{
            Method: "UpdateUser",
            Router: "/me/",
            AllowHTTPMethods: []string{"put"},
            MethodParams: param.Make(
				param.New("input", param.IsRequired, param.InBody),
			),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["shop/controllers:UserController"] = append(beego.GlobalControllerRouter["shop/controllers:UserController"],
        beego.ControllerComments{
            Method: "ChangeCredit",
            Router: "/me/credit/:credit/",
            AllowHTTPMethods: []string{"put"},
            MethodParams: param.Make(
				param.New("credit", param.IsRequired, param.InPath),
			),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["shop/controllers:UserController"] = append(beego.GlobalControllerRouter["shop/controllers:UserController"],
        beego.ControllerComments{
            Method: "Register",
            Router: "/register",
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(
				param.New("input", param.IsRequired, param.InBody),
			),
            Filters: nil,
            Params: nil})

}
