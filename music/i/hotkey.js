!function(){
var hotkey=function(e){
	e=e||window.evant;


	//console.log(e.keyCode);
	if(!e.ctrlKey)
	switch(e.keyCode){

		case 32://空格
		case 80://P
			$('#play').click();
			break;
		case 27://ESC
			var o=$.S('.close');
			for(var i=0;i