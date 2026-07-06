const antinople = document.getElementById("istanbul");

const cantgoback = document.getElementById("cantgoback");

let next; 
let previous;
let position;
var latest;
var earliest;


var murray = new Array();

murray[0]="2026_july_adamtheasshole"
murray[1]="2026_june_memory"
murray[2]="2026_may_witchespt1"
murray[3]="2026_may_witchespt2"
murray[4]="2026_may_impspt1_nudity"
murray[5]="2026_may_impspt2"
murray[6]="2026_may_impspt3"
murray[7]="2026_may_impspt4"
murray[8]="2026_may_impspt5_nudity"
murray[9]="2025_dec_lucasbrotherpt1"
murray[10]="2025_dec_lucasbrotherpt2"
murray[11]="2025_dec_lucasbrotherpt3_nudity"
murray[12]="2025_nov_drugs_nudity"

var earliest = murray[murray.length - 1];
var latest = murray[0];

function triggerWarning() {
    if (position.includes("nudity") != false) {
        document.getElementById("trigger").innerHTML = "Nudity"
    } else {
        document.getElementById("trigger").innerHTML = "Nothing";
    }
}

function getPosition() {
    antinople.src = "theshit/thumb/" + position + ".jpg";
    antinople.alt = position;
    cantgoback.href = "theshit/" + position + ".jpg";
    console.log(position);
}

function getLatest() {
    position = latest;
    getPosition();
    triggerWarning();
}

function getEarliest() {
    position = earliest;
    getPosition();
    triggerWarning();
}