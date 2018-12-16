$(function(){

   //监听窗口的滚动
    autoPlay();
    function autoPlay(){
        $(window).scroll(function(){
            var offset = $("html,body").scrollTop();

            //判断
            if(offset > 0 && offset < 600){
                $(".i1").css("backgroundColor","#000000")
            }else{
                $(".i1").css("backgroundColor","")
            }

            if(offset > 600 && offset < 1200){
                $(".i2").css("backgroundColor","#000000")
            }else{
                $(".i2").css("backgroundColor","")
            }
            if(offset > 1200 && offset < 1800){
                $(".i3").css("backgroundColor","#000000")
            }else{
                $(".i3").css("backgroundColor","")
            }

            if(offset > 1800 && offset < 2400){
                $(".i4").css("backgroundColor","#000000")
            }else{
                $(".i4").css("backgroundColor","")
            }
        })
    }

    //
    // //相册滚动
    // aa();
    // function aa(){
    //
    //        var offset = 0;
    //
    //        setInterval(function(){
    //
    //            offset += -10;
    //
    //            if(offset <= -4252){
    //                offset = 0;
    //            }
    //
    //            $(".bb ul").css("marginLeft",offset);
    //        },50)
    // }

});
