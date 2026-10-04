const thing = document.getElementById("thumb");
function thumbIt(mang){
	thing.src = "/unfun/artass/" + mang + "_thumb.jpg";
}
function unthumbIt(){
	thing.src = "/siteside/missing_bigg.gif";
}