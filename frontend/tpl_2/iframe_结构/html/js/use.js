/**
 * Tools 0.1 pre
 * 创建人：龙昊宏
 * 名称：
 * 功能：
 * 
 *  创建日期：2014.7.12      
 *  修改日期：2014.7.12
 * 
 *
 * Copyright Software 
 * 
 * 
 */

 // var myTab=new window.System.Tab();
 // var tools=new window.System.Tools(new window.System.Browser());
// (function($){
    $(function(){
        //全局自定义滚动条
        //$('.sectionScroll').height($(window).height());
        if($('.sectionScroll')[0]){
            $('.sectionScroll').scroll_absolute({arrows:false});
            $(window).resize(function(){
                $('.sectionScroll').scroll_absolute({arrows:false});
            })    
        }
        
        
        
        

    });
    
// })(jQuery);