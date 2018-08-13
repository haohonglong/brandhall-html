var myData=null;
$(function(){
    myData={
            'Goods_class':{//商品分类
                '$select':$('.js_sectionBoxA23'),
                '$Crumb':$('.js_sectionCrumbA2'),
                'bun':[$('.js_sectionBtnA3_1'),$('.js_sectionBtnA3_2')]
            },
            'Main_material':{//主要材料
                'List':{'$list':$('.js_sectionListA4 li'),
                'name':''
                        
                },
                'Array':{
                    'arr_classid':[],
                    'Checkbox':{
                        'arr_pid':[],
                        'arr_index':[]
                    },
                    'Selected':{
                        'arr_pid':[],
                        'arr_index':[],
                        'arr_classid':[]
                    }

                },
                '$class':$('.js_sectionBoxA20'),
                '$checkbox':$('.js_sectionBoxA20 :checkbox'),
                '$block':$('.js_sectionBlockA20'),
                '$detail':$('.js_sectionBoxA21 .wrap'),
                'col_2_html':['<li><label><input class="v-negative3" type="checkbox"></label><span>r_name</span></li>'],//第二列要添加数据的格式
                'col_3_html':['<div classid="r_num" class="sectionBox-A22 sectionFloat-A1 mb20"><h4 class="mb5">r_title</h4><ul class="clear"><li pid="r_pid"><span class="name L">r_name</span><div class="sectionIcon-A3 L"><i class="myclose"></i></div></li></ul></div>',//第三列要添加数据的格式,头部主材料名称
                              '<li pid="r_pid"><span class="name L">r_name</span><div class="sectionIcon-A3 L"><i class="myclose"></i></div></li>'],//头部主材料名称下的名称列表
                '$clear':$('.js_sectionBoxA21 .more a'),
                'each_chekbox':function(){//迭代主要材料下多选框把pid 和 索引 保存起来 为将来勾去多选框做准备，这样可以不用再遍历元素，直接通过索引值来找到元素
                    var __this__=this;
                    this.$checkbox.each(function(i){
                        __this__.Array.Checkbox.arr_index.push(i);
                        __this__.Array.Checkbox.arr_pid.push($(this).attr('pid'));
                    });
                },
                'echo_chekbox_index':function(pid){//通过pid匹配 找到多选框的下标 并返回 
                    var arr_pid=this.Array.Checkbox.arr_pid;
                    for(var i=0;i<arr_pid.length;i++){
                        if(pid == arr_pid[i]){
                            return this.Array.Checkbox.arr_index[i];
                        }
                    }
                },
                'del_name_label':function(pid){//通过pid匹配 删除对应的标签
                   var __this__=this;
                   $('.js_sectionBoxA21 li').each(function(){
                        if(parseInt($(this).attr('pid')) === parseInt(pid)){
                            $(this).remove();
                            __this__.del_pid_data();
                            return false;
                        }
                   });
                },
                'del_pid_data':function(){//删除存储pid 数组记录值
                    if(myData.Main_material.Array.Selected.arr_pid.length > 1){
                        myData.Main_material.Array.Selected.arr_pid.pop();
                        myData.Main_material.Array.Selected.arr_classid.pop();
                    }
                },
                'search_pid':function(id){
                    
                    $(this.$checkbox.get(this.echo_chekbox_index(id))).attr("checked",false);
                        
                }
            },
            'Goods_spec':{//商品规格
                    '$colorbox_wrap':$('.js_sectionColorBoxA1'),
                    '$colorbox'     :$('.js_sectionColorBoxA1 li'),//颜色分类
                    'Size'          :{
                        '$wrap' :$('.js_sectionSize ul'),
                        'sid'   :0,
                        'Add'   :{
                            '$add_bunt' :$('.js_sectionSize a'),
                            '$text'     :$('.js_sectionSize .text')
                        },
                        'Html'  :{
                            'html_1':'<li><label><input class="v-negative3" type="checkbox" sid="r_sid"></label><span>r_size</span></li>',
                        },
                        'add_size':function(size){
                            var li=this.Html.html_1.replace(/r_sid/,this.sid).replace(/r_size/,size);
                            this.$wrap.append(li);
                            this.sid++;
                        }
                        
                    },
                    'Arrays':{
                        'Color':{
                            'arr_cid':[]
                        },
                        'Size':{
                            'arr_sid':[]
                        }


                    },
                    'add_cid':function(cid){
                        this.Arrays.Color.arr_cid.push(cid);
                    },
                    'find_cid':function(cid){
                        var arr=this.Arrays.Color.arr_cid;
                        for(var i=0;i<arr.length;i++){
                            if(arr[i] == cid){
                                return i;
                            }
                        }

                        return -1;
                    },
                    'del_cid':function(index){
                        this.Arrays.Color.arr_cid.splice(index,1);
                    },
                    
                    'Table':{
                        '$wrap' :$('.js_sectionTableA1'),
                        'Html'  :{
                            'color'     :'<tbody cid="r_cid"><tr sid="r_sid"><td rowspan="1" class="col-1 sectionColorBox-A1"><span class="color L mr10"><img src="r_src" width="15" height="15" alt=""/></span><span class="name L">r_colorNme</span></td><td class="col-2"></td><td class="col-3"><div class="sectionBtn-A3 sectionBtn-A3-1 auto"><a href="###">本地上传</a><input class="none" type="file" value="本地上传"/></div></td><td class="col-4"><input type="text" class="text" value="" name="r_price"></td><td class="col-5"><input type="text" class="text" value="" name="r_num"></td><td class="col-6"><input type="text" class="text" value="" name="r_code"></td></tr></tbody>',
                            'no_color'  :'<tbody cid="r_cid"><tr sid="r_sid"><td rowspan="1" class="col-1 sectionColorBox-A1"></td><td class="col-2">r_size<input type="hidden" name="r_size" value="r_size"/></td><td class="col-3"><div class="sectionBtn-A3 sectionBtn-A3-1 auto"><a href="###">本地上传</a><input class="none" type="file" value="本地上传"/></div></td><td class="col-4"><input type="text" class="text" value="" name="r_price"></td><td class="col-5"><input type="text" class="text" value="" name="r_num"></td><td class="col-6"><input type="text" class="text" value="" name="r_code"></td></tr></tbody>',
                            'size'      :'<tr sid="r_sid"><td class="col-2">r_size<input type="hidden" name="r_size" value="r_size"/></td><td class="col-3"><div class="sectionBtn-A3 sectionBtn-A3-1 auto"><a href="###">本地上传</a><input class="none" type="file" value="本地上传"/></div></td><td class="col-4"><input type="text" class="text" value="" name="r_price"></td><td class="col-5"><input type="text" class="text" value="" name="r_num"></td><td class="col-6"><input type="text" class="text" value="" name="r_code"></td></tr>',
                            'no_size'   :'r_size<input type="hidden" name="r_size" value="r_size"/>',
                            'no_upload' :'<tr sid="r_sid"><td class="col-2">r_size<input type="hidden" name="r_size" value="r_size"/></td><td class="col-3"></td><td class="col-4"></td><td class="col-5"></td><td class="col-6"></td></tr>',
                            'td'        :'<span class="color L mr10"><img src="r_src" width="15" height="15" alt=""/></span><span class="name L">r_colorNme</span>'
                        },
                        'add_color':function(obj){
                            /*
                            {
                                'name':'',
                                'pice':'',
                                'num' :'',
                                'code':'',
                                'size':''
                            }
                            */

                            switch(obj['chose']){
                                case 'one':
                                  return this.Html.td.replace(/r_colorNme/,obj['name']).replace(/r_src/,obj['src']);
                                  break;
                                default:
                                  return this.Html.color.replace(/r_cid/,obj['cid']).replace(/r_src/,obj['src']).replace(/r_sid/,obj['sid']).replace(/r_colorNme/,obj['name']).replace(/r_price/,obj['pice']).replace(/r_num/,obj['num']).replace(/r_code/,obj['code']);
                            }

                            
                        },
                        'add_size':function(obj){
                            /*
                            {
                                'name':'',
                                'pice':'',
                                'num' :'',
                                'code':'',
                                'size':''
                            }
                            */
                            switch(obj['chose']){
                                case 'one':
                                  return this.Html.no_color.replace(/r_cid/,obj['cid']).replace(/r_sid/,obj['sid']).replace(/r_size/g,obj['size']).replace(/r_price/,obj['pice']).replace(/r_num/,obj['num']);
                                  break;
                                case 'no_upload':
                                  return this.Html.no_upload.replace(/r_size/g,obj['size']).replace(/r_sid/,obj['sid']);
                                  break;
                                case 'no_size':
                                  return this.Html.no_size.replace(/r_size/g,obj['size']);
                                  break;
                                default:
                                  return this.Html.size.replace(/r_size/g,obj['size']).replace(/r_sid/,obj['sid']).replace(/r_price/,obj['pice']).replace(/r_num/,obj['num']).replace(/r_code/,obj['code']);
                            }

                            
                        }
                        
                    }
                    


                    
            },
            'Pop':{
                '$showbox':$('.js_sectionShowBoxA4'),
                '$close':$('.js_sectionShowBoxA4_close'),
                'show':function(){
                    var __this__=this;
                    this.$showbox.show();
                    this.$close.bind('click',function(){
                        __this__.$showbox.hide();
                    });
                }
            }



        };





    //迭代主要材料下多选框把pid 和 索引 保存起来 为将来勾去多选框做准备，这样可以不用再遍历元素，直接通过索引值来找到元素
    myData.Main_material.each_chekbox();
    //显示错误提示框
    //myData.Pop.show();



    /**
    *商品分类
    *
    *
    */
    myData.Goods_class.bun[0].click(function(){
        $(this).hide();
        myData.Goods_class.bun[1].show();
        myData.Goods_class.$select.show();
        myData.Goods_class.$Crumb.hide();

    });

    myData.Goods_class.bun[1].click(function(){
        $(this).hide();
        myData.Goods_class.bun[0].show();
        myData.Goods_class.$select.hide();
        myData.Goods_class.$Crumb.show();
    });
    //==============================================================================
    
    /**
    *添加尺寸
    *
    *
    */
    myData.Goods_spec.Size.Add.$add_bunt.click(function(){//添加尺寸时显示输入框
        myData.Goods_spec.Size.Add.$text.show();
    });

    
    myData.Goods_spec.Size.Add.$text.blur(function(){//添加尺寸
        if($(this).val()){
            myData.Goods_spec.Size.add_size($(this).val());
        }
        $(this).hide();
        $(this).val("");
    });
    //==============================================================================
    
    /**
    *颜色分类编辑
    *
    *
    */
    /*tool.run({
            'list':myData.Goods_spec.$colorbox,
            'event':'click',
            'class':'current',
            'or':true,
            'fn':function(obj){
                if($(obj.event.target +':text') && "text" ==obj.event.target.type ){
                    obj.temp.find('.text').attr('disabled','disabled');
                    obj.cur_even_this.find('.text').attr('disabled',false);

                }else{
                    obj.cur_even_this.removeClass(obj.current.class);
                    obj.cur_even_this.find('.text').attr('disabled','disabled');
                }
                $(window).click(function(){
                    obj.temp.find('.text').attr('disabled','disabled');
                    obj.temp.removeClass(obj.current.class);
                    obj.cur_even_this.removeClass(obj.current.class);
                    
                });


            }

            
    });*/
    //==============================================================================

    /**
    *主要材料操作
    *
    *
    */
    tool.run({
            'list':myData.Main_material.List.$list,
            'event':'click',
            'class':'cur',
            'or':true,
            '$block':myData.Main_material.$block,
            'fn':function(obj){
                myData.Main_material.List.name=obj.cur_even_this.text();
                var arr=myData.Main_material.List.arr_classid;
                //把点击过的主要材料名称下标保存起来
                // for(var k=0;k<arr.length;k++){
                //     if(!(arr[k]==obj.this_index)){
                //         arr.push(obj.this_index);
                //     }
                // }

                obj.current.$block.each(function(i){
                    var block_this=this;
                    if(i==obj.this_index){
                        $(this).show();
                        
                        $(this).unbind('click');//移除事件
                        $(this).bind('click',function(event){

                            var flag=false;

                            if($(event.target).prop('checked') && "INPUT" ==event.target.tagName){
                                var e=$(event.target);
                                var name=e.parent('label').next('span').text();//获取子类的名称
                                var pid=e.attr('pid');//获取子类的pid
                                
                                //每次点击点选框是检查主要材料名是否已添加过了。先获取已选材材料中的classid 如果classid 跟标题索引值相等就说明主要材料的名称已添加过了
                                myData.Main_material.$detail.find('.sectionBox-A22').each(function(){
                                    myData.Main_material.$ul=$(this).find('ul:eq(0)');
                                    if(i==$(this).attr('classid')){
                                        //alert(3);
                                        flag=true;
                                        myData.Main_material.$ul.append(myData.Main_material.col_3_html[1].replace(/r_pid/,pid).replace(/r_name/,name));
                                        myData.Main_material.Array.Selected.arr_pid.push(pid);
                                        myData.Main_material.Array.Selected.arr_classid.push(i);

                                    }else{

                                    }

                                });
                                
                                if(!flag){//添加主要材料名称
                                    //替换模板中的类别名称
                                    var title=myData.Main_material.col_3_html[0].replace(/r_title/,myData.Main_material.List.name).replace(/r_num/,obj.this_index).replace(/r_pid/,pid).replace(/r_name/,name);
                                    myData.Main_material.$detail.append(title);
                                    myData.Main_material.List.name="";
                                    myData.Main_material.Array.Selected.arr_pid.push(pid);
                                    myData.Main_material.Array.Selected.arr_classid.push(i);
                                }else{

                                }


                            }
                        });
                    }else{
                        $(this).hide();
                    }
                    
                });

                

            }

    });

    myData.Main_material.$checkbox.bind('click',function(){
        if($(this).prop("checked")){
                
        }else{
            myData.Main_material.del_name_label($(this).attr('pid'));

        }
    });
    
     myData.Main_material.$detail.find('.sectionBox-A22 li').live('click',function(event){
         if("I" == event.target.tagName){
            myData.Main_material.search_pid($(this).attr('pid'));
            $(this).remove();

         }

    });

    myData.Main_material.$clear.click(function(){//清空所有已选材料
        myData.Main_material.$detail.html("");
        myData.Main_material.$block.find('input[type="checkbox"]').attr("checked",false);
        myData.Main_material.Array.Selected.arr_pid.length = 0;
        myData.Main_material.Array.Selected.arr_classid.length = 0;
        
    });


     
    //==============================================================================

    /**
    *商品规格添加颜色分类操作
    *
    *
    */

    
    myData.Goods_spec.Table.i=1;
    //颜色是否加载页面时已存在
    myData.Goods_spec.Table.$tbody=myData.Goods_spec.Table.$wrap.find('tbody');

    myData.Goods_spec.Table.tbody_len=myData.Goods_spec.Table.$tbody.length;

    //加载时保存已存在tbody的cid
    if(myData.Goods_spec.Table.tbody_len){
        myData.Goods_spec.Table.$tbody.each(function(){
            myData.Goods_spec.add_cid($(this).attr('cid'));
        });
        
    }else{
        //没有颜色时全局cid初始化为0
        myData.Goods_spec.Table.cid=0;
        
    }

    myData.Goods_spec.Size.num="";
    //点击颜色
    myData.Goods_spec.$colorbox.bind('click',function(event){
        var i=myData.Goods_spec.Table.i;
        var n=myData.Goods_spec.Table.tbody_len;
        var v,tbody,src,cid;
        //if("checked"==$(this).find('[input[type="checkbox"]').attr("checked")){
        if($(event.target).prop('checked') && "INPUT" ==event.target.tagName){
           v=$(this).find('[input[type="text"]').val();
           src=$(event.target).parent().next().find('img').attr('src');
           //只有点击颜色的时候才能保存cid 的值加载页面的时候就不获取了，因为如果有多个颜色怎么办呢？
           cid=myData.Goods_spec.Table.cid=$(event.target).attr('cid');

           if(i>1 && 0 == myData.Goods_spec.Table.tbody_len){//第一次添加
            
               tbody=myData.Goods_spec.Table.add_color({
                                                            'name':v,
                                                            'chose':'one',
                                                            'src':'images/imgs_LHH/pics/color.jpg'
                                                            });

                myData.Goods_spec.Table.$wrap.find('tbody:eq(0)').attr('cid',cid);
                myData.Goods_spec.Table.$wrap.find('tbody td:eq(0)').append(tbody);
           }else{
               if(!('' == myData.Goods_spec.Table.$wrap.find('tbody:eq(0) td:eq(1)').text())){//当颜色添加时没有尺寸时就往第一个找是否有尺寸如果有就clone 过来
                    //把第一个的tbody clone 过来 然后改变里面的颜色信息
                    tbody=myData.Goods_spec.Table.$wrap.find('tbody:eq(0)').clone(true);
                    tbody.attr('cid',cid);
                    tbody.find('td:eq(0) img').attr('src',src);
                    tbody.find('td:eq(0) span:eq(1)').text(v);
                    
                    //myData.Goods_spec.Size.num=myData.Goods_spec.Table.$wrap.find('tbody:eq(0) td:eq(1)').text();
                    var sid=myData.Goods_spec.Table.$wrap.find('tbody:eq(0) tr:eq(0)').attr('sid');

                   
               }else{
                   tbody=myData.Goods_spec.Table.add_color({
                                                                'sid':sid,
                                                                'cid':cid,
                                                                'name':v,
                                                                'pice':'price['+i+']',
                                                                'src':'images/imgs_LHH/pics/color.jpg',
                                                                'num' :'num['+i+']',
                                                                'code':'code['+i+']',
                                                                'size':myData.Goods_spec.Size.num
                                                                });

               }
               myData.Goods_spec.Table.$wrap.find('table').append(tbody);
               
           }

           myData.Goods_spec.add_cid(cid);
           myData.Goods_spec.Table.i++;
           myData.Goods_spec.Table.tbody_len++;
        }else if("checkbox" === event.target.type){
            //删除对应颜色
            cid=$(event.target).attr('cid');
            var index=myData.Goods_spec.find_cid(cid);
            if(index != -1){
                myData.Goods_spec.del_cid(index);
                myData.Goods_spec.Table.$wrap.find('tbody:eq('+index+')').remove();
                
                //没有tbody 时就去掉所有尺寸的勾选
                if(0 === myData.Goods_spec.Arrays.Color.arr_cid.length){
                   myData.Goods_spec.Size.$wrap.find('[input[type="checkbox"]').attr("checked",false);
                   myData.Goods_spec.Table.i=1;
                   myData.Goods_spec.Table.tbody_len=0;
                }
                
            }

        }


    });



    //点击尺寸
    myData.Goods_spec.Size.$wrap.unbind('click');
    myData.Goods_spec.Size.$wrap.live('click',function(event){
        var i=myData.Goods_spec.Table.i;
        var n=myData.Goods_spec.Table.tbody_len;
        var v,tbody,sid;
        if($(event.target).prop('checked') && "INPUT" ==event.target.tagName){
        //if($(event.target).find(':checkbox:checked') && "INPUT" ==event.target.tagName){
            v=$(event.target).parent('label').parent('li').find('span').text();
            sid=$(event.target).attr('sid');
            //没有颜色的情况下要新增tbody
            if(1 == myData.Goods_spec.Table.i && 0 === myData.Goods_spec.Table.tbody_len){//
                tbody=myData.Goods_spec.Table.add_size({
                                                        'sid':sid,
                                                        'name':'',
                                                        'pice':'price['+i+']',
                                                        'num' :'num['+i+']',
                                                        'code':'code['+i+']',
                                                        'chose':'one',
                                                        'size':v
                                                        });
                myData.Goods_spec.Table.$wrap.find('table').append(tbody);
            }else{
                //有颜色的情况下只新增tr
                myData.Goods_spec.Table.$wrap.find('tbody').each(function(){
                    if("" === $(this).find('td:eq(1)').html()){//在旧行上添加没填的尺寸
                        tbody=myData.Goods_spec.Table.add_size({
                                                                'chose':'no_size',
                                                                'size':v
                                                                });
                        $(this).find('td:eq(1)').append(tbody);
                        $(this).find('tr:eq(0)').attr('sid',sid);
                        
                        
                    }else{//添加新行
                        tbody=myData.Goods_spec.Table.add_size({
                                                                'sid':sid,
                                                                'name':'',
                                                                'pice':'price['+i+']',
                                                                'num' :'num['+i+']',
                                                                'code':'code['+i+']',
                                                                'size':v
                                                                });
                        var rowspaned=rowspand=0;
                        
                        //获取rowspan 值 然后改变原来的值
                        rowspaned=$(this).find('td:eq(0)').attr('rowspan');
                        rowspand= (parseInt(rowspaned) <= 1) ? 2 : 1+parseInt(rowspaned);
                        $(this).find('td:eq(0)').attr('rowspan',rowspand);
                        $(this).append(tbody);
                    }

                });
                
            }
            myData.Goods_spec.Table.i++;
        }else if("INPUT" === event.target.tagName){
            //删除对应尺寸
            sid=$(event.target).attr('sid');
            var tr_sid,$tr;
            $('.js_sectionTableA1 tr').each(function(){
                
                tr_sid=$(this).attr('sid');
                var $rowspan=$(this).parent().find('td:eq(0)');
                var $td_rowspan=$(this).find('td:eq(0)');

                if(tr_sid == sid){
                    if($td_rowspan.attr('rowspan')){
                        if(parseInt($rowspan.attr('rowspan')) > 1){
                            $rowspan.clone().attr('rowspan',parseInt($rowspan.attr('rowspan'))-1).prependTo($(this).next());
                            $(this).remove();
                        }else{
                            $(this).find('td:eq(1)').text("");
                        }
                    }else{
                        $rowspan.attr('rowspan',parseInt($rowspan.attr('rowspan'))-1);
                        $(this).remove();
                    }


                }

            });
        }




    });


    //==============================================================================





    
    
});