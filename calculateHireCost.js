// Calculate the cost of hiring personal for the dates specified
var $date1 = $('#sdate');
$('#sdate').text($date1);
var date1 = $date1[0];

var $date2 = $('#cdate');
var date2 = $date2[0];
$('#cdate').text($date2);

var $rate = $('#rate');
$('#rate').val($rate);
var $hours = $('#hours');
$('#hours').val($hours);

var $theList = $('#theList');   // jQuery collection
var theList = $theList[0];      // DOM node

console.log($date1[0]);
console.log(date1);
console.log($date2[0]);
console.log(date2);
console.log($hours);
console.log($rate);


// convert date string to date
date1 = new Date(date1);
date2 = new Date(date2);

console.log(date1);
console.log(date2);

// retrieve number of weeks
var weeks = weeksBetween(date1, date2);

console.log(weeks);

var comp = 0;

// calculate total hours and compensation
comp = $rate * $hours * weeks;
thours = $hours * weeks;

console.log(comp);
console.log(thours);

// return total hours and compensation to web page
$("#thours").val(thours);
$("#compensation").val(comp);



// This function calculates the number of weeks between the two dates

function weeksBetween(date1, date2) {

    // The number of milliseconds in one week
    var OneWeek = 1000 * 60 * 60 * 24 * 7;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms);

    // Convert back to days and return
    return Math.round(difference_ms/OneWeek);

}

// parse a date in yyyy-mm-dd format
// function parseDate(input) {
//  var parts = input.match(/(\d+)/g);
  // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
//  return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
// }