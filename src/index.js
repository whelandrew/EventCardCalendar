
function _onClick(val){
	console.log(val.getElementsByClassName("cTitle")[0].innerHTML);
	console.log(val.getElementsByClassName("cTime")[0].innerHTML);
	console.log(val.getElementsByClassName("cMonth")[0].innerHTML +
	" " + val.getElementsByClassName("cDay")[0].innerHTML);
}

function component(events) {		
	let element = document.getElementById('root');
	  	  
	  let html = '<ul>';
	  
	  for(let i=0;i<events.length;i++){
		  html+='<li>'
			+ '<div class="cBody" onClick={_onClick(this)}>'
				+'<img class="cImg" src="' + events[i].imageUrl + '"/>'
				+'<h4 class="cTitle">'+events[i].title+'</h4>'
				+'<div class="cTime">'+events[i].time +' • '+events[i].venue+'</div>'			
				+ '<div class="cDate">'
					+'<div class="cMonth">'+events[i].month+'</div>'
					+'<div class="cDay">'+events[i].day+'</div>'
				+ '</div>'
				+ '</div>'
			+'</li>';
	  }	  			

	element.innerHTML = html;

	return element;
}


function startUp(){	
fetch('http://cdn-fast.lzr.io/mini_lzr/stubs/events.json')
.then(response => response.json())
.then(data => component(data.events));
}


startUp();
