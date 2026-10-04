const thing = document.getElementById("thumb");
function thumbIt(mang){
	thing.src = "/unfun/artass/" + mang + "_thumb.jpg";
	console.log("yup")
}
function unthumbIt(){
	thing.src = "/siteside/missing_bigg.gif";
	console.log("nop")
}