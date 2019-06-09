export default class Tab{
    constructor(obj){
        this.controlList = $(obj.control)
        this.showList = $(obj.show)
        this.init()
    }
    init(){
        this.bindEvent()
    }
    bindEvent(){
        let that = this
        this.controlList.on('click','li',function(){
            let index = $(this).index()
            console.log(index)
            $(this).addClass('active').siblings().removeClass('active')
            that.showList.eq(index).addClass('active').siblings().removeClass('active')
        })  
    }
}