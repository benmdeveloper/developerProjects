/**
 * Created by Benjamin on 9/1/2015.
 */
function cir1() {
    document.getElementById("cir1").style.backgroundColor='rgb(247,148,29)';
    document.getElementById("cir1").style.borderBottomColor='rgb(105, 52, 26)';
    document.getElementById("cir2").style.backgroundColor = "rgb(0,149,132)";
    document.getElementById("cir2").style.borderBottomColor='rgb(0, 105, 89)';
    document.getElementById("cir3").style.backgroundColor='rgb(218,70,56)';
    document.getElementById("cir3").style.borderBottomColor='rgb(105, 41, 32)';
    document.getElementById('cir1_text').style.visibility='visible';
    document.getElementById('cir2_text').style.visibility='hidden';
    document.getElementById('cir3_text').style.visibility='hidden';
}
function cir2() {
    document.getElementById("cir1").style.backgroundColor='rgb(218,70,56)';
    document.getElementById("cir1").style.borderBottomColor='rgb(105, 41, 32)';
    document.getElementById("cir2").style.backgroundColor = "rgb(247,148,29)";
    document.getElementById("cir2").style.borderBottomColor='rgb(105, 52, 26)';
    document.getElementById("cir3").style.backgroundColor='rgb(0,149,132)';
    document.getElementById("cir3").style.borderBottomColor='rgb(0, 105, 89)';
    document.getElementById('cir1_text').style.visibility='hidden';
    document.getElementById('cir2_text').style.visibility='visible';
    document.getElementById('cir3_text').style.visibility='hidden';
}
function cir3() {
    document.getElementById("cir1").style.backgroundColor = "rgb(218,70,56)";
    document.getElementById("cir1").style.borderBottomColor='rgb(105, 41, 32)';
    document.getElementById("cir2").style.backgroundColor = "rgb(0,149,132)";
    document.getElementById("cir2").style.borderBottomColor='rgb(0, 105, 89)';
    document.getElementById("cir3").style.backgroundColor = "rgb(247,148,29)";
    document.getElementById("cir3").style.borderBottomColor='rgb(105, 52, 26)';
    document.getElementById('cir1_text').style.visibility='hidden';
    document.getElementById('cir2_text').style.visibility='hidden';
    document.getElementById('cir3_text').style.visibility='visible';
}