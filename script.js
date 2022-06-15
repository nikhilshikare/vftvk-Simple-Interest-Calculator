function compute() {
    var p = document.getElementById("principal").value;
    if (p == "") {
        alert("Please Enter a positive number");
    }
    else {
        var principal = parseFloat(document.getElementById("principal").value, 10);
        if (principal <= 0) {
            alert("Please Enter a positive number");
        }
        else {
            var principal = parseFloat(document.getElementById("principal").value, 10);
            var rate = parseFloat(document.getElementById("rate").value, 10);
            var years = parseInt(document.getElementById("years").value, 10);
            var amount=(principal * years * rate) / 100;
            var year = new Date().getFullYear() + parseInt(years);
            document.getElementById("result").innerHTML="<br>If you deposit <b style='background: yellow;'> "+principal+"</b>,\<br\>at an interest rate of <b style='background: yellow;'> "+rate+"</b>%\<br\>You will receive an amount of <b style='background: yellow;'>"+amount+"</b>,\<br\>in the year <b style='background: yellow;'>"+year+"</b>\<br\>"

        }

    }
};
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
};