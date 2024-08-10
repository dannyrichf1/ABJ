var imgDiv = document.getElementById("mvp-post-feat-img");
var postContent = document.getElementById("mvp-post-content");
var getpostImg = postContent.getElementsByTagName("img");
var postImg = '<img style="width:100%;" src="'+getpostImg[0].src+'"/>';
imgDiv.innerHTML = postImg;
getpostImg[1].style.display = "none";
