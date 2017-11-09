ex1 = false;		
ex2 = false;		
ex3 = false;		
ex4 = false;
d1 = new Date();
d2 = new Date();
d3 = new Date();
d4 = new Date();
function calcTime(offset, ret) {
    var d = new Date();
    var nd = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours() + offset.getHours(), d.getMinutes() + offset.getMinutes());
	if(ret){
		return nd;
	}
	nm = nd.getMinutes() + "";
	if(nm.length == 1){
		nm = "0"+nm;
	}
    return nd.getHours()+":"+nm;
}

function dispTime(){
	var d = new Date();
	m = d.getMinutes() + "";
	if(m.length == 1){
		m = "0"+m;
	}
	time = d.getHours() +":"+ m;
	
	var div = document.getElementById('timer');
	div.innerHTML = time;
	
	if(d1 < d && ex1){
		var e1 = document.getElementById("e1");
		e1.innerHTML = "Exam Over!";
		ex1 = false;
	}
	if(d2 < d && ex2){
		var e1 = document.getElementById("e2");
		e1.innerHTML = "Exam Over!";
		ex2 = false;
	}
	if(d3 < d && ex3){
		var e1 = document.getElementById("e3");
		e1.innerHTML = "Exam Over!";
		ex3 = false;
	}
	if(d4 < d && ex4){
		var e1 = document.getElementById("e4");
		e1.innerHTML = "Exam Over!";
		ex4 = false;
	}
}

function format(tot){
	mins = tot % 60;
	hours = Math.floor(tot / 60);
	mins = mins +"";
	if(mins.length == 1){
		mins = "0"+mins;
	}
	return hours + ":" + mins;
}

function newExam(){
	hours = parseInt(document.getElementById("hour").value);//get hours and mins
	mins = parseInt(document.getElementById("min").value);
	name = (document.getElementById("name").value);
	extraTime = document.getElementById("extraTime").checked;

	if (isNaN(mins)) {
		 mins = 0
	}
	if (isNaN(hours)) {
		 hours = 0
	}

	tot = mins + (60*hours);
	date = new Date(0, 0, 1, 0, tot);
	ex = null;
	
	if(extraTime){
		ex = new Date(0, 0, 1, 0, tot+(tot/4));
	}else{
		ex = new Date(0, 0, 1, 0, tot);
	}
	elm = "ERROR";
	if(!ex1){
		elm = "e1";
		ex1 = true;
		d1 = calcTime(ex, true);
	}else if(!ex2){
		elm = "e2";
		ex2 = true;
		d2 = calcTime(ex, true);
	}else if(!ex3){
		elm = "e3";
		ex3 = true;
		d3 = calcTime(ex, true);
	}else  if(!ex4){
		elm = "e4";
		ex4 = true;
		d4 = calcTime(ex, true);
	}else{
		alert("No free slots");
		return;
	}

	var div = document.getElementById(elm);//get elm
	if(extraTime){
		div.innerHTML = name+"<br><br>Length: "+format(tot)+"<br>Start: " + calcTime(new Date(0, 0, 0))+"<br>Finish: "+calcTime(date, false)+"<br>Extra time finish: " + calcTime(ex, false);
	}else{
		div.innerHTML = name+"<br><br>Length: "+format(tot)+"<br>Start: " + calcTime(new Date(0, 0, 0))+"<br>Finish: "+calcTime(date, false)+"<br>";
	}
}

function toggle(elm){
	v = document.getElementById('new');
	elm.checked ? v.style.visibility = 'visible' : v.style.visibility = 'hidden';
}

var t=setInterval(dispTime,1000);
