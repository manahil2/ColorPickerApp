function changeColor() {
    let colorpicker = document.getElementById("colorpicker");
    let code = document.getElementById("code");
    let colordisplay = document.getElementById("colordisplay");

    code.textContent = "Selected Color: " + colorpicker.value;
    colordisplay.style.backgroundColor = colorpicker.value;
  }