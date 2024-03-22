function mylightBox(src){
    $(".lighBox img").attr('src',src);
    $(".lighBox").addClass('active');
}

function getBlockNumber(img) {

    return $('[data-image='+img+']').closest('.bloque').data('bloque');
}

function setIdsIntoSlots(){
	var deviceWidth = $(window).width();

	$("[ad-dynamic]").each(function() {

		var slot = $(this),
			id = slot['context'].dataset['jsAdManagerSlot'],
			maxw = slot['context'].dataset['jsMaxw'],
            minw = slot['context'].dataset['jsMinw'];

        if( minw === undefined && maxw === undefined ||  /* No media queries */
        minw === undefined && deviceWidth <= maxw || /* Device less maxw -> mobile */
        minw <= deviceWidth && deviceWidth <= maxw || /* Intermediate devices -> tablets */
        minw <= deviceWidth && maxw === undefined ) /* Device upper minw -> desktop */
    	{
            slot.attr("id",id);
    	}
    });
}

function whoIsInViewPort(items) {

    var windowHeight = top.innerHeight,
        scrollStart = window.pageYOffset,
        scrollEnd = windowHeight + scrollStart
        itemsInViewPort = [];

    $.each(items,function(i, item){
        if(elementInViewPort(item)){
            // If item is in viewport returns true and we push the i in the array
            itemsInViewPort.push(item.dataset.image);
        }
    });

    if(itemsInViewPort.length <= 1) {
        // Si hay uno en pantalla devolverlo
        return itemsInViewPort[0];
    } else {
        // Si hay mas de uno en pantalla, ver cual es la visiblidad de cada uno, y despues devolver el que tenga mayor visiblidad.
        itemsInViewPortVisibility = [];
        visibility = 0;
        bigger = 0;

        $.each(itemsInViewPort,function(i, item) {

            var y = calculateVisibility($('[data-image='+item+']'));

            if(y >= visibility){
                visibility = y;
                bigger = item;
            }
        });
        return bigger;
    }
}

function elementInViewPort(elem) {
    var $elem = $(elem),
        top = $elem.offset().top,
        height = $elem.height(),
        bottom = top + height,
        $window = $(window),
        viewport_top = $window.scrollTop(),
        viewport_height = $window.height(),
        viewport_bottom = viewport_top+viewport_height;

    return (top >= viewport_top && top<viewport_bottom) ||
        (bottom>viewport_top && bottom <= viewport_bottom) ||
        (height > viewport_height && top <= viewport_top && bottom>=viewport_bottom );
}

function calculateVisibility(d) {
    var windowHeight = $(window).height(),
        docScroll = $(document).scrollTop(),
        divPosition = d.offset().top,
        divHeight = d.height(),
        hiddenBefore = docScroll - divPosition,
        hiddenAfter = (divPosition + divHeight) - (docScroll + windowHeight);

    if ((docScroll > divPosition + divHeight) || (divPosition > docScroll + windowHeight)) {
        return 0;
    } else {
        var result = 100;

        if (hiddenBefore > 0) {
            result -= (hiddenBefore * 100) / divHeight;
        }

        if (hiddenAfter > 0) {
            result -= (hiddenAfter * 100) / divHeight;
        }
        return result;
    }
}

function updateCurrentImg(n) {

    $('.gallery-count strong').html(n);
}

function pushToGpt() {
    dataLayer.push({'event': 'pageview'});
}

function ipsosPageView() {
    if (typeof dm !== 'undefined' ) {
    	try {
  		dm.AjaxEvent("pageview");
    	} catch (error) {
    		console.error(error);
    	}
    }
}

function comscorePageView() {
    // Begin Check vendorConsent cookie
    var cs_ucfr = '';
    function getCmpVendorsCookie(name) {
        var cookieValue = null;
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length === 2) {
            cookieValue = parts.pop().split(";").shift();
        }
        return cookieValue;
    }

    var vendorConsentsValue = getCmpVendorsCookie('vendorconsents');
    if(vendorConsentsValue !== null) {
        var vendorConsents = JSON.parse(atob(vendorConsentsValue));
        if(typeof vendorConsents === 'object' && typeof vendorConsents[77] === "boolean") {
            if(vendorConsents[77] === true) {
                cs_ucfr = 1;
            } else {
                cs_ucfr = 0;
            }
        }
    }
    self.COMSCORE && COMSCORE.beacon({
        c1: "2",
        c2: "6035866",
        cs_ucfr:cs_ucfr,
        options: {
            enableFirstPartyCookie: true
        }
    });
    var pageviewUrl = window.location.protocol + "//" + window.location.hostname + "/ajax/pageview_candidate.html";
    $.ajax({url: pageviewUrl, success: function(result){
            console.log('pageview_candidate call');
        }});
}



function moveToImage(n) {
            $("html, body").animate({
                scrollTop: $( '[data-image='+n+']').offset().top - 105
            }, 0, function() {
                // Animation complete.
                control = true;
            });
        }

function blockAdResolver(n) {

    /* En esta funcion hay que hacer dos funciones para obtener dinamicamente los tamaÃ±os y los adunits (y los mappings) */

    if(n === undefined) return;

	var positionA = 'megabanner';
	var placeA = 'ATF';
	var positionB = 'robapaginas';
	var placeB = 'ATF'

	if(n>1){
		positionA = 'mega-galerias';
		placeA = 'MTF';
		positionB = 'roba-galerias';
		placeB = 'MTF'
	}
    console.log("_________ Showing ads from block " + n + " _________");

    var slotNameA = 'megabanner-dinamico'+n;
    var slotNameB = 'robapaginas-dinamico'+n;

    googletag.cmd.push(function() {

        var mapping1 = googletag.sizeMapping().addSize([0,0], [[2,1],[300,100],[300,75],[320,50],[320,100],[320,480]]).addSize([728,0], [[2,1],[468,60],[728,90],[728,200]]).addSize([980,0], [[2,1],[970,90],[970,250],[728,90],[980,250],[980,90]]).build();

        //Nueva forma de pedir publicidad
        var test_mapping = {
            "mapping1":  [
                { minViewPort: [0, 0], sizes: [[2,1],[300,100],[300,75],[320,50],[320,100],[320,480]] },
                { minViewPort: [728, 0], sizes: [[2,1],[468,60],[728,90],[728,200]] },
                { minViewPort: [980, 0], sizes: [[2,1],[970,90],[970,250],[728,90],[980,250],[980,90]] }
            ]
        };

        var mapping1 = googletag.sizeMapping().
            addSize([0,0], [[2,1],[320,50],[320,100]]).
            addSize([728,0], [[2,1],[728,90],[728,200]]).
            addSize([970,0], [[2,1],[970,90],[970,250],[728,90]]).
            build();

        var slotA = googletag.defineSlot(adUnitPath, [[980,250],[980,90],[970,250],[970,90],[728,200],[728,90],[468,60],[320,480],[320,100],[320,50],[300,100],[300,75],[2,1]], slotNameA).
            setTargeting('position',positionA).
            setTargeting('place',placeA).
            defineSizeMapping(mapping1).
            addService(googletag.pubads());

        console.log("var slotA = googletag.defineSlot("+adUnitPath+", , "+slotNameA+").\n\t\tsetTargeting('position','"+positionA+"').\n\t\tsetTargeting('place','"+placeA+"').defineSizeMapping(mapping1).\n\t\taddService(googletag.pubads());");

        var slotB = googletag.defineSlot(adUnitPath, [[120,600],[160,600],[200,200],[250,250],[300,250],[300,600],[336,280]], slotNameB).
            setTargeting('position',positionB).
            setTargeting('place',placeB).
            addService(googletag.pubads());

        console.log("var slotB = googletag.defineSlot("+adUnitPath+", , "+slotNameB+").\n\t\tsetTargeting('position','"+positionB+"').\n\t\tsetTargeting('place','"+placeB+"').\n\t\taddService(googletag.pubads());");

        //googletag.display(slotNameA, slotNameB);
        //googletag.pubads().refresh([slotA, slotB]);



        console.log("Calling to pbjs.. " + n);
        pbjs.que.push(function() {
            pbjs.rp.requestBids({
                callback: callAdserver,
                gptSlotObjects: [slotA, slotB],
                //data: <optional_first_party_data_object>,
                sizeMappings: test_mapping
            });
        });



    });

    // Add class 'resolved' to the current block
    $("[data-bloque="+n+"]").addClass("resolved");
}


// function that calls the ad-server
function callAdserver(gptSlots) {
    //if (pbjs.adserverCalled) return;
    //pbjs.adserverCalled = true;
    // ESTO SE INTRODUCE PORQUE POR https://jira.hola.com/browse/JIRAJS-1207 NO QUIEREN PUBLICIDAD SI ES PUBLIREPORTAJE
    if(adUnitPath.includes("/hola/publirreportajes/default") == false) {
        googletag.pubads().refresh(gptSlots);
    } else {
        console.log('AL SER PUBLIREPORTAJE NO MOSTRAMOS PUBLICIDAD');
    }

}


function updateUrl(n){

    var url = noticiaUrlGaleria+n+"/"+previewVar;

    //ED2-1513: subdirectory fashion
    if (isHolaFashionHost()){
        url = newUrlFashion(url);
    }


    if(serverHost === "https://www.hellomagazine.com"){
        window.history.pushState("", titular_sin_comillas+" - Photo "+n, url);
        $('html head title').html(titular_sin_comillas+" - Photo "+n);
    } else {
        window.history.pushState("", titular_sin_comillas+" - Foto "+n, url);
        $('html head title').html(titular_sin_comillas+" - Foto "+n);
    }

    $('html head link[rel="amphtml"]').attr("href",serverHost+url+"?viewas=amp");
}

//ED2-1513
function isHolaFashionHost()
{
    if ((serverHost == 'https://fashion.hola.com') || (serverHost == 'https://www.hola.com/fashion')) {
        return true;
    }
    return false;
}

//ED2-1513
function newUrlFashion(url)
{
     if (url.startsWith("/fashion") == false){
         return  "/fashion" + url;
     }
     if (url.startsWith("https://fashion.hola.com") == true){
         return  "https://www.hola.com/fashion" + url;
     }
     if (url.startsWith("http://editor2-fashion.hola.com") == true){
         return  "http://editor2.hola.com/fashion" + url;
     }

     return url;
}


$(function() {

    // Set ids depending width device into slots (slots mediaqueries)
    setIdsIntoSlots();

    $(".gallery .gallery-content figure img").css('min-height', Math.round(($('[data-image="1"]').width()/5) * 3)+'px' );

    // Show ads in the initial image block
    blockAdResolver(getBlockNumber(imageNumBrowser));


    // If page loads with different pictures than 1, display it
    if(imageNumBrowser === 1) {
        control = true;
    } else {
        moveToImage(imageNumBrowser);
    }

    // Share buttons
    $('.news-share').click(function() {
        $(this).toggleClass('hover');
    })

    // View thumbsnails
    $('.thumbs').click(function() {
        $('body').toggleClass('thumbview');
    })


    // Expand images
    if($(window).width() >= 769) {
        $('.galleryImage, .gallery-content figure .expand').click( function() {
            let src = $(this).parent().find('[data-src]').attr('data-src');
            if (src.indexOf('?') > -1) {
                src = src.substring(0, src.indexOf('?'));
            }
            mylightBox(src);
        });
        $('.lighBox').click(function() {
            $(this).removeClass('active');
        });
    }

    // goToTop button event
    $(".goTop").click(function(e) {
        e.preventDefault();
        control = false;
        if($('body').hasClass("scrollDown")) {
            $('html,body').animate({
                scrollTop: 0
            },500,function() {
                // Animation complete.
                control = true;
            });
        } else {
            document.location.href = noticiaUrl;
        }
    });

    var lastScrollTop = 0;
    // SCROLLS
    $(window).scroll(function() {

        // ED2-1586
        var st = window.pageYOffset || document.documentElement.scrollTop;
        
        // Control is a flag to control scrolling logic
        if(control === true) {

            var currentImg = whoIsInViewPort($('[data-image]'));

            // Si es distinto de undefined y distinto del antiguo para no saturar el DOM
            if(currentImg != undefined && currentImg != parseInt($('.gallery-count strong').html())){

                updateUrl(currentImg);
                updateCurrentImg(currentImg);
                pushToGpt(currentImg);

		        //JIRAJS-1691
                // downscroll => true
                // upscroll => false
                if (st > lastScrollTop){
                    // downscroll code
                    comscorePageView();
		    ipsosPageView();
                }

                var bloque = getBlockNumber(currentImg);

                if(!$("[data-bloque="+bloque+"]").hasClass("resolved")) {
                    blockAdResolver(bloque);
                }
            }
        }

        lastScrollTop = st <= 0 ? 0 : st;

        // New header when scrolls
        if(window.pageYOffset>110) { $('body').addClass('barGallery'); }
        else { $('body').removeClass('barGallery'); }

        /* scrollProgressBar*/
        var wintop = $(window).scrollTop(),
            docheight = $('body').height(),
            winheight = $(window).height(),
            totalScroll = (wintop/(docheight-winheight))*100;
        $(".scrollProgressBar").css("width",totalScroll+"%");
        /* scrollProgressBar*/

    });

});
