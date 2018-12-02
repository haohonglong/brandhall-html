//加载基础类

LAMJS.run(function() {
    'use strict';
    var System=this;
    System.Loader
        .load({
            'baseUrl':System.COMMON,
            'suffix':'.css',
            'rel':'stylesheet',
            'css':[
                '/css/bootstrap'
            ]
        })
        .load({
            'baseUrl':System.CSS,
            'suffix':'.css',
            'rel':'stylesheet',
            'css':[
                '/global'
            ]
        })
        .load({
            'baseUrl':System.CSS,
            'suffix':'.css',
            'rel':'stylesheet',
            'css':[
                '/lib'
            ]
        })

        .print();
    System.import([
        'https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js'
    ],false,false,{'xhr':false});
});