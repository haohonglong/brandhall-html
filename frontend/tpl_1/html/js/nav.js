var nav = {
	//显示下拉
	disNav:function(obj){
		obj.parent().siblings().find('.navType').removeClass('had').next().hide();
		obj.addClass('had').next().show();
	},
	
	//点击二级导航
	secondNav : function(currObj,showObj){
		var currentVal = currObj.attr('value'),
			currentTxt = currObj.text();
		
		showObj.attr('value',currentVal);
		showObj.find('span:first').text(currentTxt);
	},
	
	//使导航返回初始状态
	backInit : function(objs){
		objs.removeClass('had');
	}
};

$(function(){
	/*
	//点击导航
	$('#nav li .navType').click(function(e){
		nav.disNav($(this));
		e.stopPropagation();
	});
	
	//点击二级导航
	$('#nav .pullDown a').click(function(){
		nav.secondNav($(this),$(this).parent().prev());
	});
	
	$(document).click(function(){
		nav.backInit($('#nav li .navType'));
		$('#nav .pullDown').hide();
	});
	
	*/

	//鼠标移入导航
	$('#nav li').hover(function(){
		$(this).find('.navType').addClass('had').next().show();
		
	},function(){
		$(this).find('.navType').removeClass('had').next().hide();
		
	});
	
	//点击二级导航
	$('#nav .pullDown a').click(function(){
		nav.secondNav($(this),$(this).parent().prev());
	});
	
	
	

});
