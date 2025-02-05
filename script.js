let year = prompt("Enter a year");

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    alert("366");
} else {
    alert("365");
}