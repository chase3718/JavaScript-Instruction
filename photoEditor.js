// var img = new Image();
// img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';

// img.onload = function () {
//     draw(this);
// };

// function draw(img) {
//     var ctx = canvas.getContext('2d');
//     ctx.drawImage(img, 0, 0);
//     img.style.display = 'none';
//     document.getElementById('canvas').style.width = ctx.width;
//     document.getElementById('canvas').style.height = ctx.height;
//     var canvas = document.getElementById('canvas');
//     var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//     var data = imageData.data;

//     var invert = function () {
//         for (var i = 0; i < data.length; i += 4) {
//             data[i] = 255 - data[i];     // red
//             data[i + 1] = 255 - data[i + 1]; // green
//             data[i + 2] = 255 - data[i + 2]; // blue
//         }
//         ctx.putImageData(imageData, 0, 0);
//     };


// }

var sketchProc = function (processingInstance) {
    with (processingInstance) {
        size(400, 400);
        var halfImage = width * height / 2;
        var pImage = loadImage('images/0.jpg');
        loadPixels();

        for (var i = 0; i < halfImage; i++) {

            pixels[i + halfImage] = pixels[i];

        }

        updatePixels();

        image(pImage, 0, 0);


    }
};
// Get the canvas that Processing-js will use
var canvas = document.getElementById("mycanvas");
// Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
var processingInstance = new Processing(canvas, sketchProc);