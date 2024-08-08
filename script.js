// باز کردن مدال
var modal = document.getElementById("change-password-modal");
var btn = document.getElementById("change-password-btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

// بستن مدال با کلیک روی "x"
span.onclick = function() {
    modal.style.display = "none";
}

// بستن مدال با کلیک خارج از مدال
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
