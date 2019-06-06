export default{
    post(url,data){
        return $.ajax({
            url,
            data,
            dataType:'json',
            type:'post',
            success(res){
                return res
            }
        })
    }
}