package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gitwillsky/slimgo/context"
	"github.com/gitwillsky/slimgo/router"
	"github.com/gitwillsky/weibo/auth"
)

// Login user login
func Login(c *context.Context) {
	url := fmt.Sprintf("https://api.weibo.com/oauth2/authorize"+
		"?client_id=%s&redirect_uri=%s", auth.APPKEY, auth.REDIRECTURL)

	tokenData, err := auth.GetCurrentTokenData(c)
	// 如果没有进行授权
	if err != nil {
		log.Println("在session中未发现Access Token，转到新浪授权页面")
		http.Redirect(c.Response, c.Request, url, http.StatusMovedPermanently)
		return
	}
	// 如果AccessToken 已过期
	if time.Now().After(tokenData.CreatedAt.
		Add(time.Duration(tokenData.ExpiresIn) * time.Second)) {
		log.Println("Access Token 已经失效，转到新浪授权页面")
		http.Redirect(c.Response, c.Request, url, http.StatusMovedPermanently)
		return
	}

	c.WriteJson(http.StatusOK, "登陆成功")
}

// GetUser get user access token with cookie.
func GetUser(c *context.Context) {
	accessTokenData, err := auth.GetCurrentTokenData(c)
	if err != nil {
		c.WriteJson(http.StatusUnauthorized, "需要登陆认证")
		return
	}

	c.WriteJson(http.StatusOK, accessTokenData)
}

func main() {
	apiContext := context.New()
	apiRouter := router.New(apiContext)
	apiRouter.GET("/login", Login)
	apiRouter.GET("/weibo/auth", auth.Authorize)
	apiRouter.GET("/user", GetUser)

	frontContext := context.New()
	frontRouter := router.New(frontContext)
	frontRouter.STATIC("/*filepath", "../")

	go log.Fatalln(http.ListenAndServe(":8000", apiRouter))
	log.Fatalln(http.ListenAndServe(":8081", frontRouter))
}
