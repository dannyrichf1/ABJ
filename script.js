var imgDiv = document.getElementById("mvp-post-feat-img");
var getpostImg = document.getElementsByTagName("img");
console.log(getpostImg[2].src);
var postImg = '<img src="'+getpostImg[0].src+'"/>';
imgDiv.innerHTML = postImg;

		
			jQuery(document).ready(function($) {
			var leaderHeight = $("#mvp-leader-wrap").outerHeight();
			var logoHeight = $("#mvp-main-nav-top").outerHeight();
			var botHeight = $("#mvp-main-nav-bot").outerHeight();
			var navHeight = $("#mvp-main-head-wrap").outerHeight();
			var headerHeight = navHeight + leaderHeight;
			var aboveNav = leaderHeight + logoHeight;
			var totalHeight = logoHeight + botHeight;
			var previousScroll = 0;
			$(window).scroll(function(event){
					var scroll = $(this).scrollTop();
					if ( typeof leaderHeight !== "undefined" ) {
						if ($(window).scrollTop() > aboveNav){
							$("#mvp-main-nav-top").addClass("mvp-nav-small");
							$("#mvp-main-nav-bot").css("margin-top", logoHeight );
						} else {
							$("#mvp-main-nav-top").removeClass("mvp-nav-small");
							$("#mvp-main-nav-bot").css("margin-top","0");
						}
						if ($(window).scrollTop() > headerHeight){
							$("#mvp-main-nav-top").addClass("mvp-fixed");
							$("#mvp-main-nav-bot").addClass("mvp-fixed1");
							$("#mvp-main-body-wrap").css("margin-top", totalHeight );
							$("#mvp-main-nav-top").addClass("mvp-fixed-shadow");
							$(".mvp-fly-top").addClass("mvp-to-top");
							if(scroll < previousScroll) {
								$("#mvp-main-nav-bot").addClass("mvp-fixed2");
								$("#mvp-main-nav-top").removeClass("mvp-fixed-shadow");
							} else {
								$("#mvp-main-nav-bot").removeClass("mvp-fixed2");
								$("#mvp-main-nav-top").addClass("mvp-fixed-shadow");
							}
						} else {
							$("#mvp-main-nav-top").removeClass("mvp-fixed");
							$("#mvp-main-nav-bot").removeClass("mvp-fixed1");
							$("#mvp-main-nav-bot").removeClass("mvp-fixed2");
							$("#mvp-main-body-wrap").css("margin-top","0");
							$("#mvp-main-nav-top").removeClass("mvp-fixed-shadow");
							$(".mvp-fly-top").removeClass("mvp-to-top");
						}
					} else {
						if ($(window).scrollTop() > logoHeight){
							$("#mvp-main-nav-top").addClass("mvp-nav-small");
							$("#mvp-main-nav-bot").css("margin-top", logoHeight );
						} else {
							$("#mvp-main-nav-top").removeClass("mvp-nav-small");
							$("#mvp-main-nav-bot").css("margin-top","0");
						}
						if ($(window).scrollTop() > navHeight){
							$("#mvp-main-nav-top").addClass("mvp-fixed");
							$("#mvp-main-nav-bot").addClass("mvp-fixed1");
							$("#mvp-main-body-wrap").css("margin-top", totalHeight );
							$("#mvp-main-nav-top").addClass("mvp-fixed-shadow");
							$(".mvp-fly-top").addClass("mvp-to-top");
							if(scroll < previousScroll) {
								$("#mvp-main-nav-bot").addClass("mvp-fixed2");
								$("#mvp-main-nav-top").removeClass("mvp-fixed-shadow");
							} else {
								$("#mvp-main-nav-bot").removeClass("mvp-fixed2");
								$("#mvp-main-nav-top").addClass("mvp-fixed-shadow");
							}
						} else {
							$("#mvp-main-nav-top").removeClass("mvp-fixed");
							$("#mvp-main-nav-bot").removeClass("mvp-fixed1");
							$("#mvp-main-nav-bot").removeClass("mvp-fixed2");
							$("#mvp-main-body-wrap").css("margin-top","0");
							$("#mvp-main-nav-top").removeClass("mvp-fixed-shadow");
							$(".mvp-fly-top").removeClass("mvp-to-top");
						}
					}
					previousScroll = scroll;
			});
		
			$(".mvp-alp-side-in").niceScroll({cursorcolor:"#ccc",cursorwidth: 5,cursorborder: 0,zindex:999999});
		
			});
			
		
			jQuery(document).ready(function($) {
			$(".menu-item-has-children a").click(function(event){
			  event.stopPropagation();
		
			  });
		
			$(".menu-item-has-children").click(function(){
				  $(this).addClass("toggled");
				  if($(".menu-item-has-children").hasClass("toggled"))
				  {
				  $(this).children("ul").toggle();
			  $(".mvp-fly-nav-menu").getNiceScroll().resize();
			  }
			  $(this).toggleClass("tog-minus");
				  return false;
			  });
		
			// Main Menu Scroll
			  $(".mvp-fly-nav-menu").niceScroll({cursorcolor:"#888",cursorwidth: 7,cursorborder: 0,zindex:999999});
			});
			
		
			jQuery(document).ready(function($) {
			$(".infinite-content").infinitescroll({
			  navSelector: ".mvp-nav-links",
			  nextSelector: ".mvp-nav-links a:first",
			  itemSelector: ".infinite-post",
			  errorCallback: function(){ $(".mvp-inf-more-but").css("display", "none") }
			});
			$(window).unbind(".infscr");
			$(".mvp-inf-more-but").click(function(){
				   $(".infinite-content").infinitescroll("retrieve");
					return false;
			});
				if ($(".mvp-nav-links a").length) {
					$(".mvp-inf-more-but").css("display","inline-block");
				} else {
					$(".mvp-inf-more-but").css("display","none");
				}
			});
			

jQuery(document).ready(function($) {
"use strict";

  	// Fly-Out Navigation
	$(".mvp-fly-but-click").on('click', function(){
		$("#mvp-fly-wrap").toggleClass("mvp-fly-menu");
		$("#mvp-fly-wrap").toggleClass("mvp-fly-shadow");
  		$(".mvp-fly-but-wrap").toggleClass("mvp-fly-open");
  		$(".mvp-fly-fade").toggleClass("mvp-fly-fade-trans");
	});

	// Back to Top Button
    	var duration = 500;
    	$('.back-to-top').on('click', function(event) {
          event.preventDefault();
          $('html, body').animate({scrollTop: 0}, duration);
          return false;
    	});

 	// Search Toggle
 	$(".mvp-search-click").on('click', function(){
 	  $("#mvp-search-wrap").toggleClass("mvp-search-toggle");
  	});

 	// Mobile Social Toggle
 	$(".mvp-mob-soc-click").on('click', function(){
 	  $(".mvp-mob-soc-list").toggleClass("mvp-mob-soc-tog");
  	});

 	// Trending Toggle
 	$(".mvp-post-trend-but-click").on('click', function(){
 	  $("#mvp-post-trend-wrap").toggleClass("mvp-post-trend-tog");
  	});

   	// Comments Toggle
   	$(".mvp-com-click").on('click', function(){
	  $("#comments").show();
  	  $("#disqus_thread").show();
  	  $("#mvp-comments-button").hide();
  	});

   	// Continue Reading Toggle
   	$(".mvp-ad-rel-click").on('click', function(){
	  $("#mvp-content-main").css('max-height','none');
  	  $('#mvp-ad-rel-wrap').css('margin-top','20px');
  	  $("#mvp-ad-rel-top").hide();
  	});

	// Columns Toggle
	$('.mvp-feat1-right-wrap').each(function() {
		$(this).find(".mvp-tab-col-cont").hide(); //Hide all content
		$(this).find("ul.mvp-feat1-list-buts li.mvp-feat-col-tab").addClass("active").show(); //Activate first tab
		$(this).find(".mvp-tab-col-cont:first").show(); //Show first tab content
	});

	$("ul.mvp-feat1-list-buts li").on('click', function(e) {
		$(this).parents('.mvp-feat1-right-wrap').find("ul.mvp-feat1-list-buts li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(this).parents('.mvp-feat1-right-wrap').find(".mvp-tab-col-cont").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(this).parents('.mvp-feat1-right-wrap').find(activeTab).fadeIn(); //Fade in the active ID content

		e.preventDefault();
	});

	$("ul.mvp-feat1-list-buts li a").on('click', function(e) {
		e.preventDefault();
	});



})( jQuery );
