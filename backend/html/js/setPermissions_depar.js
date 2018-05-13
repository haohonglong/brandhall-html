//部门
$(function(){
    
    
    
    

    

    var Dinfo={
        '$mainMenu'         :null,
        '$dd'               :null,
        'hoverSubMenus'     :null,
        '$subMenuWrap'      :null,
        '$subMenu'          :null,
        'thisBlock'         :null,
        '$ul'               :null,
        '$ul2'              :null,
        'flag'              :true,
        'flag2'             :true,
        '$menu2'            :null,
        'menuTemplat'       :$('.j_sectionMenuA1 .menu-templat'),
        'subMenuTemplat'    :$('.j_sectionMenuA1 .submenu-templat'),
        'pid'               :0,
        //鼠标移到一级菜单名称右侧的图标上显示隐藏的框
        'hoverMenuIcon':function(obj,icon,menu){
            this.hoverEleseMenuName(obj);
            var __this__=this;
            icon.unbind('hover');
            icon.hover(function(){
                __this__.mainMenu(obj);
                menu.show();
                //hover 子部门 一级菜单隐藏框消失
                obj.cur_even_this.find('.js_subMenuList').unbind('hover');
                __this__.$subMenuWrap.hover(function(){__this__.$mainMenu.hide();},null);
                
                
                __this__.$menu2 =menu.find('.js_moveToMenu');
                
            });
        },
        //鼠标移到子部门名称的图标上显示子部门隐藏的框
        'hoverSubMenuIcon':function(obj,icon,menu){
            var __this__=this;
            if(Dinfo.hoverSubMenus){
                Dinfo.hoverSubMenus();
                Dinfo.hoverSubMenus=null;
                
            }
             

            this.hoverEleseSubMenuName(obj);
            icon.unbind('hover');
            icon.hover(function(){
                __this__.subMenu(obj);
                menu.show();    
            });
            __this__.$menu2 =menu.find('.js_moveToMenu');

        },

        'hoverEleseMenuName':function(obj){
            var __this__=this;
            //鼠标移到别的名称上当前右侧显示菜单隐藏
            $('.j_sectionMenuA1 .dd').unbind('hover');
            $('.j_sectionMenuA1 .dd').hover(function(){
                if(!($(this).hasClass('cur'))){
                    if(__this__.$mainMenu) __this__.$mainMenu.hide();
                    __this__.emptyMenu2();

                }
            },null);
        },
        'hoverEleseSubMenuName':function(obj){
            var __this__=this;
            
            
        },

        'mainMenu':function(obj){
            var __this__=this;
            if(this.$mainMenu){
                this.$mainMenu.find('.js_menu2_Li').unbind('hover');
                this.$mainMenu.find('.js_menu2_Li').hover(function(){
                    __this__.$menu2.show();

                },null).siblings().hover(function(){__this__.$menu2.hide();});
            }
        },
        'subMenu':function(obj){
            var __this__=this;
            if(this.$subMenu){
                this.$subMenu.find('.js_menu2_Li').unbind('hover');
                this.$subMenu.find('.js_menu2_Li').hover(function(){
                    __this__.$menu2.show();

                },null).siblings().hover(function(){__this__.$menu2.hide();});
            }
        },

        'emptyMenu2':function(){
            if(this.$ul){ 
                this.$ul.empty();
                this.flag=true;
            }

            if(this.$ul2){ 
                this.$ul2.empty();
                this.flag2=true;
            }



        },
        'rename':function(){
            
        },

        'MoveTo':function(obj,$li){
            var text=obj.cur_even_this.find('.title-h2').text();//获取到当前菜单名称

            //获取到要移动到的元素
            var i=$li.attr('pid');
            //不能自己移动自己
            if(obj.cur_even_this.attr('pid') === i){
                alert('不能这样移动');
                return false;
            }
            var $dd=$('#pmenu_'+i);
            if('noSubMenu' === $dd.attr('attr')){
                $dd.removeAttr('attr');
            }
            var tplLi=$dd.find('.sectionList-A1-4 li').eq(1);
            var li=tplLi.clone(true);
            if(li.hasClass('none')){
                li.removeClass('cur').removeClass('none');
            }else{
                li.removeClass('cur');
            }
            li.find('a').text(text);
            li.insertBefore(tplLi);
            this.del(obj.cur_even_this);
        },
        
        
        'del':function($div){
            $div.remove();

        },
        'HasSubMenu':function($dd){
            if('noSubMenu' === $dd.attr('attr')){
                return false;
            }else{
                return true;
            }
        },
        'copyMenuName':function(obj){
            var __this__=this;
            //移动到
            var $ul=obj.cur_even_this.find('.js_moveToMenu ul')
            __this__.$ul=$ul;
            //obj.cur_even_this.find('.js_menuIcon').hover(function(){
            obj.cur_even_this.find('.js_mainMenu').unbind('hover');
            obj.cur_even_this.find('.js_mainMenu').hover(function(){
                if(__this__.flag){//防止重复拷贝菜单名称 如果是真就拷贝反正就不拷贝
                    var M=__this__.loopMenuNameTo();
                    for(var i=0;i<M.name.length;i++){
                        $ul.append('<li pid="'+M.pid[i]+'">'+M.name[i]+'</li>');
                    }
                    //删除名称
                    $(this).find('.js_delThisMenu').unbind('click');
                    $(this).find('.js_delThisMenu').bind('click',function(){
                        __this__.del(obj.cur_even_this);
                    });


                    //移动时要做的事
                    $ul.find('li').unbind('click');
                    $ul.find('li').bind('click',function(event){
                        if(!__this__.HasSubMenu(obj.cur_even_this)){
                            __this__.MoveTo(obj,$(this));   
                        }else{
                            alert('不能移动因为下面有子部门！');
                        }
                        if(Dinfo.$mainMenu) Dinfo.$mainMenu.hide();
                        Dinfo.emptyMenu2();
                    });
                    //拷贝了一次就不拷贝了
                    __this__.flag=false; 

               }
               
               

            },null);
        },
        'copyMenuName2':function(obj){
            
            var __this__=this;
            //移动到
            var $ul=obj.cur_even_this.find('.js_moveToMenu ul');
            __this__.$ul2=$ul;
            //obj.cur_even_this.find('.js_menuIcon').hover(function(){
            obj.cur_even_this.find('.js_subMenu').unbind('hover');
            obj.cur_even_this.find('.js_subMenu').hover(function(){
                if(__this__.flag2){//防止重复拷贝菜单名称 如果是真就拷贝反正就不拷贝
                    var M=__this__.loopMenuNameTo();
                    for(var i=0;i<M.name.length;i++){
                        $ul.append('<li pid="'+M.pid[i]+'">'+M.name[i]+'</li>');
                    }
                    //删除名称
                    $(this).find('.js_delThisMenu').unbind('click');
                    $(this).find('.js_delThisMenu').bind('click',function(){
                        if(obj.cur_even_this.next()[0]){
                             //当删除子部门时如果下一个没有子部门就把当前部门上的attr标示属性加上
                            var dd=obj.cur_even_this.parents('dd');
                            dd.attr("attr","noSubMenu");  
                            
                        }
                        __this__.del(obj.cur_even_this);
                    });


                    //移动时要做的事
                    $ul.find('li').unbind('click');
                    $ul.find('li').bind('click',function(event){
                        __this__.MoveTo(obj,$(this));   
                        
                        if(Dinfo.$subMenu) Dinfo.$subMenu.hide();
                        Dinfo.emptyMenu2();
                    });
                    //拷贝了一次就不拷贝了
                    __this__.flag2=false; 

               }
               
               

            },null);
        },

        'loopMenuNameTo':function(){
            var name=[];
            var pid=[];
            $('.j_sectionMenuA1 .dd .title-h2').each(function(){
                name.push($(this).text());
                pid.push($(this).parents('dd').attr("pid"));
            });
            

            return {'name':name,'pid':pid};
        }
    };
       
    

    
    //初始化动态给每个一级菜单名称添加pid
    $('.j_sectionMenuA1 .dd').each(function(){
        $(this).attr("pid",Dinfo.pid);
        $(this).attr("id","pmenu_"+Dinfo.pid);
        Dinfo.pid++;
    });
    


    //点击一级菜单
    tool.run({
            'list':$('.j_sectionMenuA1 .dd'),
            'event':'click',
            'live':'live',
            'hover':true,
            'or'   :true,
            'class':'cur',
            'block':$('.js_sectionBlockA1'),
            'fn':function(obj){
                


                //一层菜单里的隐藏框子菜单
                Dinfo.$subMenuWrap=obj.cur_even_this.find('.js_subMenuList');
                Dinfo.$mainMenu=obj.cur_even_this.find('.js_mainMenu');

                Dinfo.hoverMenuIcon(obj,obj.cur_even_this.find('.js_menuIcon'),
                                    Dinfo.$mainMenu);
                
                var mainTitle=obj.cur_even_this.find('.title-h2');
                mainTitle.unbind('hover');
                mainTitle.hover(function(){
                        if(Dinfo.$subMenu){
                            Dinfo.$subMenu.hide();
                        }
                    },null
                    );

                    Dinfo.$dd=obj.cur_even_this;
                if(!Dinfo.hoverSubMenus && obj.this_index !=0 ){
                    Dinfo.hoverSubMenus=hoverSubMenus(Dinfo.$dd);
                    Dinfo.hoverSubMenus();
                }
                
                

                //把菜单的名字copy到移动栏中
                Dinfo.copyMenuName(obj);


                
                
            }
        });
    
    

    function hoverSubMenus(dd){
        //移到子部门名称时
        return function(){
            tool.run({
                'list':dd.find('.js_subMenuList .li'),
                'event':'hover',
                'or':true,
                'class':'',
                'fn':function(obj2){
                    //console.log(11);
                    //移到子部门名称右侧的图标时
                    Dinfo.$mainMenu.hide();
                    Dinfo.$subMenu =dd.find('.js_subMenu');
                    Dinfo.hoverSubMenuIcon(obj2,obj2.cur_even_this.find('.js_subMenuIcon'),
                                        obj2.cur_even_this.find('.js_subMenu'));
                    //鼠标移到别的子部门名称上当前子部门右侧显示菜单隐藏
                    obj2.temp.find('.js_subMenu').hide();
                    Dinfo.copyMenuName2(obj2);
                }
            });

        };
        
    }

    
    
    
    //新建部门
    var addTitle=function(eve){
        var text=eve.val();
        if(text.trim()) {
            var dd=Dinfo.menuTemplat.clone(true);
            dd.find('.title-h2').text(text);
            dd.attr("pid",Dinfo.pid).attr("id","pmenu_"+Dinfo.pid).removeClass('cur').removeClass('none').removeClass('menu-templat').addClass('dd').insertAfter(Dinfo.menuTemplat);
            Dinfo.pid++;
        }
    };
    //新加部门
    $('.js_newDepartment').bind('click',function(){
        var $addDepartment=$('.js_addnewDepartment');
        with($addDepartment){
            show();
            find('input').val('新部门');
            find('input')[0].focus();
            find('input').unbind('blur');
            find('input').bind('blur',function(event){
                addTitle($(event.target));
                hide();
            });
        }  
        
    });
    
    
    
    //添加子部门
    $('.js_newSubDepartment').unbind('click');
    $('.js_newSubDepartment').bind('click',function(){
        if(Dinfo.$mainMenu) {
            Dinfo.$mainMenu.hide();
        }
        //当添加子部门时把当前部门上的attr标示属性去掉
        var dd=$(this).parents('dd');
        if(dd.attr('attr')){
            dd.removeAttr('attr');    
        }
        
        var $addnewSubDepartment=dd.find('.js_addnewSubDepartment');
        with($addnewSubDepartment){
            show();
            find('input').val('新子部门');
            find('input')[0].focus();
            find('input').unbind('blur');
            find('input').bind('blur',function(event){
                var e=$(event.target);
                var curli=e.parent();
                var text=e.val();
                if(text.trim()) {
                    var li=Dinfo.subMenuTemplat.clone(true);

                    li.find('.title a').text(text);
                    li.removeClass('cur').removeClass('none').removeClass('submenu-templat').insertAfter(curli);
                }
                hide();
            });
        }

        Dinfo.hoverSubMenus=hoverSubMenus(Dinfo.$dd);
        Dinfo.hoverSubMenus();
        
    });
    
    
    
    
    
    $(document).bind('click',function(){
        if(Dinfo.$mainMenu) Dinfo.$mainMenu.hide();
        if(Dinfo.$subMenu) Dinfo.$subMenu.hide();
        Dinfo.emptyMenu2();
        

        
    });
    
    
    
    
    
    //重命名
    $('.js_rename').bind('click',function(){
        if(Dinfo.$mainMenu) {
            Dinfo.$mainMenu.hide();
        }
        var $inputWrap=$(this).parents('.title-wrap').find('.js_reName_input');
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
    
 
    

    tool.run({
            'list':$('.sectionList-A1-4 .li'),
            'event':'click',
            'live':'live',
            'or':true,
            'class':'cur'
        });

    
});