function addNumbers() {
     let a = Number(document.getElementById('n1').value);
     let b = Number(document.getElementById("n2").value);
     document.getElementById("sum").innerText = "Sum is: " + (a + b);
}

function makeRed() {
     document.getElementById("output").style.color = "red";
}

function sayHello() {
     alert("Hello, CSE 13!");
}

function textLength() {
     let val = document.getElementById("box").value;
     document.getElementById("output").innerHTML = "Length is: " + val.length;
}

function reverseText() {
     let val = document.getElementById("box").value;
     let rev = val.split("").reverse().join("");
     document.getElementById("rev1").innerHTML = "Reversed is: " + rev;
}