function toggleClassToBody(className){
	var theBody = document.getElementsByTagName('body').item(0);
	theBody.classList.toggle(className);
}

function sliceMenu(){
	document.getElementById('navigation').classList.toggle("slicedMenu");
}

var searchEle = $('#header .top .leftArea .search');

$('#header .top .menuIcon').click(function(){
	$(this).toggleClass('opened');
	$('.mobileNav').stop().fadeToggle();
});

$('.mobileNav .widgets .icons .one').click(function(){
	var id = $(this).index('.mobileNav .widgets .icons .one');
	if($(this).hasClass('active')){
		$(this).removeClass('active');
		$('.mobileNav .widgets .theWidget .oneItem').slideUp(300);
	}
	else{
		$('.mobileNav .widgets .icons .one').removeClass('active')
		$(this).addClass('active');
		$('.mobileNav .widgets .theWidget .oneItem').slideUp(300);
		$('.mobileNav .widgets .theWidget .oneItem').eq(id).slideDown(300);
		$('.hourlyWeater .flexslider').resize();
	}
});

$('.icon', searchEle).click(function(e){
	$(searchEle).toggleClass('opened');
	$('input[type="text"]', searchEle).focus();
});

$('input[type="text"]', searchEle).keyup(function(){
	if($(this).val() == ""){
		$(searchEle).removeClass('showSubmit');
	}
	else{
		$(searchEle).addClass('showSubmit');
	}
})

var rtl = !$('body').hasClass('english');
$('.flexslider .slides').addClass('flexslider-fix-rtl');
$(window).load(function(){
	$('.hourlyWeater .flexslider').flexslider({
		animation: "slide",
		controlNav: false,
		directionNav: true,
		slideshow: false,
		rtl: rtl,
		start: function(slider){
			$('.slides', slider).removeClass('flexslider-fix-rtl');
			slider.resize();
		}
	});
	$('.hhPostionsSlider .flexslider').flexslider({
		animation: "slide",
		animationLoop: false,
		controlNav: false,
		itemWidth: 210,
		itemMargin: 40,
		minItems: 2,
		maxItems: 3,
		rtl: rtl,
		start: function(slider){
			$('.slides', slider).removeClass('flexslider-fix-rtl');
		}
	});
	$('.hhAchievements .flexslider').flexslider({
		animation: "slide",
		controlNav: false,
		directionNav: true,
		slideshow: false,
		rtl: rtl,
		start: function(slider){
			$('.slides', slider).removeClass('flexslider-fix-rtl');
			slider.resize();
		}
	});
	$('.hhQuotes.flexslider').flexslider({
		animation: "slide",
		controlNav: false,
		directionNav: true,
		slideshow: false,
		rtl: rtl,
		start: function(slider){
			$('.slides', slider).removeClass('flexslider-fix-rtl');
		}
	});
});

/*--------------------------------------------------------
	Image plugin
--------------------------------------------------------*/
var imgObj, divEle, divEle_width, divEle_height, imgEle, imgEle_width, imgEle_height,
eles = document.getElementsByClassName('bgCover');
for(i=0; i<eles.length; i++){ 
	eles.item(i).parentNode.style.background = "#ddd";
}

function getImages(){
	for(i=0; i<eles.length; i++){
		
		imgEle = eles[i];
		divEle = imgEle.parentNode;
		
		divEle_width = divEle.offsetWidth;
		divEle_height = divEle.offsetHeight;
		
		imgObj = new Image();
		imgObj.src = imgEle.getAttribute('src');
		imgEle_width = imgObj.width;
		imgEle_height = imgObj.height;
		
		if( divEle_height/imgEle_height > divEle_width/imgEle_width ){
			imgEle.classList.remove("fullWidth");
			imgEle.classList.remove("fullHeight");
			imgEle.className += " fullHeight";
			imgEle.style.marginLeft = ((imgEle.clientWidth-divEle_width)/2 * -1)+"px";
			imgEle.style.marginTop = 0;
		}
		else{
			imgEle.classList.remove("fullWidth");
			imgEle.classList.remove("fullHeight");
			imgEle.className += " fullWidth";
			imgEle.style.marginTop = ((imgEle.clientHeight-divEle_height)/2 * -1)+"px";
			imgEle.style.marginLeft = 0;
		}
	}
}
window.addEventListener("load", getImages);
window.addEventListener("resize", getImages2);

var loadCounter = 0;
$(window).load(function(e){
	var imagePlg = setInterval(function(e){
		if(loadCounter<5){
			getImages();
		}
		else{clearInterval(imagePlg);}
		loadCounter++;
	},500);
})

function getImages2(){
	var loadCounter2 = 0;
	clearInterval(imagePlg2);
	var imagePlg2 = setInterval(function(e){
		if(loadCounter2<2){
			getImages();
		}
		else{clearInterval(imagePlg2);}
		loadCounter2++;
	},1000);
}