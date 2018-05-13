(function(){
	/**
	 * 对象LR 用于缩略图切换及案例大图展示
	 * author:chenlong
	 */
	function LR(opts){
		this.proImg = opts.proImg;
		this.smUl = opts.smUl;
		this.curr = opts.curr;
		this.l = opts.l;
		this.r = opts.r;
	}
	
	LR.prototype = {
		constructor:LR,
		
		init:function(){
			var _this = this,
				curr = this.curr;
				
			$('#'+this.smUl+' li').click(function(){
				$(this).attr('class',curr).siblings().removeClass(curr);
				$('#'+_this.proImg).attr('src',$(this).find('img').attr('_src'));
			});
			
			$('#'+this.l).click(function(){
				_this.lor(true);
			});
			
			$('#'+this.r).click(function(){
				_this.lor(false);
			});
		},
		
		lor:function(flag){
			var index = $('#'+this.smUl+' li.curr').index(),
				curr = this.curr;
		
			if(index===0 && flag===true){//向左
				$('#'+this.smUl+' li').removeClass(curr).last().attr('class',curr);
				$('#'+this.proImg).attr('src',$('#'+this.smUl+' li:last img').attr('_src'));
				return;
			}else if(index===$('#smUl li').length-1 && flag===false){//向右
				$('#'+this.smUl+' li').removeClass(curr).first().attr('class',curr);
				$('#'+this.proImg).attr('src',$('#'+this.smUl+' li:first img').attr('_src'));
				return;
			}
			
			var currIndex = flag ? --index : ++index;
			$('#'+this.smUl+' li').removeClass(curr).eq(currIndex).attr('class',curr);
			$('#'+this.proImg).attr('src',$('#'+this.smUl+' li').eq(currIndex).find('img').attr('_src'));
		}
		
	};
	
	observe = function(opts){
		new LR(opts || {}).init();
	}
	
})();


$(function(){
	observe({
		proImg:"proImg",//大图片id
		smUl:"smUl",//缩略图Ul id
		curr:"curr",//当前class
		l:"l",//左按钮
		r:"r"//右按钮
	});
	
	
	$('.markThis').click(function(){
		$(this).attr('class',$(this).hasClass('hadMark') ? 'markThis' : 'markThis hadMark');
	});
	
	
	$('#')
})












