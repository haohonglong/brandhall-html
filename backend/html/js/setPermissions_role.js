//角色
$(function(){
    

    

    var Dinfo={
        '$mainMenu'    :null,
        'templat'      :$('.j_sectionMenuA1 .templat'),
        //鼠标移到名称的图标上显示隐藏的菜单
        'hoverMenuIcon':function(obj,icon,menu){
            this.hoverEleseMenuName();
            var __this__=this;
            icon.unbind('hover');
            icon.hover(function(){
                menu.show();
            },null);
        },
        'hoverEleseMenuName':function(){
            var __this__=this;
            //鼠标移到别的名称上当前右侧显示菜单隐藏
            $('.j_sectionMenuA1 .dd').unbind('hover');
            $('.j_sectionMenuA1 .dd').hover(function(){
                if(!($(this).hasClass('cur'))){
                    if(__this__.$mainMenu) __this__.$mainMenu.hide();
                    

                }
            },null);
        },
        'del':function($dd){
            $dd.remove();

        }
    };
       
    

    
    
    //点击一级菜单
    tool.run({
            'list':$('.j_sectionMenuA1 .dd'),
            'event':'click',
            'live':true,
            'hover':true,
            'or'   :true,
            'class':'cur',
            'block':$('.js_sectionBlockA1'),
            'fn':function(obj){
                //一层菜单里的隐藏框子菜单
                Dinfo.$mainMenu=obj.cur_even_this.find('.js_mainMenu');

                //删除名称
                Dinfo.$mainMenu.find('.js_delThisMenu').unbind('click');
                Dinfo.$mainMenu.find('.js_delThisMenu').bind('click',function(){
                    Dinfo.del(obj.cur_even_this);
                });

                Dinfo.hoverMenuIcon(obj,obj.cur_even_this.find('.js_menuIcon'),
                                    Dinfo.$mainMenu);
                Dinfo.$mainMenu.find('.js_editRoleInfo').bind('click',function(){
                    obj.current.block.find('.js_editContent')[0].select();
                    Dinfo.$mainMenu.hide();
                    
                    
                });


            }
        });
    
    
    
    
    
    //新加角色
    var addTitle=function(eve){
        var text=eve.val();
        if(text.trim()) {
            var dd=Dinfo.templat.clone(true);
            dd.find('.title-h2').text(text);
            dd.removeClass('cur').removeClass('none').removeClass('templat').addClass('dd').insertAfter(Dinfo.templat);
            Dinfo.pid++;
        }
    };
    $('.js_newRole').bind('click',function(){
        var $addnewRole=$('.js_addnewRole');
        with($addnewRole){
            show();
            find('input').val('新角色');
            find('input')[0].focus();
            find('input').unbind('blur');
            find('input').bind('blur',function(event){
                addTitle($(event.target));
                hide();
            });
        }
        
    });
    
    
    
    
    
    
    
    
    
    $(document).bind('click',function(){
        if(Dinfo.$mainMenu) Dinfo.$mainMenu.hide();
        
    });
    
    
    
    
    
    //重命名
    $('.js_rename').bind('click',function(){
        if(Dinfo.$mainMenu) {
            Dinfo.$mainMenu.hide();
        }
        var $inputWrap=$(this).parents('dd').find('.js_reName_input');
        var $title=$inputWrap.show().prev();
            $title.hide();
        var $input=$inputWrap.find('input');
            $input.val($title.text());
            $input[0].focus();
            $input.unbind('blur');
            $input.bind('blur',function(event){
                $title.text($(this).val()).show();
                $inputWrap.hide();
                
                
            });
        
    });
    
 
    



    
});