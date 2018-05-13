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
 var tools=new window.System.Tools(new window.System.Browser());
(function($){
    $('.sectionScroll').scroll_absolute({arrows:false});
    $(function(){
     	var myData={
            '$imgsWrap':$('.js_sectionFluid'),
            '$map':$('.js_mapWrap'),
            '$map2':$('.js_mapWrap2'),
            'padding':250+80+40,
            'setPaddingL':function($ul,p){
                $ul.css('margin-left',p)
            }
        };

        myTab.run({
                'list':$('.js_sectionMenuA1 .li-1'),
                'event':'click',
                'class':'cur',
                'or':true,
                '$scroll':$('.sectionScroll'),
                'fn'     :function(obj){
                    obj.current.$scroll.scroll_absolute({arrows:false});
                    
                }

                
            });

         $('.js_sectionMenuA1 a').bind('click',function(){
            $(this).next().toggle();
        });

        
		tools.gotoTop($('.js_gototop'));
       
       
        //tools.setIEfixed($('#sectionSidebar'));

        tools.set_whole_screen_size({
               '$div':myData.$map,
               'h':true,
               'hSize':48
            });
        
        tools.set_whole_screen_size({
               '$div':myData.$map2,
               'h':true,
               'hSize':285
            });

        //顶部导航栏
        var topNav={
            '$sectionHeader':$('.sectionHeader-A1'),
            '$icon':$(".sectionHeader-A1 .login .icon4"),
            'packDwon':function(){
                var _this_=this;
                _this_.$sectionHeader.stop();
                _this_.$sectionHeader.animate({
                   top:0
                },1000,function(){
                    setTimeout(function(){
                        _this_.$sectionHeader.animate({
                           top:-82
                        },500);
                    },1000)
                });                
            },
            'run':function(){
                var __this__=this;
                /*
                if(!this.$sectionHeader[0]){
                    $('.sectionSidebar-A1').css({'top':0});
                    $('.sectionContainer-A3 .p40').css({'paddingTop':0});
                    return;
                }
                */
                tools.menu_of_auto_fixed({
                    'fn1':function(){
                        this.f=true;
                        __this__.$sectionHeader.stop();
                        __this__.$sectionHeader.animate({
                           top:0
                        },400);
                    },
                    'fn2':function(h){
                       __this__.$sectionHeader.stop();
                       if(this.f && h<10){
                           this.f=false;
                            __this__.$sectionHeader.animate({
                           top:-82
                        },400);
                        }
                        

                    },
                    'f':true,
                    'height':300
                });

                this.$icon.hover(function(){
                     $(this).find(".set").show(); 
                     $(this).find("a").addClass("setIconHover");
                },function(){
                     $(this).find(".set").hide(); 
                     $(this).find("a").removeClass("setIconHover");
                });
                

                this.packDwon();
            },
            
            
        };
        
        topNav.run();

        //头部菜单
        myTab.run({
                    'list':$('#topMenu .li-1'),
                    'event':'hover',
                    'or':true,
                    'class':'cur'
                });

    });


    
})(jQuery);