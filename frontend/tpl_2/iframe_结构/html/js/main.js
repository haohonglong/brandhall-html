require.config({
    paths: {
        "jquery":    "../../../../../../common/js/jquery-1.7.1",
        "lib.class": "../../../../../../common/js/lib.class"
    },
    shim: {
        'angular': { exports: 'angular' }//不支持AMD的脚本用shim的方式加载
    },
});

define([
     'jquery',
     'lib.class'
], function (jquery) {

 

});