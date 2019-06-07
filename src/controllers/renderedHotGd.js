const hotGdTpl = require('../views/hotShopList.html')
import Tab from '../models/tab'
export default{
    renderedHotGd(_data){
    // 数据处理
    let data = [];
    while(_data.length !== 0){
        data.push(_data.splice(0,3))
    }
    template.defaults.imports.reg = function(date,sku){
        let reg = `(【.+】)?(.+)(${sku})`
        let exp = new RegExp(reg)
        return date.replace(exp,"$2")
    }
    const renderedHotGdTpl = template.render(hotGdTpl,{data})

    $('.shop-list').html(renderedHotGdTpl)
    new Tab({
        control:'.hot>nav>ul',
        show:'.hot .shop-list>ul>li'
    })
    }
    
}