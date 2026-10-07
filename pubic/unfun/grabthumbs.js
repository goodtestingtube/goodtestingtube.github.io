const thing = document.getElementById("thumb");
function thumbIt(mang, type){
	if (type == "anim") {
		thing.src = "/unfun/artass/skool/" + mang + "_thumb.gif";
	} else {
		thing.src = "/unfun/artass/skool/" + mang + "_thumb.jpg";
	}
}
function unthumbIt(){
	thing.src = "/siteside/missing_bigg.gif";
}