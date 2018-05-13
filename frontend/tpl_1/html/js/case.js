var c = {
	//分享效果
	proHover : function(){
		$('.proImg').hover(function(){
			$(this).prev().show();
		},function(){
			$(this).prev().hide();
		});
	},
	
	
	//瀑布流解析json 并返回html
	getJsonHtml : function(data){
		var datas = data.items,
			html = '',
			length = datas.length,
			i=0;
		
		while(length--){
			var shareLink = datas[i].shareLink,
				proLink = datas[i].proLink,
				proImg = "images/imgs_LHH/pics/"+datas[i].proImg+".jpg",
				title = datas[i].title,
				isMark = datas[i].isMark,
				markState = isMark ? 'marked' : 'markThis',
				markNum = datas[i].markNum;
				console.log(proImg);
			html += '<div class="item">'
+						'<a class="share" href="'+shareLink+'">'
+							'<img src="images/imgs_LHH/share.jpg" />'
+						'</a>'
+						'<a class="proImg" href="'+proLink+'">'
+							'<img src="'+proImg+'" >'
+						'</a>'
+						'<p>'
+							title
+							'<span class="m '+markState+'">'+markNum+'</span>'
+						'</p>'
+					'</div>';
			i++;
		}
		return html;
		
	}
};

$(function(){
	
	//点击(红心)关注
	$('.m').live('click',function(){
		$(this).attr('class',$(this).hasClass('marked') ? 'm markThis' : 'm marked');	
	})
	
	c.proHover();	//分享
	
});
