function addFractions() {
    var ts1 = parseFloat(document.getElementById("ts1").value);
    var ms1 = parseFloat(document.getElementById("ms1").value);
    var ts2 = parseFloat(document.getElementById("ts2").value);
    var ms2 = parseFloat(document.getElementById("ms2").value);

    var msc = ms1 * ms2;
    var Newts = ts1 * ms2 + ts2 * ms1;

    document.getElementById("result").innerText = "Result: " + Newts + "/" + msc;
}

function subtractFractions() {
    var ts1 = parseFloat(document.getElementById("ts1").value);
    var ms1 = parseFloat(document.getElementById("ms1").value);
    var ts2 = parseFloat(document.getElementById("ts2").value);
    var ms2 = parseFloat(document.getElementById("ms2").value);

    var msc = ms1 * ms2;
    var Newts = ts1 * ms2 - ts2 * ms1;

    document.getElementById("result").innerText = "Result: " + Newts + "/" + msc;
}

function multiplyFractions() {
    var ts1 = parseFloat(document.getElementById("ts1").value);
    var ms1 = parseFloat(document.getElementById("ms1").value);
    var ts2 = parseFloat(document.getElementById("ts2").value);
    var ms2 = parseFloat(document.getElementById("ms2").value);

    var Newms = ms1 * ms2;
    var Newts = ts1 * ts2;

    document.getElementById("result").innerText = "Result: " + Newts + "/" + Newms;
}

function divideFractions() {
    var ts1 = parseFloat(document.getElementById("ts1").value);
    var ms1 = parseFloat(document.getElementById("ms1").value);
    var ts2 = parseFloat(document.getElementById("ts2").value);
    var ms2 = parseFloat(document.getElementById("ms2").value);

    var Newms = ms1 * ts2;
    var Newts = ts1 * ms2;

    document.getElementById("result").innerText = "Result: " + Newts + "/" + Newms;
}
