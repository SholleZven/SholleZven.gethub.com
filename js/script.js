  $ (document) .ready(function () {
  	function get_timer()
  	{
  	var date_new = new Date (2018,9,10,18,20,0);
  	var date_t = new Date(date_new);
  	var date = new Date();	
  	var timer = date_t - date;
  	
  	if(date_t > date) {
  		var day = parseInt(timer/(24*60*60*1000));
  		
  		if(day < 10) {
			day = '0' + day;
		}
		day= day.toString();
		
		var hour = parseInt(timer/(60*60*1000)) %24;
		if(hour<10) {
			hour = '0'+ hour;
		}
		hour = hour.toString();
		
		var min = parseInt(timer/(60*1000))%60;
		if(min<10) {
			min = '0'+ min; 
		}
		min = min.toString();
		
		var sec = parseInt(timer/(1000))%60;
		if (sec < 10){
			sec = '0'+ sec; 
		}
		sec = sec.toString();
		$("#clock").html("<span id = 'stop'>" +  day + ":" + hour + ":" + min + ":" + sec +  "</span>");
		setTimeout(get_timer,1000);
	
	}
	else {
		$("#clock").html("<span id = 'stop'>Отсчет закончен!</span>");
	}
		}
		
	get_timer();
	});