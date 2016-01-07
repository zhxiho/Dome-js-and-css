/**
 * 
 */
$(document).ready(function(){
	var Time = 6;
	var step = 500;
	var counts = Time / (step/1000);
	var index = 0;
	var timer = null;
	function autopaly(){
		timer = setInterval(function(){
			index++;
			if (index<(counts*2+1)){
				if (index===1){
					$(".BK1-I").css("transform","scale(1.1)");
				}else if(index>1 && index<(counts+1)){
					
				}else if(index===(counts+1)){
					$(".BK1-I").css("transform","scale(1)");
				}else if(index>(counts+1) && index<(counts*2)) {
					
				}else {
					index=0;
				}
			}
		},step);
	}
	autopaly();
		
});