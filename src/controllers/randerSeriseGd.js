const seriesGdTpl = require('../views/seriesList.html')
export default{
    renderSeriesGd(data){
    const renderSeriesTpl = template.render(seriesGdTpl,{data})
    $('.allseries').html(renderSeriesTpl)
    }
    
}