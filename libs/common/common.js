var console = {
	log:function(txt,console){
		if(arguments.length==1){
			//log in console
			$("#console").append(txt+"<br/>")
		}else{
			$(console).append(txt+"<br/>")
		}
	}
}