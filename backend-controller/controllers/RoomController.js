(function(IT,factory){
    'use strict';
    var System = IT['LAM_20150910123700_'];

    if(!System){
        return;
    }else{
        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(System) :
            typeof define === 'function' && define.amd ? define(factory(System)) :
                (System['RoomController'] = factory(System));
    }

})(this,function(System){
    'use strict';
    var __this__=null;
    System.is(System,'SuperController','RoomController',System.CONTROLLERS);
    var ROOT  = System.BACKEND;
    var views = System.ViEWS+'/room';
    var RoomController = System.SuperController.extend({
        constructor: function (init){
            this.base(init || {});
            __this__=this;
            this.init();

        },
        '_className':'RoomController',
        'listAction':function(){
            new System.Template().render(views+'/list.html',{
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
        'detailAction':function(){
            new System.Template().render(views+'/detail.html',{
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
        'releaseAction':function(){
            new System.Template().render(views+'/release.html',{
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
         * 功能：在注销RoomController对象时调用此方法
         * 说明：
         * 注意：
         * @return  ()
         * Example：
         */
        'destructor':function(){}
    });
    return RoomController;
});

