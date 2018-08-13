function SetPrivilege($icon,$menu,$templat){
    this.super={};
    this.icon=$icon;
    this.menu=$menu;
    this.flag=true;
    this.content=null;
    this.templat=$templat;
    var __this__=this;
    

    this.show=function(){
        this.icon.unbind('hover');
        this.icon.hover(function(){this.menu.show();},null)

    };

    this.hide=function(){
        this.menu.hide();
    };
    
    this.moveTo=function(){
        
    };
    this.del=function(){

    };
    this.rename=function(){

    };
    this.copyMenuName=function(obj,menu){
        //移动到
        var $ul=obj.cur_even_this.find('.js_moveToMenu ul')
        __this__.content=$ul;
        obj.cur_even_this.find(menu).unbind('hover');
        obj.cur_even_this.find(menu).hover(function(){
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
                    __this__.menu.hide();
                    __this__.emptyContent();
                });

                //拷贝了一次就不拷贝了
                __this__.flag=false; 

           }
           
           

        },null);
    };

    this.loopMenuNameTo=function(){
        var name=[];
        var pid=[];
        $('.j_sectionMenuA1 .dd .title-h2').each(function(){
            name.push($(this).text());
            pid.push($(this).parent().attr("pid"));
        });
        return {'name':name,'pid':pid};
    };
    this.emptyContent=function(){
        if(this.content){ 
            this.content.empty();
            this.flag=true;
        }
    };

    this.clickWindow=function(){
        $(document).bind('click',function(){
            if(__this__.menu) __this__.menu.hide();
            __this__.emptyContent();
        });
    };



}



    
function Menu($icon,$menu,$templat,Submenu){
    SetPrivilege.call(this,$icon,$menu,$templat);
    this.subMenuArr=[];
    this.Submenu=Submenu;
    var __this__=this;
    this.super.hide=this.hide;
    this.hide=function(){
        this.super.hide();
    };
    this.setSubMenu=function(i){
        this.subMenuArr.push(i);
    };

    this.add=function(){
        
    };


}

function SubMenu($icon,$menu,$templat,Menu){
     SetPrivilege.call(this,$icon,$menu,$templat);
     this.Menu=Menu;
     var __this__=this;



}




$(function(){
    var Dinfo={
        'templat':$('.j_sectionMenuA1 .templat')
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
                var  menu=new Menu(obj.cur_even_this.find('.js_menuIcon'),
                                    obj.cur_even_this.find('.js_mainMenu')，
                                    Dinfo.templat,
                                    null
                                );


                //移到子部门名称时
                tool.run({
                    'list':Dinfo.$subMenuWrap.find('.li'),
                    'event':'hover',
                    'or':true,
                    'class':'hover',
                    'fn':function(obj2){
                        var  subMenu=new SubMenu(obj2.cur_even_this.find('.js_subMenuIcon'),
                                                 obj2.cur_even_this.find('.js_subMenu'),
                                                 Dinfo.templat,
                                                 menu
                                );
                        menu.Submenu=subMenu;

                        //鼠标移到别的子部门名称上当前子部门右侧显示菜单隐藏
                        obj2.temp.find('.js_subMenu').hide();

                        subMenu.copyMenuName(obj2,'.js_subMenu');
                        subMenu.Menu.hide();

                    }
                });
                
                
                menu.copyMenuName(obj,'.js_mainMenu');
                menu.Submenu.hide();
                
            }
        });
});