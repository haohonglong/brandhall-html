 /**
 * @author ³ÂÁú
 */
	function Drag(id){
		var _this = this;
		this.obj = document.getElementById(id);
		this.distanceX = 0;
		this.distanceY = 0;
		
		this.obj.onmousedown = function(e){
			_this.mousedown(e);
			return false;
		};
	}

	Drag.prototype.mousedown=function(e){
		var _this = this;
		var oEvent = e || window.event;
		this.distanceX = oEvent.clientX-this.obj.offsetLeft;
		this.distanceY = oEvent.clientY-this.obj.offsetTop;
		this.obj.style.position='absolute';	
		
		document.onmousemove=function(e){
			_this.mousemove(e);
		};
		document.onmouseup=function(){
			_this.mouseup();
		};
	};

	Drag.prototype.mousemove = function(e){
		var oEvent = e || window.event;
		this.l = oEvent.clientX-this.distanceX;
		this.t = oEvent.clientY-this.distanceY;
		this.obj.style.margin=0;
		this.obj.style.left = this.l+'px';
		this.obj.style.top = this.t+'px';
	};

	Drag.prototype.mouseup = function(){
		document.onmousemove = document.onmouseup = null;
	};

	/**
	 * 
	 * @param {Object} obj
	 * ¼Ì³ÐDrag
	 */
	function LimitDrag(id){
		Drag.call(this,id);
	}
	for(var i in Drag.prototype){
		LimitDrag.prototype[i]=Drag.prototype[i];
	}
	LimitDrag.prototype.mousemove=function(e){
		var oEvent = e || window.event;
		this.l = oEvent.clientX-this.distanceX;
		this.t = oEvent.clientY-this.distanceY;
		this.dl = document.documentElement.clientWidth;
		this.dt = document.documentElement.clientHeight;
		this.l = this.l < 0 ? 0 : this.l;
		this.t = this.t < 0 ? 0 : this.t;
		this.l = this.l > this.dl-this.obj.offsetWidth ? this.dl-this.obj.offsetWidth : this.l;
		this.t = this.t > this.dt-this.obj.offsetHeight ? this.dt-this.obj.offsetHeight : this.t;

		this.obj.style.margin=0;
		this.obj.style.left = this.l+'px';
		this.obj.style.top = this.t+'px';
	};

 
