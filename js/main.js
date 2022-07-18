// B1

function findNT(n)
{
    var flag = true;
    if (n < 2) {
        flag = false;
    }
    else if (n == 2) {
        flag = true;
    }
    else if (n % 2 == 0) {
        flag = false;
    }
    else {
        for (var i = 3; i <= Math.sqrt(n); i += 2)
        {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }
    return flag;
}
function printNumber()
{
    var number = Number(document.getElementById("numberN").value);
    var inRa = " ";
    for (var i = 1; i <= number; i++) {
        if (findNT(i)){
            inRa += i + " ";
        }
    }
    document.getElementById("textb1").innerHTML = inRa;
}

document.getElementById("logB1").onclick = printNumber;