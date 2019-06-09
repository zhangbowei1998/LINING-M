const moreSeriseGdTpl = require('../views/moreSeriseList.html')
import Tab from '../models/tab'
export default{
    renderMoreSeriseGd(data){
    template.defaults.imports.reg = function(date,sku){
        let reg = `(【.+】)?(.+)(${sku})`
        let exp = new RegExp(reg)
        return date.replace(exp,"$2")
    }
    const renderMoreSeriseTpl = template.render(moreSeriseGdTpl,{data})

    $('.moreSeries').html(renderMoreSeriseTpl)
    console.log($('.shop-tab .tab-control>li>a'))
    class TabB extends Tab {
        bindEvent(){
            let that = this
            this.controlList.on('click',function(){
                let index = Array.from(that.controlList).indexOf(this)
                $(this).addClass('active').parent().siblings().children('a').removeClass('active')
                that.showList.eq(index).addClass('active').siblings().removeClass('active')
            }) 
        }
    }
    new TabB({
        control:'.shop-tab .tab-control>li>a',
        show:'.tab-center>li'
    })
    }
    
}