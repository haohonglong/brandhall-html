/**
 * Tools 0.1 pre
 * 创建人：龙昊宏
 * 名称：
 * 功能：
 *
 *  创建日期：2014.7.12
 *  修改日期：2014.10.17
 *
 *
 * Copyright Software
 *
 *
 */

LAM.run([jQuery],function($){
    'use strict';
    var System = this;
    System
        .import([
             '/Tools.class'
            ,'/Tab.class'
        ],System.classPath,'.js?t='+System.app.t);


    var tools=new System.Tools();




    // $('.sectionList-A2').scroll_absolute({arrows:false});
//===================================左边菜单隐藏动作



    $(function(){
        // $('.sectionWrap-A4').scroll_absolute({arrows:false});
        // $(window).resize(function(){
        //     $('.sectionWrap-A4').scroll_absolute({arrows:false});
        // })


        // new System.Tab({
        //     'list'   :$('.sectionList-A2 dd'),
        //     'event'  :'click',
        //     'class'  :'hover',
        //     'fn':function () {
        //         $(this).find('.sectionList-A1').toggle();
        //     }
        // }).run();




//===================================左边菜单隐藏动作 end



        /**
         *头部分区域
         *
         */
        new System.Tab({
            'list':$('.sectionTitle-A1-5 .myli'),
            'event':'click',
            'class':'cur',
            'block':$('.js_Block_A1'),
            'fn':function(obj){
                obj.current.block.each(function(i){
                    if(obj.this_index==i){
                        $(this).show();
                    }else{
                        $(this).hide();
                    }
                });

            }
        }).run();


        $('.sectionTitle-A1-3 .sectionIcon-A2 i').hover(function(){
            $(this).addClass('hover');
            $(this).parents('.sectionTitle-A1-3').find('.sectionMessage-A2').show();
        },function(){
            $(this).removeClass('hover');
            $(this).parents('.sectionTitle-A1-3').find('.sectionMessage-A2').hide();
        }).toggle(function(){
            $(this).addClass('cur');
            $(this).parents('.sectionTitle-A1-3').find('.sectionMessage-A2 p').text('标记为已读');
        },function(){
            $(this).removeClass('cur');
            $(this).parents('.sectionTitle-A1-3').find('.sectionMessage-A2 p').text('标记为未读');
        });

        /**
         *头部分搜索框的滑动交互效果
         *
         */

        $('.sectionSearch-A1 i').on('click',function(){
            if(!this.flag){
                $(this).parent().find('.bg').animate({"width":"200px"}).show();
                $(this).addClass('B').animate({"right":"170px"});
                this.flag = true;
            }else{
                $(this).parent().find('.bg').css({"width":0}).hide();
                $(this).removeClass('B').css({"right":"12px"});
                this.flag = false;

            }


        });


        /**
         *   鼠标hover时下面的隐藏模块显示,鼠标移除隐藏模块时模块恢复隐藏
         *
         */
        tools.hover_next_box_show('.js_showBoxA1','.sectionShowBox-A1');


        tools.set_whole_screen_size({
            '$div':$('.js_mapWrap'),
            'h':true,
            'w':true,
            'wSize':$('.sectionTitle-A12').length,
            'hSize':200
        });

    });


});








