//your JS code here. If required.
let year=prompt("enter year")

if ((year%4==0&&year%100==0)||(year%400!=0)) {
	alert("366")
	
}
else{
	return alert("365")
}