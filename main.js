
function myFunc() {
    var x = document.getElementById("frm");
    var text = "";
    /* var i;
    for (i = 0; i < x.length; i++) {
        text += "<p>" + x.elements[i].value + "<br></p>";
    } */
    text += "<p>" + x.elements[0].value + "<br></p>";
    document.getElementById("list_cmnt").innerHTML += text;
}