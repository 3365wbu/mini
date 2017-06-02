/**Created by Donald Heath on 6/2/2017.*/
/** Function that sums numbers*/

function updateResult() {
    var sa = parseInt(document.numbers.a.value);
    var sb = parseInt(document.numbers.b.value);
    var sc = parseInt(document.numbers.c.value);
    var sd = parseInt(document.numbers.d.value);
    var total = sa + sb + sc + sd;
    document.getElementById("answer").innerHTML = total;
    return false;

}