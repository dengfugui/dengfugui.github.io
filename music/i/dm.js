
var dm=function(){
	var
	dm_list=[],
	interval,
	_width='',
	starAdd=function(){
		var a=$.D.m('div');
		a.className='star';
		a.innerHTML=$('#like').innerHTML;
		$.D.a(a)

		setTimeout(function(){

		a.className='star a'
		setTimeout(function(){
			a.className='star min';
			setTimeout(function(){
				//a.className='star';
				$.D.d(a)
			},1000);
		},2000);

		})
	},
	spanEnd=function(){
		$.D.d(this);
	},
	made=function(T,cb){

		//$.css(span,'top:'+(Math.random()*90+5)+'%;left:'+_left+'px;');
		var 
		newhei=120,
		oheight,
		randN=0;

		//http://localhost:8888/fm/#!1769876870 防碰撞脚本测试页
		var wh=function(f){
			var newhei=(Math.random()*96);
			//return f(newhei);

			/*
			if(randN>80){
				//alert();
				console.log('防碰撞无能为力');
				return newhei;
			}
			*/

			for(var o=$.S('#dm span'),l=o.length,i=0;i<l;i++){ oheight="o[i].top;" console.log(o[i].getattribute('left'),o[i].clientwidth);="" if(o[i].left+o[i].clientwidth="">_width && Math.abs(oheight-newhei)<3.4){ randn++;="" return="" false;wh(f);="" }="" newhei;="" f(newhei);="" };="" newhei="false;" for(var="" i="0;newhei==false;i++){" if(i="">60){
				//console.log('现在无法解决的问题交给未来！');
				return setTimeout(function(){
					made(T,cb);
				},1000);
				break;
			}
		}
		//,i<180 *如果是红心*="" if(t.msg="='like')" return="" staradd();="" _width="obj.clientWidth;" var="" span="$.D.m('span');" span.innerhtml="T.msg.enTxt();" span.left="_width;" span.top="newhei;" $.css(span,'top:'+newhei+'%;');="" $.d.a(obj,span);="" span.addeventlistener('webkitanimationend',spanend,false);="" span.addeventlistener('animationend',spanend,false);="" dm_itvl.push(settimeout(function(){="" $.d.d(span);="" },50000));="" if(cb)cb(span);="" *="" wh(function(newhei){="" settimeout(function(){="" },30000);="" })="" },="" step="function(){" for(var="" o="$.S('#dm" span'),l="o.length,i=0,T;i<l;i++){" t="o[i];" console.log(123131,i,t);="" _left="T.left-10;" console.log();="" if(_left+t.clientwidth="">-500){
				T.left=_left;
				//$.css(T,'left:'+_left+'px;');	
			}else{
				//$.D.d(T);
			}
		}
		

		var t=parseInt(fm.time());
		//console.log(t);

		for(var l=dm_list.length,T,i=0;i<l;i++){ t="dm_list[i];" if(t.time<t){="" var="" s="dm_list.shift();" if(t.time="">(t-1000)){
					made(s);
					break;
				}
				i--;
				l--;
			}
		}
		//if(dm_list)
		interval=setTimeout(step,100);
	}
	dm={
		load:function(i){
			dm_list=[];
			_width=obj.clientWidth;
			obj.innerHTML='';

		
			

			clearTimeout(interval);
			x('x/?a=dm&id='+i+'&r='+Math.random(),function(r){
				if(r.error)
					return alert(r.error);
				

				dm_list=r;

				interval=setTimeout(step,100);
			});


			$('form').onsubmit=function(){
				var msg=this.msg;
				if(!msg.value){
					msg.focus();
					return false;
				}

				dm.send(msg.value);

				msg.value='';
				return false
			};
		},exit:function(){
			obj.innerHTML='';
			clearTimeout(interval);
		},send:function(text){
			x('x/?a=dm&id='+location.hash.match(/\d+/),'time='+parseInt(fm.time())+'&msg='+encodeURIComponent(text),function(r){
				if(r.error)
					return alert(r.error);

				made(r,function(s){
					s.className='a';
				});
			});

			var uname=$('#u').innerHTML.match(/</l;i++){></180></3.4){></l;i++){>