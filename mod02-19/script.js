function displayValue(input) {
    document.getElementById("value").innerHTML += input;
}

function compute() {
    try {
        var x = eval(document.getElementById("value").innerHTML);
        document.getElementById("value").innerHTML = x;
        if (x < 5) {
            document.getElementById("value2").innerHTML = x + " &lt; 5";
        } else if (x > 5) {
            document.getElementById("value2").innerHTML = x + " &gt; 5";
        } else {
            document.getElementById("value2").innerHTML = x + " = 5";
        }
        if (x % 2 == 0) {
            document.getElementById("value3").innerHTML = x + " is an even number";
        } else {
            document.getElementById("value3").innerHTML = x + " is an odd number";
        }
    } catch (e) {
        if (e instanceof SyntaxError) {
            document.getElementById("value").innerHTML = e.message;
        }
    }
}

function clearText() {
    document.getElementById("value").innerHTML = "";
    document.getElementById("value2").innerHTML = "";
    document.getElementById("value3").innerHTML = "";
}

function showMonth() {
    var x = parseInt(document.getElementById("month").value);
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    alert(month[x-1]);
    return;
    // switch (x) {
    //     case 1:
    //         alert("January");
    //         break;
    //     case 2:
    //         alert("February");
    //         break;
    //     case 3:
    //         alert("March");
    //         break;
    //     case 4:
    //         alert("April");
    //         break;
    //     case 5:
    //         alert("May");
    //         break;
    //     case 6:
    //         alert("June");
    //         break;
    //     case 7:
    //         alert("July");
    //         break;
    //     case 8:
    //         alert("August");
    //         break;
    //     case 9:
    //         alert("September");
    //         break;
    //     case 10:
    //         alert("October");
    //         break;
    //     case 11:
    //         alert("November");
    //         break;
    //     case 12:
    //         alert("December");
    //         break;
    // }
}