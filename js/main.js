function viewport() {
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width: e[a + 'Width'], height: e[a + 'Height'] };
}

$(function() {
    $('.mobile-burger').on('click', function() {
        var htmlBox = $('html');
        htmlBox.toggleClass('no-scroll is-open-sidebar');
        setTimeout(function() {
            $('.headline__sidebar-scroll')
                .stop()
                .animate(
                    {
                        scrollTop: 0
                    },
                    450
                );
        }, 450);
    });

    $('a[href^="#target-"], [data-href^="#target-"]').on('click', function(e) {
        e.preventDefault();
        var thisEl = $(this);
        var thisAttrHref;
        if (thisEl.attr('data-href')) {
            thisAttrHref = thisEl.attr('data-href');
        } else {
            thisAttrHref = thisEl.attr('href');
        }
        $('html, body').animate(
            {
                scrollTop: $('*').filter('[data-id="' + thisAttrHref + '"]').length
                    ? $('*')
                          .filter('[data-id="' + thisAttrHref + '"]')
                          .offset().top - 50
                    : $(thisAttrHref).offset().top - 50
            },
            750
        );
    });

    var accordion = $('.accordion-item');
    accordion.each(function() {
        var _this = $(this);
        if (_this.hasClass('is-open')) {
            _this.find('.accordion-cnt').slideDown();
        }
    });
    $('.accordion-title').on('click', function(e) {
        e.preventDefault();
        var _this = $(this);
        accordion
            .not(_this.parent())
            .removeClass('is-open')
            .find('.accordion-cnt')
            .slideUp();
        if (!_this.parent().hasClass('is-open')) {
            _this
                .parent()
                .addClass('is-open')
                .find('.accordion-cnt')
                .slideDown();
        } else {
            _this
                .parent()
                .removeClass('is-open')
                .find('.accordion-cnt')
                .slideUp();
        }
    });

    $(document).on(
        {
            mouseenter: function() {
                var _this = $(this);
                _this.addClass('submenu-visible open-submenu');
                $('body').addClass('is-open-menu');
            },

            mouseleave: function() {
                var _this = $(this);
                _this.removeClass('open-submenu');
                $('body').removeClass('is-open-menu');
                setTimeout(function() {
                    _this.removeClass('submenu-visible');
                }, 450);
            }
        },
        '.top-menu > ul > li.submenu'
    );

    $(document).on(
        {
            mouseenter: function() {
                var _this = $(this);
                _this.addClass('submenu-visible open-submenu');
                $('body').addClass('is-open-menu');
            },

            mouseleave: function() {
                var _this = $(this);
                _this.removeClass('open-submenu');
                $('body').removeClass('is-open-menu');
                setTimeout(function() {
                    _this.removeClass('submenu-visible');
                }, 450);
            }
        },
        '.top-menu > ul > li.dropmenu'
    );

    // slick sliders

    /*$('.hello-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		speed: 750,
		arrows: false,
		dots: false
	});*/

    if (!$('body').hasClass('is-admin')) {
        if ($('*').is('.type-project-slider')) {
            $('.type-project-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                speed: 750,
                arrows: true,
                dots: false,
                fade: true,
                prevArrow: '<button class="slick-prev slick-arrow type-project-slider__prev" aria-label="Prev" type="button" style="">Prev</button>',
                nextArrow: '<button class="slick-next slick-arrow type-project-slider__next" aria-label="Next" type="button" style="">Next</button>'
            });
        }

        if ($('*').is('.projects-slider')) {
            $('.projects-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                speed: 750,
                arrows: true,
                dots: false,
                fade: false,
                prevArrow: '<button class="slick-prev slick-arrow projects-slider__prev" aria-label="Prev" type="button" style="">Prev</button>',
                nextArrow: '<button class="slick-next slick-arrow projects-slider__next" aria-label="Next" type="button" style="">Next</button>',
                responsive: [
                    {
                        breakpoint: 480,
                        settings: {
                            dots: true
                        }
                    }
                ]
            });
        }

        if (viewport().width > 600 && $('*').is('.more-projects-slider')) {
            $('.more-projects-slider').slick({
                slidesToScroll: 1,
                infinite: true,
                speed: 750,
                arrows: true,
                dots: false,
                variableWidth: true,
                prevArrow: '<button class="slick-prev slick-arrow more-projects-slider__prev" aria-label="Prev" type="button" style="">Prev</button>',
                nextArrow: '<button class="slick-next slick-arrow more-projects-slider__next" aria-label="Next" type="button" style="">Next</button>'
            });
        }

        if ($('*').is('.project-gallery-slider')) {
            $('.project-gallery-slider').slick({
                slidesToScroll: 1,
                infinite: true,
                speed: 750,
                arrows: true,
                dots: false,
                variableWidth: true,
                prevArrow: '<button class="slick-prev slick-arrow project-gallery-slider__prev" aria-label="Prev" type="button" style="">Prev</button>',
                nextArrow: '<button class="slick-next slick-arrow project-gallery-slider__next" aria-label="Next" type="button" style="">Next</button>'
            });
        }

        var optionsProjectRow = $('.options-project__row');
        var optionsProjectSlides = $('.options-project__item').length;
        if (optionsProjectSlides < 3) {
            optionsProjectRow.addClass('length-2');
        } else if (optionsProjectSlides < 2) {
            optionsProjectRow.addClass('length-1');
        }
        if (viewport().width < 1421 && $('*').is('.options-project-slider')) {
            $('.options-project-slider').slick({
                slidesToShow: optionsProjectSlides >= 3 ? 3 : optionsProjectSlides,
                slidesToScroll: 1,
                infinite: true,
                speed: 750,
                arrows: true,
                dots: false,
                prevArrow: '<button class="slick-prev slick-arrow options-project-slider__prev" aria-label="Prev" type="button" style="">Prev</button>',
                nextArrow: '<button class="slick-next slick-arrow options-project-slider__next" aria-label="Next" type="button" style="">Next</button>',
                responsive: [
                    {
                        breakpoint: 1280,
                        settings: {
                            dots: true,
                            slidesToShow: optionsProjectSlides < 2 ? optionsProjectSlides : 2
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            dots: true,
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }

        if ($('*').is('.letters-slider')) {
            var lettersSlider = $('.letters-slider');
            lettersSlider.slick({
                slidesToShow: parseInt(lettersSlider.attr('data-count'), 10),
                slidesToScroll: 1,
                infinite: true,
                speed: 750,
                arrows: true,
                dots: false,
                fade: false,
                prevArrow: '<button class="slick-prev slick-arrow letters-slider__prev" aria-label="Prev" type="button" style="">Prev</button>',
                nextArrow: '<button class="slick-next slick-arrow letters-slider__next" aria-label="Next" type="button" style="">Next</button>',
                responsive: [
                    {
                        breakpoint: 1540,
                        settings: {
                            slidesToShow: 5
                        }
                    },
                    {
                        breakpoint: 1330,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 1070,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 810,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1
                        }
                    },
                    {
                        breakpoint: 481,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                            dots: false,
                            variableWidth: true
                        }
                    }
                ]
            });
        }

        if ($('*').is('.video-slider')) {
            $('.video-slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                speed: 750,
                arrows: true,
                dots: false,
                fade: false,
                prevArrow: '<button class="slick-prev slick-arrow video-slider__prev" aria-label="Prev" type="button" style="">Prev</button>',
                nextArrow: '<button class="slick-next slick-arrow video-slider__next" aria-label="Next" type="button" style="">Next</button>',
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 900,
                        settings: {
                            slidesToShow: 1
                        }
                    },
                    {
                        breakpoint: 601,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                            dots: false,
                            variableWidth: true
                        }
                    }
                ]
            });
        }

        if ($('*').is('.facts-slider')) {
            $('.facts-slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                speed: 750,
                arrows: true,
                dots: false,
                fade: false,
                prevArrow: '<button class="slick-prev slick-arrow facts-slider__prev" aria-label="Prev" type="button" style="">Prev</button>',
                nextArrow: '<button class="slick-next slick-arrow facts-slider__next" aria-label="Next" type="button" style="">Next</button>',
                responsive: [
                    {
                        breakpoint: 1360,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1
                        }
                    },
                    {
                        breakpoint: 601,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                            dots: true,
                            variableWidth: true
                        }
                    }
                ]
            });
        }

        if ($('*').is('.competencies-for-slider')) {
            $('.competencies-for-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                speed: 450,
                arrows: true,
                dots: false,
                fade: false,
                prevArrow: '<button class="slick-prev slick-arrow competencies-for-slider__prev" aria-label="Prev" type="button" style="">Prev</button>',
                nextArrow: '<button class="slick-next slick-arrow competencies-for-slider__next" aria-label="Next" type="button" style="">Next</button>',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            arrows: false,
                            adaptiveHeight: true
                        }
                    }
                ]
            });
        }

        if ($('*').is('.projects-hello-for-slider')) {
            $('.projects-hello-for-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                speed: 450,
                arrows: true,
                dots: false,
                fade: false,
                prevArrow: '<button class="slick-prev slick-arrow projects-hello-for-slider__prev" aria-label="Prev" type="button" style="">Prev</button>',
                nextArrow: '<button class="slick-next slick-arrow projects-hello-for-slider__next" aria-label="Next" type="button" style="">Next</button>',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            arrows: false,
                            adaptiveHeight: true
                        }
                    }
                ]
            });
        }

        if ($('*').is('.about-type-for-slider')) {
            $('.about-type-for-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                speed: 450,
                arrows: true,
                dots: false,
                fade: false,
                prevArrow: '<button class="slick-prev slick-arrow about-type-for-slider__prev" aria-label="Prev" type="button" style="">Prev</button>',
                nextArrow: '<button class="slick-next slick-arrow about-type-for-slider__next" aria-label="Next" type="button" style="">Next</button>',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false
                        }
                    }
                ]
            });
        }

        if ($('*').is('.main-hello-slider')) {
            $('.main-hello-slider').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: false,
                speed: 750,
                arrows: true,
                dots: false,
                fade: false,
                prevArrow: '<button class="slick-prev slick-arrow main-hello-slider__prev" aria-label="Prev" type="button" style="">Prev</button>',
                nextArrow: '<button class="slick-next slick-arrow main-hello-slider__next" aria-label="Next" type="button" style="">Next</button>',
                vertical: true
            });
        }
    }

    var mainHelloList = $('.main-hello__list');
    var mainHelloProject = $('.main-hello__project');

    mainHelloProject.each(function(key, value) {
        $(value).attr('data-index', key);
    });

    mainHelloList.on('click', function() {
        var _this = $(this);
        var thisIndex = parseInt(_this.attr('data-slick-index'), 10);

        mainHelloList.not(_this).removeClass('is-active');
        mainHelloList
            .not(_this)
            .find('img')
            .each(function() {
                var _this = $(this);
                var thisStart = _this.attr('data-start');

                if (typeof thisStart !== typeof undefined && thisStart !== false) {
                    _this.attr({
                        'data-img': _this.attr('src'),
                        src: _this.attr('data-start')
                    });
                    _this.removeAttr('data-start');
                }
            });

        if (!_this.hasClass('is-active')) {
            _this.addClass('is-active');
        } else {
            _this.removeClass('is-active');
        }

        mainHelloProject.not('[data-index="' + thisIndex + '"]').removeClass('is-open');
        var mainHelloProjectNow = mainHelloProject.filter('[data-index="' + thisIndex + '"]');
        if (!mainHelloProjectNow.hasClass('is-open')) {
            mainHelloProjectNow.addClass('is-open');
        } else {
            mainHelloProjectNow.removeClass('is-open');
        }

        var thisImg = _this.find('img');
        var thisImgSrc = thisImg.attr('src');
        var thisImgData = thisImg.attr('data-img');

        thisImg.attr({
            'data-start': thisImgSrc
        });

        if (typeof thisImgData !== typeof undefined && thisImgData !== false) {
            thisImg.attr({
                src: thisImgData,
                'data-img': thisImgSrc
            });
        }
    });

    /*if (viewport().width < 1280) {
		mainHelloList.filter('[data-slick-index="0"]').addClass('is-active');
		mainHelloProject.filter(':nth-child(1)').addClass('is-open');
	}*/

    if ($('*').is('.competencies-for-slider')) {
        var competenciesForSlider = $('.competencies-for-slider');
        var competenciesNavSlider = $('.competencies-nav-slider');
        var competenciesNavItem = $('.competencies-nav__item');
        var competenciesNavArrow = $('.competencies-nav__arrow .arrow');

        competenciesNavItem.each(function(key, value) {
            $(value).attr('data-index', key);
        });

        competenciesNavItem.filter('[data-index="0"]').addClass('is-active');

        competenciesNavItem.on('click', function() {
            var _this = $(this);
            var thisIndex = parseInt(_this.attr('data-index'), 10);

            competenciesForSlider.slick('slickGoTo', thisIndex);

            if (viewport().width > 1279) {
                competenciesNavItem.removeClass('is-active');
                competenciesNavItem.filter('[data-index="' + thisIndex + '"]').addClass('is-active');
                competenciesNavArrow.css({
                    left: (100 / competenciesNavItem.length) * thisIndex + '%'
                });
            }

            if (viewport().width < 1280) {
                competenciesNavSlider.slick('slickGoTo', thisIndex);
            }
        });

        competenciesForSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            if (viewport().width > 1279) {
                competenciesNavItem.removeClass('is-active');
                competenciesNavItem.filter('[data-index="' + nextSlide + '"]').addClass('is-active');
                competenciesNavArrow.css({
                    left: (100 / competenciesNavItem.length) * nextSlide + '%'
                });
            }

            if (viewport().width < 1280) {
                competenciesNavSlider.slick('slickGoTo', nextSlide);
            }
        });

        if (viewport().width < 1280) {
            if ($('*').is('.competencies-nav-slider')) {
                competenciesNavSlider.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    speed: 450,
                    arrows: false,
                    dots: false,
                    fade: false,
                    variableWidth: true
                });
            }

            competenciesNavSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                competenciesForSlider.slick('slickGoTo', nextSlide);
            });
        }
    }

    if ($('*').is('.projects-hello-for-slider')) {
        var projectsHelloForSlider = $('.projects-hello-for-slider');
        var projectsHelloNavSlider = $('.projects-hello-nav-slider');
        var projectsHelloNavItem = $('.projects-hello-nav__item');

        projectsHelloNavItem.each(function(key, value) {
            $(value).attr('data-index', key);
        });

        projectsHelloNavItem.filter('[data-index="0"]').addClass('is-active');

        projectsHelloNavItem.on('click', function() {
            var _this = $(this);
            var thisIndex = parseInt(_this.attr('data-index'), 10);

            projectsHelloForSlider.slick('slickGoTo', thisIndex);

            if (viewport().width > 1023) {
                projectsHelloNavItem.removeClass('is-active');
                projectsHelloNavItem.filter('[data-index="' + thisIndex + '"]').addClass('is-active');
            }

            if (viewport().width < 1024) {
                projectsHelloNavSlider.slick('slickGoTo', thisIndex);
            }
        });

        projectsHelloForSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            if (viewport().width > 1023) {
                projectsHelloNavItem.removeClass('is-active');
                projectsHelloNavItem.filter('[data-index="' + nextSlide + '"]').addClass('is-active');
            }

            if (viewport().width < 1024) {
                projectsHelloNavSlider.slick('slickGoTo', nextSlide);
            }
        });

        if (viewport().width < 1024) {
            if ($('*').is('.projects-hello-nav-slider')) {
                projectsHelloNavSlider.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    speed: 450,
                    arrows: false,
                    dots: false,
                    fade: false,
                    variableWidth: true,
                    centerMode: true
                });
            }

            projectsHelloNavSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                projectsHelloForSlider.slick('slickGoTo', nextSlide);
            });
        }
    }

    if ($('*').is('.about-type-for-slider')) {
        var aboutTypeForSlider = $('.about-type-for-slider');
        var aboutTypeNavSlider = $('.about-type-nav-slider');
        var aboutTypeNavItem = $('.about-type-nav__item');
        var aboutTypeNavArrow = $('.about-type-nav__arrow .arrow');

        aboutTypeForSlider.each(function(key, value) {
            $(value).attr('data-index', key);
        });

        aboutTypeNavSlider.each(function(key, value) {
            $(value)
                .attr('data-index', key)
                .find(aboutTypeNavItem)
                .each(function(key, value) {
                    $(value).attr('data-index', key);
                });
        });

        aboutTypeNavArrow.each(function(key, value) {
            $(value).attr('data-index', key);
        });

        aboutTypeNavItem.filter('[data-index="0"]').addClass('is-active');

        aboutTypeNavItem.on('click', function() {
            var _this = $(this);
            var thisIndex = parseInt(_this.attr('data-index'), 10);
            var thisParent = _this.parents('.row-items');
            var thisParentPos = _this.parent().position().left;
            var thisParentIndex = parseInt(thisParent.attr('data-index'), 10);

            aboutTypeForSlider.filter('[data-index="' + thisParentIndex + '"]').slick('slickGoTo', thisIndex);

            thisParent.find('.item').removeClass('is-active');
            thisParent
                .find('.item')
                .filter('[data-index="' + thisIndex + '"]')
                .addClass('is-active');

            if (viewport().width > 767) {
                aboutTypeNavArrow.filter('[data-index="' + thisParentIndex + '"]').css({
                    left: thisParentPos // (102 * thisIndex)
                });
            }

            /*if (viewport().width > 767) {
				thisParent.find('.item').removeClass('is-active');
				thisParent.find('.item').filter('[data-index="' + thisIndex + '"]').addClass('is-active');
				aboutTypeNavArrow.filter('[data-index="' + thisParentIndex + '"]').css({
					'left': (102 * thisIndex)
				});
			}

			if (viewport().width < 768) {
				aboutTypeNavSlider.filter('[data-index="' + thisParentIndex + '"]').slick('slickGoTo', thisIndex);
			}*/
        });

        aboutTypeForSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            var _this = $(this);
            var thisIndex = parseInt(_this.attr('data-index'), 10);
            var aboutTypeNavPos = aboutTypeNavSlider
                .filter('[data-index="' + thisIndex + '"]')
                .find('.item')
                .filter('[data-index="' + nextSlide + '"]')
                .parent()
                .position().left;

            aboutTypeNavSlider
                .filter('[data-index="' + thisIndex + '"]')
                .find('.item')
                .removeClass('is-active');
            aboutTypeNavSlider
                .filter('[data-index="' + thisIndex + '"]')
                .find('.item')
                .filter('[data-index="' + nextSlide + '"]')
                .addClass('is-active');

            if (viewport().width > 767) {
                aboutTypeNavArrow.filter('[data-index="' + thisIndex + '"]').css({
                    left: aboutTypeNavPos //(102 * nextSlide)
                });
            }

            /*if (viewport().width > 767) {
				aboutTypeNavSlider.filter('[data-index="' + thisIndex + '"]').find('.item').removeClass('is-active');
				aboutTypeNavSlider.filter('[data-index="' + thisIndex + '"]').find('.item').filter('[data-index="' + nextSlide + '"]').addClass('is-active');
				aboutTypeNavArrow.filter('[data-index="' + thisIndex + '"]').css({
					'left': (102 * nextSlide)
				});
			}

			if (viewport().width < 768) {
				aboutTypeNavSlider.filter('[data-index="' + thisIndex + '"]').slick('slickGoTo', nextSlide);
			}*/
        });

        /*if (viewport().width < 768) {
			if ($('*').is('.about-type-nav-slider')) {
				aboutTypeNavSlider.slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: false,
					speed: 450,
					arrows: false,
					dots: false,
					fade: false,
					variableWidth: true
				});
			}

			aboutTypeNavSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
				var _this = $(this);
				var thisIndex = parseInt(_this.attr('data-index'), 10);

				aboutTypeForSlider.filter('[data-index="' + thisIndex + '"]').slick('slickGoTo', nextSlide);
			});
		}*/
    }

    var countProjectText = $('.count-project .desc');
    countProjectText.each(function() {
        var _this = $(this);
        var thisText = _this.text();
        var thisSplit = thisText.split(' ');
        var finishText = '';

        for (var i = 0; i < thisSplit.length; i++) {
            if (i < thisSplit.length - 1) {
                if (i % 2 === 0) {
                    finishText += thisSplit[i] + ' ';
                } else {
                    finishText += thisSplit[i] + ' ' + '<br>';
                }
            } else {
                finishText += thisSplit[i];
            }
        }

        _this.html(finishText);
    });

    // projects category toggle

    var projectsCategoryBtn = $('.projects-category__toggle-btn');
    var projectsCategoryList = $('.projects-category__toggle-list');

    projectsCategoryBtn.on('click', function() {
        var _this = $(this);
        var thisList = _this.parents('.category-item').find(projectsCategoryList);
        if (!thisList.hasClass('is-hide')) {
            _this.text(_this.attr('data-before-action'));
            thisList.addClass('is-hide');
        } else {
            _this.text(_this.attr('data-after-action'));
            thisList.removeClass('is-hide');
        }
    });

    // search header

    if (viewport().width > 1023) {
        var searchIcon = $('.search-icon');
        var thisParent = $('body');
        thisParent.addClass('is-z');
        searchIcon.on('click', function() {
            if (!thisParent.hasClass('is-search')) {
                thisParent.addClass('is-search').removeClass('is-z');
                setTimeout(function() {
                    thisParent.addClass('is-doc');
                }, 450);
            } else {
                thisParent.removeClass('is-search');
                setTimeout(function() {
                    thisParent.addClass('is-z');
                }, 450);
            }
        });

        $(document).on('click', function(e) {
            var div = $('.search-input');
            if (thisParent.hasClass('is-doc')) {
                if (!div.is(e.target) && div.has(e.target).length === 0) {
                    thisParent.removeClass('is-search is-doc');
                    setTimeout(function() {
                        thisParent.addClass('is-z');
                    }, 450);
                }
            }
        });
    }

    // project nav scroll mobile

    if (viewport().width < 481) {
        var projectNavMenuLi = $('.project-nav__menu > ul > li');
        projectNavMenuLi.each(function() {
            var _this = $(this);

            if (_this.hasClass('is-active')) {
                setTimeout(function() {
                    var thisPosition = _this.position().left;
                    _this
                        .parents('.project-nav__scroll')
                        .stop()
                        .animate(
                            {
                                scrollLeft: thisPosition
                            },
                            450
                        );
                }, 450);
            }
        });
    }

    // search clear

    var searchRInput = $('.search-r-input');
    var searchRClear = $('.search-r-clear');
    searchRInput.on('keyup', function() {
        var _this = $(this);
        var thisLength = _this.val().length;
        if (thisLength > 2) {
            _this.parent().addClass('is-clear');
        } else {
            _this.parent().removeClass('is-clear');
        }
    });

    searchRClear.on('click', function() {
        var _this = $(this);
        _this
            .parent()
            .removeClass('is-clear')
            .find(searchRInput)
            .val('');
    });

    // article media

    if (viewport().width > 1023 && $('*').is('.news-project') && $('*').is('.letters-project')) {
        var newsProject = $('.news-project');
        var newsMedia = newsProject.find('.news__media');
        var lettersProject = $('.letters-project');

        var newsMediaHeight = newsMedia.height();
        var lettersProjectOffset = lettersProject.position().top;

        console.log(lettersProjectOffset);

        if (lettersProjectOffset <= newsMediaHeight) {
            lettersProject.css({
                marginTop: newsMediaHeight - lettersProjectOffset + 61
            });
        }
    }

    // tasks more

    const taskProjectMoreBtns = Array.from(document.querySelectorAll('.tasks-project__more'));

    taskProjectMoreBtns.forEach(btn => {
        const parentElement = btn.parentElement;
        const container = parentElement.parentElement;
        const children = Array.from(container.children);
        const btnIndex = children.indexOf(parentElement);
        const btnTextContainer = btn.querySelector('.desc-more span');
        const btnInitialText = btn.getAttribute('data-before-action') || btnTextContainer.textContent;
        const btnNewText = btn.getAttribute('data-after-action') || 'Свернуть обратно';

        let hiddenAccordions = [];

        if (children.length <= 10) {
            parentElement.style.display = 'none';
            return;
        }

        children.forEach((child, index) => {
            if (index > btnIndex) {
                child.classList.add('accordion-hidden');
                hiddenAccordions.push(child);
            }
        });

        btn.addEventListener('click', function(event) {
            event.preventDefault();
            if (parentElement.classList.contains('accordion-btn-active')) {
                hiddenAccordions.forEach(accordion => {
                    closeAccordeon(accordion);
                });
                btnTextContainer.textContent = btnInitialText;
            } else {
                hiddenAccordions.forEach(accordion => {
                    openAccordeon(accordion);
                });
                btnTextContainer.textContent = btnNewText;
            }
            parentElement.classList.toggle('accordion-btn-active');
        });
    });

    // project details

    $(document).on(
        {
            mouseenter: function() {
                var _this = $(this);
                _this.parent().addClass('is-open');
            },

            mouseleave: function() {
                var _this = $(this);
                _this.parent().removeClass('is-open');
            }
        },
        '.item-details .plus-item'
    );

    // tabs

    if ($('*').is('.tabs-project')) {
        $('.tabs-project a:first').tab('show');
        $('.tab-content .tab-pane:eq(0)').addClass('in active');
        $('.tabs-project a').on('show.bs.tab', function(event) {
            var index = $(event.target)
                .parent()
                .index();
            $('.tab-content .tab-pane').removeClass('in active');
            $('.tab-content .tab-pane:eq(' + index + ')').addClass('in active');
        });
    }

    // certificates

    if ($('*').is('.certificates__item')) {
        var certificateItem = $('.certificates__item');
        var certificateItemImg = certificateItem.find('.item-img');
        var certificateItemH = 0;

        $(window).on('load', function() {
            certificateItemImg.each(function() {
                var _this = $(this);
                var thisHeight = _this.height();
                if (thisHeight > certificateItemH) {
                    certificateItemH = thisHeight;
                }
                _this.css({
                    height: certificateItemH
                });
            });
        });
    }

    // projects top slider

    var projectsMainSliders = Array.prototype.slice.call(document.querySelectorAll('.js-projects-main-slider'));

    projectsMainSliders.forEach(function(slider) {
        var mainSliderContainer = slider.querySelector('.projects-main-slider__main .swiper-container');
        var thumbsSliderContainer = slider.querySelector('.projects-main-slider__thumbs .swiper-container');

        var mainSliderOptions = {
            watchOverflow: true,
            navigation: {
                prevEl: slider.querySelector('.projects-main-slider__btn--prev'),
                nextEl: slider.querySelector('.projects-main-slider__btn--next')
            },
            thumbs: {}
        };

        var thumbsSliderOptions = {
            watchOverflow: true,
            slidesPerView: 1,
            spaceBetween: 10,
            threshold: 10,
            watchSlidesVisibility: true,
            breakpoints: {
                512: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40
                },
                1600: {
                    slidesPerView: 5,
                    spaceBetween: 50
                }
            }
        };

        mainSliderOptions.thumbs.swiper = new Swiper(thumbsSliderContainer, thumbsSliderOptions);

        new Swiper(mainSliderContainer, mainSliderOptions);
    });

    // logo slider

    var logoSliders = Array.prototype.slice.call(document.querySelectorAll('.js-logo-slider'));

    logoSliders.forEach(function(slider) {
        var container = slider.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            slidesPerView: 2,
            spaceBetween: 20,
            navigation: {
                prevEl: slider.querySelector('.logo-slider__button--prev'),
                nextEl: slider.querySelector('.logo-slider__button--next')
            },
            breakpoints: {
                600: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50
                },
                1300: {
                    slidesPerView: 6,
                    spaceBetween: 60
                },
                1600: {
                    slidesPerView: 7,
                    spaceBetween: 70
                }
            }
        });
    });

    // show all btns

    var showAllBtns = Array.prototype.slice.call(document.querySelectorAll('.js-show-all'));

    function openAccordeon(element) {
        element.style.maxHeight = 'none';
        // element.style.overflow = 'visible';
        const computedStyle = getComputedStyle(element);
        const computedHeight = computedStyle.height;

        element.style.maxHeight = '';
        // element.style.overflow = '';

        setTimeout(() => {
            const transitionEndHandler = () => {
                console.log('Tranisitionnd Initiated');
                element.style.maxHeight = 'none';
                element.removeEventListener('transitionend', transitionEndHandler);
            };
            element.addEventListener('transitionend', transitionEndHandler);
            element.style.maxHeight = `${computedHeight}`;
        }, 20);
    }

    function closeAccordeon(element) {
        const computedStyle = getComputedStyle(element);
        const computedHeight = computedStyle.height;

        element.style.maxHeight = `${computedHeight}`;

        setTimeout(() => {
            element.style.maxHeight = '';
            // element.style.overflow = '';
        }, 20);
    }

    showAllBtns.forEach(btn => {
        const btnInitialText = btn.textContent;
        const btnNewText = 'Свернуть';
        btn.addEventListener('click', function(event) {
            event.preventDefault();
            const container = btn.closest('.type-project__info');
            if (!container) return;
            const content = container.querySelector('.show-all-hidden-content');

            if (btn.classList.contains('active')) {
                closeAccordeon(content);
                btn.textContent = btnInitialText;
            } else {
                openAccordeon(content);
                btn.textContent = btnNewText;
            }

            btn.classList.toggle('active');
        });
    });

    // tabs with icons

    const tabsWithIcons = Array.from(document.querySelectorAll('.tabs-with-icons__tabs'));

    tabsWithIcons.forEach(tab => {
        const controls = Array.from(tab.querySelectorAll(':scope .tabs-with-icons__tabs-navigation a'));
        const tabItems = Array.from(tab.querySelectorAll(':scope .tabs-with-icons__items .tabs-with-icons__item'));
        console.log(controls);
        controls[0].classList.add('active');
        tabItems[0].classList.add('active');

        controls.forEach((btn, index) => {
            btn.addEventListener('click', function(event) {
                event.preventDefault();
                controls.forEach(item => item.classList.remove('active'));
                tabItems.forEach(item => item.classList.remove('active'));

                controls[index].classList.add('active');
                tabItems[index].classList.add('active');
            });
        });
    });

    // Accordions

    const accordionBtns = Array.from(document.querySelectorAll('.accordions__open-btn'));

    accordionBtns.forEach(element => {
        element.addEventListener('click', function(event) {
            event.preventDefault();

            const content = element.nextElementSibling;

            console.log(content);

            if (!content) return;

            if (element.classList.contains('active')) {
                closeAccordeon(content);
            } else {
                openAccordeon(content);
            }

            element.classList.toggle('active');
        });
    });

    // Experience slider

    if (!document.body.classList.contains('is-admin')) {
        const experienceSliders = Array.from(document.querySelectorAll('.js-experience-slider'));

        experienceSliders.forEach(slider => {
            const container = slider.querySelector('.swiper-container');

            new Swiper(container, {
                watchOverflow: true,
                slidesPerView: 1,
                spaceBetween: 10,
                autoplay: true,
                loop: true,
                navigation: {
                    prevEl: slider.querySelector('.projects-main-slider__btn--prev'),
                    nextEl: slider.querySelector('.projects-main-slider__btn--next')
                },
                breakpoints: {
                    512: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                    1600: {
                        slidesPerView: 5,
                        spaceBetween: 50
                    }
                }
            });
        });
    }

    // Scroll to slider

    const competNav = Array.from(document.querySelectorAll('.competencies-nav__column'));
    const competFor = document.querySelector('.competencies-nav-wrapper');
    if (competFor) {
        competNav.forEach(nav => {
            nav.addEventListener('click', function(event) {
                competFor.scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    // Project gallery slider

    const projectGallerySlider = Array.from(document.querySelectorAll('.js-project-gallery-slider'));

    projectGallerySlider.forEach(slider => {
        const container = slider.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            slidesPerView: 'auto',
            spaceBetween: 10,
            navigation: {
                nextEl: slider.querySelector('.project-gallery__slider-arrow--next'),
                prevEl: slider.querySelector('.project-gallery__slider-arrow--prev')
            },
            breakpoints: {
                601: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 30
                }
            }
        });
    });

    
});




document.addEventListener('DOMContentLoaded', function() {
    // Terminal slider

    const terminalSliders = Array.from(document.querySelectorAll('.js-terminal-slider'));

    terminalSliders.forEach(slider => {
        const container = slider.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 3,
            spaceBetween: 20,
            watchOverflow: true,
            navigation: {
                nextEl: slider.querySelector('.project-gallery__slider-arrow--next'),
                prevEl: slider.querySelector('.project-gallery__slider-arrow--prev')
            },
            breakpoints: {
                601: {
                    slidesPerView: 4,
                },
                768: {
                    slidesPerView: 5
                },
                1024: {
                    slidesPerView: 7
                }
            }
        })
    })
})
