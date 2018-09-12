(function(IT,factory){
    'use strict';
    var System = IT['LAM_20150910123700_'];

    if(!System){
        return;
    }else{
        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(System) :
            typeof define === 'function' && define.amd ? define(factory(System)) :
                (System['ShopController'] = factory(System));
    }

})(this,function(System){
    'use strict';
    var __this__=null;
    System.is(System,'SuperController','ShopController',System.CONTROLLERS);
    var ROOT  = System.BACKEND;
    var views = System.ViEWS+'/shop';
    var ShopController = System.SuperController.extend({
        constructor: function (init){
            this.base(init || {});
            __this__=this;

        },
        '_className':'ShopController',
        'choiceTemplateAction':function(){
            new System.Template().render(views+'/choiceTemplate.html',{
                'ViEWS':System.ViEWS,
                'IMAGE':System.IMAGE,
                'ROOT':ROOT,
                'D':{
                    'title':'你好，世界！',
                    'content':'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'
                }

            },function(content){
                $('#app').after(content).remove();
            });
        },
        'empowerAction':function(){
            new System.Template().render(views+'/empower.html',{
                'ViEWS':System.ViEWS,
                'IMAGE':System.IMAGE,
                'ROOT':ROOT,
                'D':{
                    'title':'你好，世界！',
                    'content':'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'
                }

            },function(content){
                $('#app').after(content).remove();
            });
        },
        'loftAction':function(){
            new System.Template().render(views+'/loft.html',{
                'ViEWS':System.ViEWS,
                'IMAGE':System.IMAGE,
                'ROOT':ROOT,
                'D':{
                    'title':'你好，世界！',
                    'content':'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'
                }

            },function(content){
                $('#app').after(content).remove();
            });
        },
        'newRoomAction':function(){
            new System.Template().render(views+'/newRoom.html',{
                'ViEWS':System.ViEWS,
                'IMAGE':System.IMAGE,
                'ROOT':ROOT,
                'D':{
                    'title':'你好，世界！',
                    'content':'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'
                }

            },function(content){
                $('#app').after(content).remove();
            });
        },
        'shopListAction':function(){
            new System.Template().render(views+'/shopList.html',{
                'ViEWS':System.ViEWS,
                'IMAGE':System.IMAGE,
                'ROOT':ROOT,
                'D':{
                    'title':'你好，世界！',
                    'content':'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'
                }

            },function(content){
                $('#app').after(content).remove();
            });
        },











        /**
         *
         * @author lhh
         * 产品介绍：析构方法
         * 创建日期：2015-4-2
         * 修改日期：2015-4-2
         * 名称：destructor
         * 功能：在注销ShopController对象时调用此方法
         * 说明：
         * 注意：
         * @return  ()
         * Example：
         */
        'destructor':function(){}
    });
    return ShopController;
});


