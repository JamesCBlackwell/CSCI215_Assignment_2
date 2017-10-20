//link images in an array
var randomImage = new Array("img/ball.jpg","img/blocks.jpg","img/colors.jpg","img/green.jpg","img/pyramids.jpg");

//display images
function displayImage() {
    //use a random order to display any of the 5 images
    var number = Math.floor(Math.random()*5);
    document.write('<img src="'+randomImage[number]+'" />');
}
displayImage()