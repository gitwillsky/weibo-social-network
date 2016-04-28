package main

import (
	"fmt"
	"net/http"
	"time"

	"github.com/gitwillsky/slimgo/context"
	"github.com/gitwillsky/slimgo/router"
	"github.com/gitwillsky/weibo/auth"
)

// Login user login
func Login(c *context.Context) {
	url := fmt.Sprintf("https://api.weibo.com/oauth2/authorize"+
		"?client_id=%s&redirect_uri=%s&scope=all", auth.APPKEY, auth.REDIRECTURL)

	http.Redirect(c.Response, c.Request, url, http.StatusMovedPermanently)
}

// GetToken get weibo token.
func GetToken(c *context.Context) {
	accessTokenData, err := auth.GetCurrentTokenData(c)
	if err != nil || time.Now().After(accessTokenData.CreatedAt.
		Add(time.Duration(accessTokenData.ExpiresIn)*time.Second)) {
		c.WriteJson(http.StatusUnauthorized, "需要登陆认证")
		return
	}

	c.WriteJson(http.StatusOK, accessTokenData)
}

// Index index page.
func Index(c *context.Context) {
	http.ServeFile(c.Response, c.Request, "./index.html")
}

func main() {
	context := context.New()
	router := router.New(context)
	router.STATIC("/assets/*filepath", "./assets/")
	router.GET("/", Index)
	router.GET("/login", Login)
	router.GET("/auth", auth.Authorize)
	router.GET("/token", GetToken)

	fmt.Println(http.ListenAndServe(":8000", router))
}
