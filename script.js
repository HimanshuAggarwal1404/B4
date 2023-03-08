total = prompt("Enter total number:");
console.log(total);
let i = 0;

onepage= prompt("enter no on one page")
let width;
width= (100/onepage)
console.log(width)
for (i=0; i < total; i++) {
  var div = document.createElement("div");
  div.style.min-width = width+ "vw";
  div.style.height = "200px";
  div.style.background = "red";
  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.alignItems = "center";
  div.style.color = "white";
  div.innerHTML = "Hello";
  div.style.margin='2px'
  div.id = i;
  console.log(i);
  document.getElementById("content").appendChild(div);
  
}
