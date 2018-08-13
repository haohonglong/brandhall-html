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

 var myTab=new window.System.Tab();
 var tools=new window.System.Tools();
(function($){
    $(function(){
		

        var DATE={
            'b_width':0,
            'b_height':0,
            '$sidebarTop':$('#sectionSidebarTop'),
            '$sidebarContent':$('#sectionSidebarContent')
        };

        var setSize=function(n){
            n=n || 0;
            var height=$(window).height();
            var width=$(window).width();
           DATE.$sidebarContent.height(height-DATE.$sidebarTop.height());
        };

         setSize();
        $(window).resize(function() {
          setSize();
        });
        $(window).scroll(function() {
          setSize();
        });


    });


    
})(jQuery);