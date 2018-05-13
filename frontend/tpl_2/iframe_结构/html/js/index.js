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

$(function(){
    var myTab=new window.System.Tab();
    var homepage={
            '$menu':$('.js_sectionMenuA1'),
            '$Sidebar':$('.js_sectionSidebar'),
            '$foot':$('.js_sectionFoot'),
            '$iconWrap':$('.js_sectionIcon-I'),
            '$closeIcon':$('.js_sectionIcon-close'),
            '$menuIcon':$('.js_sectionIconI1wrap'),
            '$iconI1A':$('.js_sectionIconI1A'),
            '$sectionWrapA1':$('.js_sectionWrapA1'),
            'run':function(){
                //鼠标移上图标往上推;
                var __this__=this;
                var stop=function(){
                    __this__.$sectionWrapA1.stop();
                    __this__.$foot.stop();
                    __this__.$Sidebar.stop();
                };

                this.$menuIcon.hover(function(){
                    __this__.$iconI1A.stop();
                    __this__.$iconI1A.animate({ 
                        marginTop: '-28px'
                      }, 300 );
                },function(){
                    __this__.$iconI1A.stop();
                    __this__.$iconI1A.animate({ 
                        marginTop: '0'
                      }, 300 );
                });

                //点击图标展开菜单点击关闭影藏菜单的操作
                this.$iconWrap.toggle(function(){
                    stop();
                    __this__.$Sidebar.animate({ 'left': 0}, 1000 );
                    __this__.$foot.animate({ 'left': 0}, 1000 );
                    __this__.$menuIcon.hide();
                    __this__.$closeIcon.show();
                    __this__.$sectionWrapA1.animate({ 'left': '324px'}, 1000 );
                },function(){
                    stop();
                    __this__.$Sidebar.animate({ 'left': '-220px'}, 1000 );
                    __this__.$foot.animate({ 'left': '-220px'}, 1000 );
                    __this__.$closeIcon.hide();
                    __this__.$menuIcon.show();
                    __this__.$sectionWrapA1.animate({ 'left': '104px'}, 1000 );
                });
            },
            'menuAlign':function(){
                var __this__=this,height=0;
                var footh=__this__.$foot.height();
                var run=function(){
                    var menuH=$('.js_sectionMenuA1').height();
                    height=window.System.Basis.getBodySize('h');
                    __this__.$iconWrap.css({'top':parseInt((height-200)/2)+'px'});
                    height=parseInt((height-footh-menuH)/2);
                    __this__.$menu.css({'top':height+'px'})
                    //console.log('window: '+window.System.Basis.getBodySize('h')+'  foot: '+footh+'  menu: '+menuH+'  height: '+height)

                };

                run();
                $(window).resize(function() {run();});
            }
            
        };

    var now,$WelcomeBack=$('#WelcomeBack');
    myTab.run({
                'list':$('.js_sectionMenu_one .li'),
                'event':'hover,click',
                'class':'cur',
                'or':true,
                'cur_flag':false,
                'block':$('.js_sectionMenu_two'),
                'fn':function(obj){
                    var subId=$(this).attr('subId');
                    now=$('#sub_'+subId);
                    if(now.length){
                        $(now).show().animate({'left':'0'},'fast','swing');
                        $WelcomeBack.show();
                    }
                    

                    //console.log(index +'|'+ $(now).index())
                }

                
            });
    
    
    $WelcomeBack.bind('click',function(){
        if(now.length){
            $(now).animate({'left':'-220px'},'fast','swing');
            $(this).hide();
        }
    });
    

    myTab.run({
                'list':$('.js_sectionMenu_two .li'),
                'event':'click,hover',
                'class':'cur',
                'or':true

                
            });

    //头部菜单
    myTab.run({
                'list':$('#topMenu .li-1'),
                'event':'hover',
                'or':true,
                'class':'cur'
            });

    

    homepage.run();
    homepage.menuAlign();
});