// Get Elements
let clock   = document.querySelector("#clock h4");
let d_m_y   = document.querySelector("h3");

// Date
function pre_date(){

	let date = new Date();

	let month_list = ["January","February","March","April","May","June","July","August","September","October","November","December"];

	let week_list = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saterday"];

	let year  = date.getFullYear();
	let month = date.getMonth();
	let week  = date.getDay();

	let pre_month = month_list[month];
	let pre_week  = week_list[week];

	return `${pre_month} -- ${pre_week} -- ${year}`;
}



// Clock
function clockFun(){
	let date = new Date();

	let h     = date.getHours();
	let m     = date.getMinutes();
	let s     = date.getSeconds();
	let zone;

	if( h > 12 ){
		h = h - 12;
		zone = "PM";
	}else {
		zone = "AM";
	}

	// h = (h < 10) ? "0" + h : h;
	if( h < 10 ){
		h = "0" + h;
	}
	// m = (m < 10) ? "0" + m : m;
	if( m < 10 ){
		m = "0" + m;
	}
	// s = (s < 10) ? "0" + s : s;
	if( s < 10 ){
		s = "0" + s;
	}
	
	return `${h} : ${m} : ${s}  ${zone}`;
}


setInterval( () => {

	clock.innerHTML = clockFun();

	d_m_y.innerHTML = pre_date();

}, 1000);