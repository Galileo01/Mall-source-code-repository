import request from './request'

//获取 所有的 一级  分类
export function getAllCategory() {
  return request({
    url: '/category'
  })
}
//获取 二级分类
export function getSubcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

//获取对应 一级+二级 下的详细goods
export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type //pop/new/sell
    }
  })
}
