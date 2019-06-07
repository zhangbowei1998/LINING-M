export class bscroll{
    constructor(){}
    // 初始化
    init(){
        this.bscroll= new BScroll('main',{
            probeType:3,
            click:true
        })
        this.bindEvent()
    }
    bindEvent(){
        let that = this
        this.toTop()
        $('footer ul').on('click','li',function(){
            that.toIndex($(this).index())
        })
        this.bscroll.on('scroll',(e)=>{
            this.addActive(e.y)
        })
        $('footer').css('display','none')
    }
    // 返回顶部
    toTop(){
        $('#toTop').on('click',()=>{
            this.bscroll.scrollTo(0,0,700)
        })
    }
    // 去相应的楼层
    toIndex(index){
        switch(index){
            case 0:
                this.bscroll.scrollTo(0,-585,500)
                break;
            case 1:
                this.bscroll.scrollTo(0,-1174,500)
                break;
            case 2:
                this.bscroll.scrollTo(0,-2550,500)
                break;
            case 3:
                this.bscroll.scrollTo(0,-3175,500)
                break;
            case 4:
                this.bscroll.scrollTo(0,-3815,500)
                break;
        }
    }
    addActive(position){
        let li = $('footer ul li')
        // footer的现实与隐藏
        position<= -585?$('footer').css('display','block'):$('footer').css('display','none')
        // 楼梯效果
        position<= -585 && position >-1174? li.eq(0).addClass('active').siblings().removeClass('active'):''
        position<= -1174 && position >-2550?li.eq(1).addClass('active').siblings().removeClass('active'):''
        position<= -2550 && position >-3175?li.eq(2).addClass('active').siblings().removeClass('active'):''
        position<= -3175 && position >-3815?li.eq(3).addClass('active').siblings().removeClass('active'):''
        position<= -3815?li.eq(4).addClass('active').siblings().removeClass('active'):''
        

    }
}
