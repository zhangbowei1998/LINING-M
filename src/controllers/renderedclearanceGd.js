const clearanceGdTpl = require('../views/clearanceList.html')
export default{
    renderedClearanceGd(data){
    template.defaults.imports.reg = function(date,sku){
        let reg = `(【.+】)?(.+)(${sku})`
        let exp = new RegExp(reg)
        return date.replace(exp,"$2")
    }
    const renderedClearanceTpl = template.render(clearanceGdTpl,{data})

    $('.clearance .goods-list').html(renderedClearanceTpl)
    
    }
    
}