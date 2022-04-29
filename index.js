var x = document.createElement("CANVAS");
var canvas = document.getElementById("canvas");
var body = document.getElementById("body");

var ctx = x.getContext("2d");
// ctx.fillRect(0, 0, 250, 200);

canvas.style.width = "20rem";
canvas.style.height = "22rem";
var imgWidth = 300;
var imgHeight = 300;

var img = new Image();
console.log(imgWidth);
img.src = "./icon_head.png";

x.height = x.width * (img.height / img.width);
ctx.drawImage(img, 0, 0, imgWidth, imgHeight);

var cursor = 300;
var d = 10;
canvas.addEventListener("wheel", (e) => {
  if (e.deltaY < 0) {
    cursor -= 10;
    d -= 10; 
  } else if (e.deltaY > 0) {
    cursor += 10;
    d += 10;
  }
  console.log(e.client);
  // imgWidth = imgWidth + e.deltaY / 10;
  imgHeight = imgHeight + e.deltaY / 10;

  x.height = x.width * (img.height / img.width);
  ctx.drawImage(img, 0, 0, cursor, cursor);
});

function upload(evt) {
  var tgt = evt.target || window.event.srcElement,
    files = tgt.files;

  // FileReader support
  if (FileReader && files && files.length) {
    var fr = new FileReader();
    fr.onload = function () {
      img.onload = function () {
        x.height = x.width * (img.height / img.width);
        ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
      };
      img.src = fr.result;
    };
    fr.readAsDataURL(files[0]);
  }
}

canvas.appendChild(x);
