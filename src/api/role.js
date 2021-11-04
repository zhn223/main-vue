import service from "@/utils/request.js";

//获取网站角色信息
export function OrderList(params){
    return service.request({
        url: process.env.VUE_APP_APIURL + '/getorder/:pagelist=2',
        method: 'get',
        params,
    })
}