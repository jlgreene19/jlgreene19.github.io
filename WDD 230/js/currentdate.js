	// toLocaleDateString
	const options = {weekday: ‘long’, day: ‘numeric’, month: ‘long’, year: ‘numeric’};
	document.getElementById(‘currentdate’).textContent = new Date().toLocaleDateString(‘en-US’, options);

	// These two are just examples:
	// const todaysdate = new Date();
	// console.log(todaysdate);
</script>


// day names array
const dayNames = [
	“Sunday”,
	“Monday”,
	“Tuesday”,
	“Wednesday”,
	“Thursday”,
	“Friday”,
	“Saturday”,
];

// Long month names array
const months = [
	“January”,
	“February”,
	“March”,
	“April”,
	“May”,
	“June”,
	“July”,
	“August”,
	“September”,
	“October”,
	“November”,
	“December”,
];
const todaysdate = new Date();
const dayName = dayNames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()’;
const currentdate = dayName + “, “ + todaydate.getDate() + “ “ + monthName + “, “ + todaysdate.getFullYear();

document.getElementById(‘currentdate’).textContent = currentdate;