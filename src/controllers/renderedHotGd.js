const hotGdTpl = require('../views/hotShopList.html')
export default{
    renderedHotGd(_data){
    // 数据处理
    let data = [];
    while(_data.length !== 0){
        data.push(_data.splice(0,9))
    }

    console.log(data)
    const renderedHotGdTpl = template.render(hotGdTpl,{data})

    $('.shop-list').html(renderedHotGdTpl)
    }
}