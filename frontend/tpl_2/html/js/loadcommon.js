/**
 *----------------------------------
 * @author lhh
 * 产品介绍：
 * 功能：common文件夹的路径之后要改变的话，只要同时修改loadcommon.js 中Lib.path的值就可以，不需要修改每一个HTML文件！这个文件含有两种方法这两种方法执行的效果不一样，目的都是同一个目的
 * 创建日期：2014.9.9     
 * 修改日期：2014.9.9
 * 说明：这是一个引用文件
 * 注意：这个只能在本地静态页测试用，不能传至svn上！
 * 调用方式：
 *           <script type="text/javascript" src="js/loadcommon.js"></script>
 *           window.System.L.load({'js':[
 *                                     'jquery-1.7.1',
 *                                     'lib.class',
 *                                     'Tools.class'],
 *                                'css':[
 *                                     'jquery.bxslider'
 *                                     ]
 *                        });
 *           
 *           
 *           
 *----------------------------------*/
(function(window){
    function Dom(){
        var __this__=this;

        /**
         * 节点元素属性的获取或设置操作
         * tagName :节点元素标签名
         * Obj :{'key':value}
         * return : 返回节点元素
         */
        this.createTag=function(tagName,Obj){
            var node=document.createElement(tagName);
            for(var key in Obj){
                if(key!=null && Obj[key] != null)
                    node.setAttribute(key,Obj[key]);
            }
            return node;
        };
        
        this.cloneNode=function(node,logic){
             if(logic)
                return node.cloneNode(true);
             else
                return node.cloneNode(false);
        };

        this.removeAttr=function(node,attrName){
            node.removeAttribute(attrName);
        };

        this.append=function(oldNode,newNode){
            oldNode.appendChild(newNode);
        };

        this.getNodeName=function(node){
            return node.nodeName;
        };

    　　this.delNode=function(node){//在它的父节点调用removeChild 然后把它自身移除
            this.getParent(node).removeChild(node);
        };
        
        this.getParent=function(node){//获取当前节点的父节点
            return node.parentNode;
        };

        this.replaceNode=function(newNode,current){//替换节点
            this.getParent(current).replaceChild(newNode , current);
        };

        this.insertBefore=function(newNode , current){//在oldNode的父节点上调用insertBefore燃后把新节点插入它自身前面
            this.getParent(current).insertBefore(newNode , current);
            
        };

        this.insertAfter=function(node,newNode){
            if(node.nextSibling){//如果node有下一个节点的话
                this.insertBefore(newNode,node.nextSibling);
            }else{
                this.append(this.getParent(node),newNode);
            }
            return newNode;
        };

        this.delNodeMore=function(){//删除多个节点
            for(var i=0;i<arguments.length;i++){
                this.delNode(auguments[i]);
            }
        };
　   

　　
        /**
         * 节点元素属性的获取或设置操作
         * 
         */
        this.attr=function(){
            var node,key,itme,
                len=arguments.length;
            switch (len){
                case 3:
                    node=arguments[0];
                    name=arguments[1];
                    item=arguments[2];
                    try{
                        node.setAttribute(name,item);
                    }catch(e){
                        alert("sorry without the method of setAttribute "+e.name);
                    }
                break;
                case 2:
                    node=arguments[0];
                    name=arguments[1];
                    try{
                        return node.getAttribute(name);
                    }catch(e){
                        alert("sorry without the method of setAttribute "+e.name);
                    }
                    
                break;
                default:
            }
            
        };

        this.firstChild=function(node){//查找下面的元素是不是节点元素
            if(node.firstChild){//有子节点的话
                var n=node.firstChild;
                if(n.nodeType==1) return n;
                return this.nextSibling(n);
            }
            return null;
        };
        this.lastChild=function(node){//查找元素最后节点是不是节点元素
            if(node.lastChild){//有子节点的话
                var n=node.lastChild;
                if(n.nodeType==1) return n;
                return this.previousSibling(n);
            }
            return null;
        };
        this.previousSibling=function(node){//查找前一个节点是否是元素节点排除所有非元素节点
            if(node.previousSibling){
                var n=node.previousSibling;
                if(n.nodeType==1) return n;
                while(n=n.previousSibling){//查找上一个节点----->上一个节点------->上一个节点.........直到没有节点为止
                    if(n.nodeType==1) return n;
                }
            }
            return null;
        };
        this.nextSibling=function(node){
            if(node.nextSibling){
                var n=node.nextSibling;
                if(n.nodeType==1) return n;
                while(n=n.nextSibling){//查找下一个节点----->下一个节点------->下一个节点.........直到没有节点为止
                    if(n.nodeType==1) return n;
                }
            }
            return null;
        };
        this.filterSpaceNode=function(nodes){//过滤元素中包含的所有空白节点
            var ret=[];
            for(var i=0;i<nodes.length;i++){
                if(nodes[i].nodeType===3 && /^\s+$/.test(nodes[i].nodeValue)) continue;//查找是否是文本节点且有空格
                ret.push(nodes[i]);
            }
            return ret;
        };




    }

    var dom=new Dom();
    if(!window.System) System={};
    
    
    var head=document.getElementsByTagName('head')[0];
    var m=document.getElementsByTagName('meta');
    var s=document.getElementsByTagName('script');
    var l=document.getElementsByTagName('link');

    var Lib={
        'path'   :'',
        'js'     :[],
        'css'    :[],
        'getPath':function(){
            /**
             *----------------------------------
             * @author lhh
             * 产品介绍：
             * 创建日期：2014.9.10     
             * 修改日期：2014.9.10
             * 名称：(void) getPath
             * 功能：把{global}替换成预设公共文件夹的路径 
             * 说明：
             * 注意：loadcommon.js 文件要放在最下面
             * @param   (String)param           NO NULL :
             * Example：
             *          <script type="text/javascript" src="{global}/js/lib.class.js"></script>
             *          <link href="{global}/css/global.css" type="text/css" rel="stylesheet" />
             *          <script type="text/javascript" src="js/loadcommon.js"></script>
             * 
             *----------------------------------*/

            var path=this.path;
            var reg=/{global}/;
            var i=0;
            for(i=0;i<s.length;i++){
                dom.attr(s[i],'src',dom.attr(s[i],'src').replace(reg,path));
                
            }

            for(i=0;i<l.length;i++){
                dom.attr(l[i],'href',dom.attr(l[i],'href').replace(reg,path));
            }
        },
        //'getPath':function(){return this.path;},
        'setPath':function(path){this.path=path;},
        'load':function(lib){
            /**
             * 
             * 创建人：龙昊宏
             * 名称：(void) load
             * 功能：动态创建js,css 标签引入公共文件
             *  创建日期：2014.9.9     
             *  修改日期：2014.9.9
             *  说明：文件名不需要加后缀名！！！
             *  调用方式：
             *               window.System.L.load({
             *                   'js':['jquery']
             *               });
             *           
             *
             * Copyright Software 
             * 
             * 
             */
            var path=lib.path || this.path;
            var i=0;
            if(lib.js){
                for (i=0;i<lib.js.length;i++){
                    /*
                    var src=path+'/js/'+lib.js[i]+'.js';
                    var script=dom.createTag('script',{'src':src,type:'text/javascript'});
                    if(0 === i){
                        dom.insertBefore(script,head.firstChild);
                    }else{
                        dom.insertAfter(s[i-1],script);
                    }
                    */
                    document.write('<script src="'+path+'/js/'+lib.js[i]+'.js" type="text/javascript"><\/script>');
                    document.close();
                }
            }

            if(lib.css){
                for (i=0;i<lib.css.length;i++){
                    /*
                    var href=path+'/css/'+lib.css[i]+'.css';
                    var css=dom.createTag('link',{'href':href,'type':'text/css','rel':'stylesheet'});
                    if(0 === i){
                        dom.insertAfter(s[s.length-1],css);
                    }else{
                        dom.insertAfter(l[i-1],css);
                    }
                    */

                    document.write('<link href="'+path+'/css/'+lib.css[i]+'.css" type="text/css" rel="stylesheet" \/>');   
                    document.close();
                }
            }
            if(lib.less){
                for (i=0;i<lib.less.length;i++){
                    document.write('<link href="'+path+'/css/'+lib.less[i]+'.less" type="text/css" rel="stylesheet/less" \/>');   
                    document.close();
                }
            }

            return path;
        }

    };
    Lib.path="../../../../../common";
    
    if(!window.System.L) System.L=Lib;
})(window);


 
