const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Создание QR-кода...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue} `;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "QR-код создан!";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});

//var colorPicker = document.getElementById("bgcolor");
//var colorVal;
//var buttons = document.querySelectorAll(".colors");
//var done = document.getElementById("doIt");

//function changebodycolor(){
// colorVal = colorPicker.value;
// document.getElementById("colorContainer").value = colorVal;}

//colorPicker.addEventListener("change",changebodycolor,false);

//for(var i = 0; i < buttons.length; i++){
 //  buttons[i].onclick = function(){
//      if(colorContainer.value.trim().length < 1)
//   {return false;}
   
//   else {
//        this.innerHTML = colorVal;
//     }
//   };
//}

//doIt.onclick = function(){
 //  var gradient = "linear-gradient(to top,"
 //  + buttons[0].innerHTML + ","
 //  + buttons[1].innerHTML  + ","
 //  + buttons[2].innerHTML  + ","
 //  + buttons[3].innerHTML  + ",";
 //  document.body.style.background = gradient;
// };








//colorPicker.addEventListener("input", updateFirst, false);
//colorPicker.addEventListener("change", watchColorPicker, false);

//function watchColorPicker(event) {
//  document.querySelectorAll("p").forEach(function(p) {
//    p.style.color = event.target.value;
//  });
//}

//var colorWell;
//var defaultColor = "#0000ff";

//window.addEventListener("load", startup, false); 


// https://chart.googleapis.com/chart?cht=qr&chl='${qrValue}'&chs=180x180&choe=UTF-8&chld=L|2 

// https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}
