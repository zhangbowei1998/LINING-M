const bargainGdTpl = require('../views/bargainList.html')
export default{
    renderedBargainGd(data){
    template.defaults.imports.reg = function(date,sku){
        let reg = `(【.+】)?(.+)(${sku})`
        let exp = new RegExp(reg)
        return date.replace(exp,"$2")
    }
    const renderedBargainTpl = template.render(bargainGdTpl,{data})

    $('.bargain .goods-list').html(renderedBargainTpl)
    
    }
    
}