function Count() {
    var textarea = document.getElementById("id3");
    var counter1 = document.getElementById('g1');
    var counter2 = document.getElementById('g2');
    var a = textarea.value;
    var b = a.length;
    if (b <= 50) {
        counter1.innerHTML = b;
        counter2.innerHTML = 50 - b;
        
        if (b === 50) {
            alert('Character limit exceeded');
            textarea.setAttribute("disabled", "disabled");
        } else {
        
            textarea.removeAttribute("disabled");
        }
    } else {
        alert('Character limit exceeded');
    }
}
