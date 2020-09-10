for (var i = 0; i < 256; i++) {
  const griditem = document.createElement("div");
  griditem.setAttribute('class', 'grid-item');
  document.getElementById("grid").appendChild(griditem);
}

document.querySelector(".grid").addEventListener("mouseover", function (event) {
      if (event.target.getAttribute('class') != "grid-item") {
        return;
      }
      else{
        event.target.style.backgroundColor = "red";
      }
      })

const clearbtn = document.querySelector('#clearbtn');
clearbtn.addEventListener('click',function() {
    var numberGrid = prompt("How big do you want the grid to be?");
    document.querySelectorAll('.grid-item').forEach(function(a){
        a.remove()
        })
    var str = "";
    for (var i = 0; i < numberGrid; i++) {
      str = str.concat("auto ");
    }
    console.log(str);
    document.getElementById("grid").style.gridTemplateColumns = str;
    for (var i = 0; i < numberGrid*numberGrid; i++) {
      const griditem = document.createElement("div");
      griditem.setAttribute('class', 'grid-item');
      document.getElementById("grid").appendChild(griditem);
    }
    x = document.querySelectorAll(".grid-item");
    for (var i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "#EEEBEB";
    }
  });