# mall-v1.3.0

## 项目介绍
version-1.3.0

1. 参照 [B站视频](https://www.bilibili.com/video/av59594689)   
1.2.5版本  完成首页，详情页，购物车，个人页面   的编写
2. 新手一个，刚刚学习完 Vue 的基础知识，完成这个案例，
3. 1.3.0版本 完成登录页面 
4. 未来 希望 完善 支付功能， 但涉及微信H5支付，受限于纯前端和个人开发，暂时 无法办到  
有能力的小伙伴 可以自行查看[微信官方文档-H5支付](https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=15_1) 进行开发，  
可以在下方 通知我 或者与我讨论

## 功能简述


## 主要技术栈
+ vue-2.6.11
+ vuex-3.1.2
+ vue-router-3.1.3 
+ better-scroll
+ vue-lazyload
+ js-md5
+ 等

## 项目安装
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
``` 
### Api 结构
baseUrl:  
'http://123.207.32.32:8000/api/hy'  或者  
'http://106.54.54.237:8000/api/hy'

**注意事项**：由于该api 接口是coderwhy 老师再维护，可能不是很稳定  ，注意baseUrl 的更改
1. 首页    

|数据|url|参数|
|:---|:---:|---:|
|multidata(包含首页轮播图等)|baseUrl/home/multidata|无|
|data(商品)|baseUrl/home/data|type,page|             

2. 详情页   

|数据|url|参数|
|:---|:---:|---:|
|商品详情|baseUrl/detail|iid|
|推荐|baseUrl/recommend|无|             

3. 分类

|数据|url|参数|
|:---|:---:|---:|
|一级分类|baseUrl/category|无|
|二级分类|baseUrl/subcategory|maitKey| 
|对应一级二级下的商品列表|baseUrl/subcategory/detail|miniWallkey,type|    

4. 登录

|数据|url|参数|
|:---|:---:|---:|
|用户信息|http://api.colinx.one:8888/test/loginCheck/|username,passwd|

请chrome移动端模式下 [查看演示]()

目录结构 [见](./src/tree.txt)