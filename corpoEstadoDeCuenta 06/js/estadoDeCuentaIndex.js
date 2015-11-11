(function() {

	var date = new Date(),
	weekday = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

	document.getElementById('weekday').innerHTML = weekday[date.getDay()];
	document.getElementById('day').innerHTML = date.getDate();

}) ();