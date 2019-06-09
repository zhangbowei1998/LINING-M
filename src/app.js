const indexTpl = require('./views/index.html')
import {bscroll} from './controllers/bscroll'
import fetch from './models/fetch'
import renderedHotGd from './controllers/renderedHotGd'
import renderedClearanceGd from './controllers/renderedClearanceGd'
import renderedBargainGd from './controllers/renderedBargainGd'
import renderSeriesGd from './controllers/randerSeriseGd'
import renderMoreSeriseGd from './controllers/renderMoreSeriseGd'

const renderedIndexTpl = template.render(indexTpl)

document.querySelector('#app').innerHTML = renderedIndexTpl

async function loadData(){
    let res = await fetch.post('/api/wap/indexLoadPrice.html',{
        sku:'AHSP485-1,AHSP183-1,AHSN051-4,ATSN045-2,AHSP267-2,AHSP023-1,AHSP416-6,AHSP298-1,ATSP174-3,AKQN009-9,AKQP009-2,AKQP026-1,AKSP129-4,AKSP047-3,AKSP123-1,AKSP065-2,AEKP008-1,AKSP489-6,ABAL049-12,ABCP031-3,ABPN015-2,AGCM197-7,ARHM117-2,ARCN001-4,AGCP062-2,ARHN074-2,ARJL002-7,ARHN195-5,ARBN035-5,ARHM119-4,ARHN262-1,ARBN038-1,AGLM112-4,AKLM724-3,AYKM232-1,AHSN555-2,ATSM025-9,ATSN087-7,ATSM188-1,APLN128-4,APLN004-3,AGCM163-1,AGLN083-4,ARHN072-2,AYMM106-5,AGLP097-4,AHSP713-4,AGCP338-1,AHSP717-4,AHSP269-3,AHSP069-1,AHSP132-2,AHSP216-7,AKSP117-2,AKSP119-1,AKSP042-1,AKSP046-1,AGCP021-4,AGLN237-6,AGCP072-2,AGCP134-1,ARBP009-11,ARBP012-3,AREP005-1,ARHP129-3,ARHN069-4,ARHN035-2,ARHP039-2,ARHM089-6,ATSP127-2,ATSP135-4,AKQP031-1,ARBN208-1,ARBM076-3,ARBP034-1,ARHP148-2,ARHN078-3,ARHP158-1,ATSP038-3,ATSP194-3,AKSP082-1,ABAN035-3,ABAN041-1,ABAM023-5,ABCM047-7,ABCP033-4,ABAN063-1,ABAN021-4,ABAN075-6,ABAP047-3,ABAP049-2,ABAP023-6,YHSN069-1,ATSN159-4,AHSN307-6,AATN005-2,YATP011-5,AATP001-2,YKSN041-1,AKSP045-2,AKSP055-2,AHSP649-1,AHSP056-2,AHSP273-2,AHSP277-1,AHSP489-1,AKSP657-1,AKSP577-1,AKSP099-1,AGCN097-1,AGCP093-4,AGCN361-2,AHSP412-1,AHSP398-2,AHSP142-1,AKSP126-3,AKSP202-2,AKSP146-1,AGCM224-5,AGCN402-5,AGLN232-6,ATSP103-1,ATSP084-1,ATSN081-1,ATSN245-5,ATSP193-2,APLP079-3,APLN169-6,APLN055-4,AKSP067-1,AKSP043-1,AKSN259-3,ATSN038-6,ATSP092-2,ATSP176-2,AUDN044-1,AUBP056-1,AUBP024-2,AKSP132-1,AKSP128-2,AKSN166-3',
        type:1
    })
    let _data = res.data
    let data = [];
    while(_data.length !== 0){
        data.push(_data.splice(0,3))
    }
    const hotGoodsData = data.splice(0,9)
    renderedHotGd.renderedHotGd(hotGoodsData)
    const clearanceGoodsData = data.splice(0,3)
    renderedClearanceGd.renderedClearanceGd(clearanceGoodsData)
    const bargainGoodsData = data.splice(0,3)
    renderedBargainGd.renderedBargainGd(bargainGoodsData)
    const seriesData = data.splice(0,6)
    var  _seriesData = []
    var  _dataserise = []
    seriesData.forEach((res)=>{
        res.forEach((res)=>{
            _dataserise.push(res)
        })
    })
    var _temporaryData = []
    _dataserise.forEach((res)=>{
        _temporaryData.push(res)
        if(_temporaryData.length === 4){
            _seriesData.push(_temporaryData)
            _temporaryData = []
        }
    }) 
    renderSeriesGd.renderSeriesGd(_seriesData)
    let moreSeriesData = []
    while(data.length){
        moreSeriesData.push(data.splice(0,6))
    }
    renderMoreSeriseGd.renderMoreSeriseGd(moreSeriesData.splice(0,4))
}
// $.ajax({
//     url:'/api/wap/indexLoadPrice.html',
//     data:{
//         sku:'AHSP485-1,AHSP183-1,AHSN051-4,ATSN045-2,AHSP267-2,AHSP023-1,AHSP416-6,AHSP298-1,ATSP174-3,AKQN009-9,AKQP009-2,AKQP026-1,AKSP129-4,AKSP047-3,AKSP123-1,AKSP065-2,AEKP008-1,AKSP489-6,ABAL049-12,ABCP031-3,ABPN015-2,AGCM197-7,ARHM117-2,ARCN001-4,AGCP062-2,ARHN074-2,ARJL002-7,ARHN195-5,ARBN035-5,ARHM119-4,ARHN262-1,ARBN038-1,AGLM112-4,AKLM724-3,AYKM232-1,AHSN555-2,ATSM025-9,ATSN087-7,ATSM188-1,APLN128-4,APLN004-3,AGCM163-1,AGLN083-4,ARHN072-2,AYMM106-5,AGLP097-4,AHSP713-4,AGCP338-1,AHSP717-4,AHSP269-3,AHSP069-1,AHSP132-2,AHSP216-7,AKSP117-2,AKSP119-1,AKSP042-1,AKSP046-1,AGCP021-4,AGLN237-6,AGCP072-2,AGCP134-1,ARBP009-11,ARBP012-3,AREP005-1,ARHP129-3,ARHN069-4,ARHN035-2,ARHP039-2,ARHM089-6,ATSP127-2,ATSP135-4,AKQP031-1,ARBN208-1,ARBM076-3,ARBP034-1,ARHP148-2,ARHN078-3,ARHP158-1,ATSP038-3,ATSP194-3,AKSP082-1,ABAN035-3,ABAN041-1,ABAM023-5,ABCM047-7,ABCP033-4,ABAN063-1,ABAN021-4,ABAN075-6,ABAP047-3,ABAP049-2,ABAP023-6,YHSN069-1,ATSN159-4,AHSN307-6,AATN005-2,YATP011-5,AATP001-2,YKSN041-1,AKSP045-2,AKSP055-2,AHSP649-1,AHSP056-2,AHSP273-2,AHSP277-1,AHSP489-1,AKSP657-1,AKSP577-1,AKSP099-1,AGCN097-1,AGCP093-4,AGCN361-2,AHSP412-1,AHSP398-2,AHSP142-1,AKSP126-3,AKSP202-2,AKSP146-1,AGCM224-5,AGCN402-5,AGLN232-6,ATSP103-1,ATSP084-1,ATSN081-1,ATSN245-5,ATSP193-2,APLP079-3,APLN169-6,APLN055-4,AKSP067-1,AKSP043-1,AKSN259-3,ATSN038-6,ATSP092-2,ATSP176-2,AUDN044-1,AUBP056-1,AUBP024-2,AKSP132-1,AKSP128-2,AKSN166-3',
//         type:1
//     },
//     type:'post',
//     success(res){
//         console.log(res) 
//     }
// })
loadData()
new bscroll().init()
