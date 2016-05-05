package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"strconv"
	"strings"

	"github.com/gitwillsky/slimgo/context"
	"github.com/gitwillsky/slimgo/router"
	"github.com/gitwillsky/weibo/auth"
)

const (
	// WEIBOSERVER weibo server address
	WEIBOSERVER = "https://api.weibo.com/2"
)

// Login user login
func Login(c *context.Context) {
	url := fmt.Sprintf("https://api.weibo.com/oauth2/authorize"+
		"?client_id=%s&redirect_uri=%s&scope=all", auth.APPKEY, auth.REDIRECTURL)

	http.Redirect(c.Response, c.Request, url, http.StatusMovedPermanently)
}

// GetToken get weibo token.
func GetToken(c *context.Context) {
	a, _ := auth.GetCurrentTokenData(c)
	c.WriteJson(http.StatusOK, a)
}

// GetUser get weibo user information.
func GetUser(c *context.Context) {
	a, _ := auth.GetCurrentTokenData(c)

	url := fmt.Sprintf("%s/users/show.json?source=%s&uid=%s&access_token=%s",
		WEIBOSERVER, auth.APPKEY, a.UID, a.AccessToken)
	resp, err := http.Get(url)
	if err != nil {
		c.WriteJson(500, "无法联系新浪服务器")
		return
	}
	defer resp.Body.Close()
	body, _ := ioutil.ReadAll(resp.Body)
	c.WriteBody(resp.StatusCode, body)
}

// GetFriends get friend from weibo
func GetFriends(c *context.Context) {
	cursor, _ := strconv.Atoi(c.GetParam("cursor"))
	a, _ := auth.GetCurrentTokenData(c)
	url := fmt.Sprintf("%s/friendships/friends.json?source=%s&count=%d&access_token=%s&uid=%s&cursor=%d",
		WEIBOSERVER, auth.APPKEY, 30, a.AccessToken, a.UID, cursor)

	resp, err := http.Get(url)
	if err != nil {
		c.WriteJson(500, "无法联系新浪服务器")
		return
	}
	defer resp.Body.Close()
	body, _ := ioutil.ReadAll(resp.Body)
	c.WriteBody(resp.StatusCode, body)
}

// GetFollows get follow from weibo
func GetFollows(c *context.Context) {
	cursor, _ := strconv.Atoi(c.GetParam("cursor"))
	a, _ := auth.GetCurrentTokenData(c)
	url := fmt.Sprintf("%s/friendships/followers.json?source=%s&count=%d&access_token=%s&uid=%s&cursor=%d",
		WEIBOSERVER, auth.APPKEY, 30, a.AccessToken, a.UID, cursor)

	resp, err := http.Get(url)
	if err != nil {
		c.WriteJson(500, "无法联系新浪服务器")
		return
	}
	defer resp.Body.Close()
	body, _ := ioutil.ReadAll(resp.Body)
	c.WriteBody(resp.StatusCode, body)
}

func main() {
	c := context.New()
	c.AddFilter(func(c *context.Context) {
		url := c.Request.URL.String()
		if strings.Contains(url, "/api/login") ||
			strings.Contains(url, "/api/auth") {
			return
		}

		_, err := auth.GetCurrentTokenData(c)
		if err != nil {
			c.WriteJson(http.StatusUnauthorized, "需要登陆认证")
			return
		}
	})
	router := router.New(c)
	router.GET("/api/login", Login)
	router.GET("/api/auth", auth.Authorize)
	router.GET("/api/token", GetToken)
	router.GET("/api/user", GetUser)
	router.GET("/api/friends/:cursor", GetFriends)
	router.GET("/api/follows/:cursor", GetFollows)

	fmt.Println(http.ListenAndServe("0.0.0.0:8081", router))
}
