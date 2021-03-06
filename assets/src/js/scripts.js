jQuery(document).ready(function($) {
    $.noConflict();
    // Code that uses jQuery's $ can follow here.
    if (function() {
            "use strict";
            

            function e() {
                $(".masonry-blog-layout").masonry({
                    itemSelector: ".rq-masonry-blog-item",
                    columnWidth: ".blog-width",
                    percentPosition: !0
                })
            }
            $(window).load(function() {
                $("#rq-page-loading").fadeOut("slow")
            }),$("#rq-category-result").length > 0 && $(".show-result-btn").on("click", function() {
                $("html, body").animate({
                    scrollTop: $("#rq-category-result").offset().top
                }, 1e3)
            }), $("#rateYo").length > 0 && $("#rateYo").rateYo({
                starWidth: "20px",
                normalFill: "#ccc"
            }), $(".equal-height").length > 0 && $(".equal-height").matchHeight(), $(".rq-search-content select").selectize(), $(".rq-category-select select").selectize(), $(".headroom-sticky").sticky({
                topSpacing: 0
            }), $(window).scroll(function() {
                var a = $(window).scrollTop();
                a >= 20 && $(".home-page-menu").addClass("sticky-scroll animated"), 0 === a && $(".home-page-menu").removeClass("sticky-scroll animated")
            }), $(".headroom-sticky").sticky({
                topSpacing: 0
            });
            var b = ($(window).height(), $(".home-header").height()),
                c = $(".navbar-home").height(),
                d = parseInt(b) + parseInt(c);
            if ($(window).scroll(function() {
                    var a = $(window).scrollTop();
                    a >= d ? $(".home-page").addClass("sticky-scroll animated") : $(".home-page").removeClass("sticky-scroll animated")
                }), $(".masonry-wrapper").masonry({
                    itemSelector: ".rq-masonry-item",
                    columnWidth: ".item-width"
                }), setTimeout(e, 500), $(".details-slider").length > 0 && jQuery(".details-slider").owlCarousel({
                    center: !0,
                    items: 1,
                    loop: !0,
                    nav: !0,
                    navText: ["&#xf3d2", "&#xf3d3;"]
                }), $(".online-course.details-slider").length > 0 && jQuery(".online-course.details-slider").owlCarousel({
                    center: !0,
                    items: 1,
                    loop: !0,
                    nav: !0,
                    navText: ['<i class="ion-ios-arrow-thin-left"></i>', '<i class="ion-ios-arrow-thin-right"></i>']
                }), $(".lawyer-testimonial").length > 0 && jQuery(".lawyer-testimonial").owlCarousel({
                    items: 1,
                    loop: !0,
                    nav: !0,
                    navText: ["&#xf3d5", "&#xf3d6"]
                }), $(".top-hotel").length > 0 && jQuery(".top-hotel").owlCarousel({
                    items: 5,
                    loop: !0,
                    autoplay: !0,
                    margin: 5,
                    nav: !0,
                    navText: ["&#xf3d5", "&#xf3d6"],
                    responsive: {
                        0: {
                            items: 1,
                            nav: !1
                        },
                        600: {
                            items: 2,
                            nav: !1,
                            autoplay: !0
                        },
                        1e3: {
                            items: 5,
                            nav: !0,
                            loop: !1
                        }
                    }
                }), $(".top-online-course").length > 0 && jQuery(".top-online-course").owlCarousel({
                    items: 5,
                    loop: !0,
                    autoplay: !0,
                    margin: 5,
                    autoplayHoverPause: !0,
                    nav: !0,
                    navText: ["&#xf3d5", "&#xf3d6"],
                    responsive: {
                        0: {
                            items: 1,
                            nav: !1
                        },
                        600: {
                            items: 2,
                            nav: !1,
                            autoplay: !0
                        },
                        1e3: {
                            items: 5,
                            nav: !0,
                            autoplay: !0
                        }
                    }
                }), $(".top-hotel-blog").length > 0 && jQuery(".top-hotel-blog").owlCarousel({
                    items: 4,
                    loop: !0,
                    autoplay: !1,
                    margin: 5,
                    autoplayHoverPause: !0,
                    nav: !0,
                    navText: ['<i class="ion-ios-arrow-thin-left"></i>', '<i class="ion-ios-arrow-thin-right"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                            nav: !1
                        },
                        600: {
                            items: 1,
                            nav: !1
                        },
                        1e3: {
                            items: 2,
                            nav: !0
                        }
                    }
                }), $(".top-online-course-blog").length > 0 && jQuery(".top-online-course-blog").owlCarousel({
                    items: 4,
                    loop: !0,
                    autoplay: !1,
                    margin: 5,
                    autoplayHoverPause: !0,
                    nav: !0,
                    navText: ['<i class="ion-ios-arrow-thin-left"></i>', '<i class="ion-ios-arrow-thin-right"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                            nav: !1
                        },
                        600: {
                            items: 1,
                            nav: !1
                        },
                        1e3: {
                            items: 2,
                            nav: !0
                        }
                    }
                }), $(".partners-wrapper").length > 0 && $(".partners-wrapper").owlCarousel({
                    items: 5,
                    nav: !1,
                    autoplay: !0,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 3
                        },
                        1e3: {
                            items: 5
                        }
                    }
                }), $(".progress-bar.one").on("inview", function(a, b) {
                    b ? $(this).css({
                        width: "70%"
                    }) : $(this).css({
                        width: "0%"
                    })
                }), $(".progress-bar.two").on("inview", function(a, b) {
                    b ? $(this).css({
                        width: "95%"
                    }) : $(this).css({
                        width: "0%"
                    })
                }), $(".progress-bar.three").on("inview", function(a, b) {
                    b ? $(this).css({
                        width: "50%"
                    }) : $(this).css({
                        width: "0%"
                    })
                }), $(".fact-box-count").length > 0 && $(".fact-box-count").countTo(), $(".rq-listing-counter-number").length > 0 && $(".rq-listing-counter-number").countTo(), $("#elements-menu").length > 0 && $("#elements-menu").sticky({
                    topSpacing: 100
                }), $(window).scroll(function() {
                    $(this).scrollTop() > $(document).height() - $(".rq-footer").height() - $(window).height() ? $("#elements-menu").css("visibility", "hidden") : $("#elements-menu").css("visibility", "visible")
                }), $(".scholar-ui-slider").length > 0 && ($(".scholar-ui-slider").slider({
                    range: "min",
                    value: 800,
                    min: 1,
                    max: 1600,
                    slide: function(a, b) {
                        $(".show-slider-amount").html(b.value + " KM")
                    }
                }), $(".show-slider-amount").html($(".scholar-ui-slider").slider("values", 0) + " KM")), $("#carousel").length > 0) {
                var f = function() {
                    $(window).load(function() {
                        $("#carousel").flexslider({
                            animation: "slide",
                            controlNav: !1,
                            animationLoop: !1,
                            slideshow: !1,
                            itemWidth: 90,
                            itemMargin: 10,
                            asNavFor: "#slider",
                            maxItems: 3,
                            directionNav: !0
                        }), $("#slider").flexslider({
                            animation: "slide",
                            controlNav: !1,
                            animationLoop: !1,
                            slideshow: !1,
                            sync: "#carousel"
                        })
                    })
                };
                f()
            }
            if ($("#listing-carousel").length > 0) {
                var g = function() {
                    $(window).load(function() {
                        $("#listing-carousel").flexslider({
                            animation: "slide",
                            controlNav: !1,
                            animationLoop: !1,
                            slideshow: !1,
                            itemWidth: 90,
                            asNavFor: "#listing-slider",
                            maxItems: 4,
                            directionNav: !0,
                            itemMargin: 15
                        }), $("#listing-slider").flexslider({
                            animation: "slide",
                            controlNav: !1,
                            animationLoop: !1,
                            slideshow: !1,
                            sync: "#listing-carousel"
                        })
                    })
                };
                g()
            }
            $(".video-wrapper").length > 0 && fitvids(".video-wrapper"), $(".post-content").length > 0 && fitvids(".post-content"), $(window).resize(function() {
                var a = $(".headroom-sticky").outerHeight();
                $("rq-category-map-contains").height($(window).height() - a)
            }), $(window).trigger("resize")
        }(jQuery), function() {
            "use strict";
            $(window).load(function() {
                var a = $(".headroom-sticky").outerHeight();
                $(".rq-category-map-contains").css({
                    height: $(window).height() - a + "px"
                })
            }), $(window).resize(function() {
                var a = $(".headroom-sticky").outerHeight();
                $(".rq-category-map-contains").css({
                    height: $(window).height() - a + "px"
                })
            }), $(window).trigger("resize")
        }(jQuery), function() {
            "use strict";
            if ($(".rq-scrollable-div").length > 0) {
                var a = $(".rq-testimonial-single").length;
                $(".rq-testimonial-content").css({
                    width: 460 * a + "px"
                }), $(".rq-scrollable-div").mCustomScrollbar({
                    axis: "x",
                    theme: "light-3",
                    scrollbarPosition: "outside",
                    mouseWheel: {
                        axis: "y"
                    }
                })
            }
            $(".toggle-widget").length > 0 && $(".toggle-widget").on("click", function() {
                $(".footer-widget").slideToggle(300), $(this).toggleClass("active")
            }), $("input#startdate").length > 0 && ($("input#enddate").on("click", function() {
                $("input#startdate").trigger("click")
            }), $("input#startdate").daterangepicker({
                autoUpdateInput: !1,
                minDate: new Date,
                locale: {
                    cancelLabel: "Clear"
                }
            }), $("input#startdate").on("apply.daterangepicker", function(a, b) {
                $("#startdate").val(b.startDate.format("MM/DD/YYYY"))
            }), $("input#startdate").on("apply.daterangepicker", function(a, b) {
                $("#enddate").val(b.endDate.format("MM/DD/YYYY"))
            }), $("input#startdate").on("cancel.daterangepicker", function(a, b) {
                $("input#startdate").val(""), $("input#enddate").val("")
            })), $(".related-car-faq").length > 0 && $(".related-car-faq  .rq-category-result-items").niceScroll({
                scrollspeed: 10,
                mousescrollstep: 100,
                autohidemode: !1,
                cursorcolor: "#0a252e",
                background: "#efeeee",
                cursorborderradius: 0,
                cursorborder: 0
            });
            $(".faq-single .hidden-content").hide();
            $(".faq-single").on("click", "a.faq-title", function(a) {
                a.preventDefault();
                var b = $(this),
                    c = b.next("p.hidden-content"),
                    d = $("p.hidden-content"),
                    e = $("a.faq-title");
                b.hasClass("active") !== !1 ? (d.slideUp(), b.removeClass("active")) : (e.removeClass("active"), b.toggleClass("active"), d.slideUp(), c.slideToggle())
            })
        }(jQuery), (new WOW).init(), $(".rq-main-slider").length > 0 && $(".rq-main-slider").owlCarousel({
            items: 1,
            autoplay: !0,
            loop: !0,
            autoplayTimeout: 5e3
        }), window.matchMedia("(max-width: 991px)").matches ? $(".categori-menu p").on("click", function() {
            $(".categori-menu").toggleClass("rq-sks"), $(".categori-menu").hasClass("rq-sks") ? $(".categori-unorder").css({
                top: "54px",
                opacity: "1",
                visibility: "visible"
            }) : $(".categori-unorder").css({
                top: "54px",
                opacity: "0",
                visibility: "hidden"
            })
        }) : ($(".categori-menu").on("mouseover", function() {
            $(".categori-unorder").css({
                top: "54px",
                opacity: "1",
                visibility: "visible"
            })
        }), $(".categori-menu").on("mouseleave", function() {
            $(".categori-unorder").css({
                top: "54px",
                opacity: "0",
                visibility: "hidden"
            })
        })), $(window).bind("load resize ", function() {
            window.matchMedia("(max-width: 767px)").matches && $("#rq_inner_sks a").on("click", function() {
                $("#rq_inner_sks").toggleClass("active"), $("#rq_inner_sks").hasClass("active") ? ($("#rq_inner_sks > .rq-dropdown").css({
                    display: "block",
                    opacity: "1",
                    visibility: "visible",
                    position: "relative"
                }), $("#rq_inner_sks > a i").removeClass("fa-angle-right"), $("#rq_inner_sks > a i").addClass("fa-angle-down")) : ($("#rq_inner_sks > .rq-dropdown").css({
                    display: "none",
                    opacity: "0",
                    visibility: "hidden",
                    position: "absolute"
                }), $("#rq_inner_sks > a i").removeClass("fa-angle-down"), $("#rq_inner_sks > a i").addClass("fa-angle-right"))
            })
        }), $(".product-carousel").length > 0 && $(".product-carousel").owlCarousel({
            loop: !0,
            margin: 10,
            nav: !0,
            navText: ["<i class='ion-ios-arrow-thin-left'></i>", "<i class='ion-ios-arrow-thin-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1e3: {
                    items: 4
                },
                1150: {
                    items: 5
                }
            }
        }), $(".home-page-rq#stickynav").length > 0) {
        var stickyHeaderTop = $("#stickynav").offset().top;
        $(window).scroll(function() {
            $(window).scrollTop() > stickyHeaderTop ? ($("#stickynav").css({
                position: "fixed",
                top: "0px",
                left: "0px",
                right: "0px",
                "z-index": "9999"
            }), $("#stickynav .categori-menu").css({
                display: "none"
            }), $("#stickynav .rq-custom-logo").css({
                display: "block"
            }), $("#stickynav .container").addClass("container-fluid"), $("#stickynav .dropdown.rq-seller.not-show").css({
                display: "block"
            }), $("#stickynav .rq-custom-3").css({
                width: "260px"
            }), $("#stickynav .rq-custom-9").css({
                width: "calc(100% - 260px)"
            }), $("#stickynav").addClass("rq-script-class-for-nav")) : ($("#stickynav").css({
                position: "static",
                top: "0px",
                left: "0px",
                right: "0px",
                "z-index": "9999"
            }), $("#stickynav .categori-menu").css({
                display: "block"
            }), $("#stickynav .rq-custom-logo").css({
                display: "none"
            }), $("#stickynav .container").removeClass("container-fluid"), $("#stickynav .dropdown.rq-seller.not-show").css({
                display: "none"
            }), $("#stickynav .rq-custom-3").css({
                width: ""
            }), $("#stickynav .rq-custom-9").css({
                width: ""
            }), $("#stickynav").removeClass("rq-script-class-for-nav"))
        })
    }
    if ($("#stickynav").length > 0 && $(".home-page-rq#stickynav").length < 1 && ($("#stickynav").css({
            position: "fixed",
            top: "0px",
            left: "0px",
            right: "0px",
            "z-index": "99",
            transition: "none"
        }), $("#stickynav .categori-menu").css({
            display: "none"
        }), $("#stickynav .rq-custom-logo").css({
            display: "block"
        }), $("#stickynav .container").addClass("container-fluid"), $("#stickynav .dropdown.rq-seller.not-show").css({
            display: "block"
        }), $("#stickynav .rq-custom-3").css({
            width: "260px"
        }), $("#stickynav .rq-custom-9").css({
            width: "calc(100% - 260px)"
        }), $("#stickynav").addClass("rq-script-class-for-nav"), $(".rq-header-location .top-bar").css({
            display: "none"
        })), $("#slider-range").length > 0 && $(function() {
            $("#slider-range").slider({
                range: !0,
                min: 0,
                max: 500,
                values: [75, 300],
                slide: function(a, b) {
                    $("#amount").val("$" + b.values[0] + " - $" + b.values[1])
                }
            }), $("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1))
        }), $("#carousel").length > 0) {
        var testimonialSlider = function() {
            $(window).load(function() {
                $("#carousel").flexslider({
                    animation: "slide",
                    controlNav: !1,
                    animationLoop: !1,
                    slideshow: !1,
                    itemWidth: 125,
                    itemMargin: 6,
                    asNavFor: "#slider"
                }), $("#slider").flexslider({
                    animation: "slide",
                    controlNav: !1,
                    animationLoop: !1,
                    slideshow: !1,
                    sync: "#carousel"
                })
            })
        };
        testimonialSlider()
    }
    $("#counter i").length > 0 && $("#counter i").on("click", function() {
        var a = $("#counter input").val();
        $("#counter .ion-android-remove").click(function() {
            a--
        }), $("#counter .ion-android-add").click(function() {
            a++
        })
    }), $(".rq-shopping-cart-items-list").length > 0 && ($(".rq-shopping-cart-items-list").on("click", function(a) {
        a.preventDefault(), $(this).toggleClass("active"), $(this).hasClass("active") ? $(this).parent().find(".rq-shopping-cart-inner-div").addClass("rq-visible") : $(this).parent().find(".rq-shopping-cart-inner-div").removeClass("rq-visible")
    }), $(document).mouseup(function(a) {
        var b = $(".rq-shopping-cart-inner-div");
        b.is(a.target) || 0 !== b.has(a.target).length || (b.removeClass("rq-visible"), $(".rq-shopping-cart-items-list").removeClass("active"))
    })), $(".shipping-rq").on("click", function() {
        var a = $(this).parent(".rq-cart-options-title");
        a.siblings(".shipping-it").toggleClass("rq_sks"), a.siblings(".shipping-it").hasClass("rq_sks") ? (a.siblings(".shipping-it").css({
            visiblity: "hidden",
            opacity: "0",
            height: "0",
            padding: "10px 0"
        }), a.siblings(".shipping-it form").css({
            display: "none"
        })) : (a.siblings(".shipping-it").css({
            visiblity: "visible",
            opacity: "1",
            height: "370px",
            padding: "45px 0"
        }), a.siblings(".shipping-it form").css({
            display: "block"
        }))
    }), $(".flexslider.post-gallery-single").length > 0 && $(window).load(function() {
        $("#carousel").flexslider({
            animation: "slide",
            controlNav: !1,
            animationLoop: !1,
            slideshow: !1,
            maxItems: 5,
            itemWidth: 90,
            itemMargin: 10,
            directionNav: !0,
            asNavFor: "#slider"
        }), $("#slider").flexslider({
            animation: "slide",
            controlNav: !1,
            animationLoop: !1,
            slideshow: !1,
            sync: "#carousel"
        })
    });
});