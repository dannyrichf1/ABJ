var imgDiv = document.getElementById("mvp-post-feat-img");
var getpostImg = document.getElementsByTagName("img");
console.log(getpostImg[2].src);
var postImg = '<img src="'+getpostImg[0].src+'"/>';
imgDiv.innerHTML = postImg;
