import {request} from './request'

export function getCategory(){
    return request({
        url:'/category'
    })
}

export function getSubcategory(maitKey){
    return request({
        url:'/subcatagory',
        params:{
            maitKey
        }
    })
}
export function getCategoryDetail(miniWallKey,type){
    return request({
        url:"/subcatagory/detail",
        params:{
            miniWallKey,
            type
        }
    })
}