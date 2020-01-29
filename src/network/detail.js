import request from './request'
import { compile } from 'vue-template-compiler';
// 获取 详情的 函数
export   function getDetail(iid)
{
        return request({
            url:'/detail',
            params:{
                iid
            }
        })
}
// 包含展示商品信息所用 信息对象
export class GoodsInfo{
    constructor(itemInfo,columns,service)
    {
        this.desc=itemInfo.title;
        this.price=itemInfo.lowNowPrice;
        this.oldPrice=itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.columns=columns;
        this.service =service;
        this.title=itemInfo.title;
    }
}

export function getRecommend(){
        return request({
            url:'/recommend'
        });
}