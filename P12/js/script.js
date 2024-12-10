alert("Hello, ini adalah program JS eksternal!");

// Alert for button
document.getElementById("buttonAlert").onclick = function () {
    alert("Hello, Javascript by button!");
};

// Alert for link
document.getElementById("linkAlert").onclick = function (event) {
    event.preventDefault();
    alert("Hello, Javascript by href link!");
};

// Update HTML content
document.getElementById("buttonUpdateContent").onclick = function () {
    document.getElementById("demo").innerHTML = "Hello Javascript";
};

// Update CSS style
document.getElementById("buttonUpdateCSS").onclick = function () {
    const demo2 = document.getElementById("demo2");
    demo2.style.fontSize = "35px";
    demo2.style.color = "red";
};