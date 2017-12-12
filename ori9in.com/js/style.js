/**
 * Created by Keith on 2015/11/23 0023.
 */
//index.html
function pageScroll(){
    window.scrollBy(0,-50);
    scrolldelay=setTimeout('pageScroll()',1);
}
window.onscroll = function () {
    if (document.body.scrollTop > 50) {
        document.getElementById("common-header").className="common-header on";
        document.getElementById("logo-href").className="logo-href on";
        document.getElementById("clearfix").className="clearfix on";
    }else{
        document.getElementById("common-header").className="common-header";
        document.getElementById("logo-href").className="logo-href";
        document.getElementById("clearfix").className="clearfix";
    }
    if (document.body.scrollTop == 0) {
        clearTimeout(scrolldelay);
    }
}

//abour.html
function down(id) {
    var clas = document.getElementById("content-bottom-button-"+id).className;
    document.getElementById("content-bottom-button-"+id).className= clas+" on";
    if(id == 2) {
        document.getElementById("about").style.top = "-800px";
        document.getElementById("ser").style.bottom = "570px";
        document.getElementById("content-bottom-button-1").className= "content-bottom-button-1";
    }else {
        document.getElementById("about").style.top = "0";
        document.getElementById("ser").style.bottom = "0";
        document.getElementById("content-bottom-button-2").className= "content-bottom-button-2";
    }
}

var num0 = 1;
var num1 = 6;
var str1 = "content-team-img";
var str2 = "content-team-img in";
var str3 = "content-team-img on";

var fon1 = "content-team-font";
var fon2 = "content-team-font in";
var fon3 = "content-team-font on";

var con1 = "con-team-font";
var con2 = "con-team-font in";
var con3 = "con-team-font on";

function le() {
//    alert(num0+"***"+num1);
    document.getElementById("left-img-"+(num0)).className = str2;
    document.getElementById("center-img-"+(num0)).className = str2;
    document.getElementById("right-img-"+(num0)).className = str2;
    document.getElementById("left-font-"+(num0)).className = fon2;
    document.getElementById("right-font-"+(num0)).className = fon2;
    document.getElementById("con-font-"+(num0)).className = con2;

    if (num0 == 6) {
        document.getElementById("left-img-5").className = str1;
        document.getElementById("center-img-5").className = str1;
        document.getElementById("right-img-5").className = str1;
        document.getElementById("left-font-5").className = fon1;
        document.getElementById("right-font-5").className = fon1;
        document.getElementById("con-font-5").className = con1;

        document.getElementById("left-img-1").className = str3;
        document.getElementById("center-img-1").className = str3;
        document.getElementById("right-img-1").className = str3;
        document.getElementById("left-font-1").className = fon3;
        document.getElementById("right-font-1").className = fon3;
        document.getElementById("con-font-1").className = con3;

        num0 = 1;
        num1 = 6;
    }else {
        if (num0 != 1) {
            document.getElementById("left-img-" + (num0 - 1)).className = str1;
            document.getElementById("center-img-" + (num0 - 1)).className = str1;
            document.getElementById("right-img-" + (num0 - 1)).className = str1;
            document.getElementById("left-font-"+(num0 - 1)).className = fon1;
            document.getElementById("right-font-"+(num0 - 1)).className = fon1;
            document.getElementById("con-font-"+(num0 - 1)).className = con1;

        }else {
            document.getElementById("left-img-6").className = str1;
            document.getElementById("center-img-6").className = str1;
            document.getElementById("right-img-6").className = str1;
            document.getElementById("left-font-6").className = fon1;
            document.getElementById("right-font-6").className = fon1;
            document.getElementById("con-font-6").className = con1;

        }
        document.getElementById("left-img-"+(num0 + 1)).className = str3;
        document.getElementById("center-img-"+(num0 + 1)).className = str3;
        document.getElementById("right-img-"+(num0 + 1)).className = str3;
        document.getElementById("left-font-"+(num0 + 1)).className = fon3;
        document.getElementById("right-font-"+(num0 + 1)).className = fon3;
        document.getElementById("con-font-"+(num0 + 1)).className = con3;

        num0++;
        num1--;
    }
}
function ri() {
//    alert(num0+"***"+num1);
    document.getElementById("left-img-"+(num1)).className = str3;
    document.getElementById("center-img-"+(num1)).className = str3;
    document.getElementById("right-img-"+(num1)).className = str3;
    document.getElementById("left-font-"+(num1)).className = fon3;
    document.getElementById("right-font-"+(num1)).className = fon3;
    document.getElementById("con-font-"+(num1)).className = con3;

    if (num1 == 1) {
        document.getElementById("left-img-2").className = str1;
        document.getElementById("center-img-2").className = str1;
        document.getElementById("right-img-2").className = str1;
        document.getElementById("left-font-2").className = fon1;
        document.getElementById("right-font-2").className = fon1;
        document.getElementById("con-font-2").className = con1;

        document.getElementById("left-img-6").className = str2;
        document.getElementById("center-img-6").className = str2;
        document.getElementById("right-img-6").className = str2;
        document.getElementById("left-font-6").className = fon2;
        document.getElementById("right-font-6").className = fon2;
        document.getElementById("con-font-6").className = con2;

        num0 = 1;
        num1 = 6;
    }else {
        if (num1 != 6 ) {
            document.getElementById("left-img-" + (num1 + 1)).className = str1;
            document.getElementById("center-img-" + (num1 + 1)).className = str1;
            document.getElementById("right-img-"+ (num1 + 1)).className = str1;
            document.getElementById("left-font-"+(num1 + 1)).className = fon1;
            document.getElementById("right-font-"+(num1 + 1)).className = fon1;
            document.getElementById("con-font-"+(num1 + 1)).className = con1;

        }else {
            document.getElementById("left-img-1").className = str1;
            document.getElementById("center-img-1").className = str1;
            document.getElementById("right-img-1").className = str1;
            document.getElementById("left-font-1").className = fon1;
            document.getElementById("right-font-1").className = fon1;
            document.getElementById("con-font-1").className = con1;

        }
        document.getElementById("left-img-"+(num1 - 1)).className = str2;
        document.getElementById("center-img-"+(num1 - 1)).className = str2;
        document.getElementById("right-img-"+(num1 - 1)).className = str2;
        document.getElementById("left-font-"+(num1 - 1)).className = fon2;
        document.getElementById("right-font-"+(num1 - 1)).className = fon2;
        document.getElementById("con-font-"+(num1 - 1)).className = con2;

        num0++;
        num1--;
    }
}