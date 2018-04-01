'use strict';

/**
 * Responsive navigation with a suggestive pointer
 *
 * TODO: Fix bug where resizing below and above 768px wide
 *       causes the feature button and pointer to animate
 */
(function ($) {
    var nav = $('nav'),
        menu = nav.find('.navigation'),
        active = menu.find('li.active'),
        items = menu.find('li').not('.pointer'),
        pointer = nav.find('.pointer');

    /**
     * Center the pointer vertically or horizontally based on the screen width
     *
     * @param   a     jQuery Object   The active menu item
     */
    var centralize = function centralize(a) {
        if ($(window).innerWidth() > 768) {
            return 'translate3d(' + (a.position().left + a.outerWidth() / 2) + 'px, 0, 0) rotate(45deg)';
        } else {
            return 'translate3d(0, ' + (a.position().top + a.outerHeight() / 2) + 'px, 0) rotate(45deg)';
        }
    };

    if ($(window).innerWidth() > 768) {
        nav.find('#mobile-nav-check').attr('tab-index', '-1');
    } else {
        nav.find('#mobile-nav-check').removeAttr('tab-index');
    }

    /**
     * Center the pointer and reveal it on load
     */
    pointer.css({
        display: 'block',
        transform: centralize(active)
    });

    /**
     * Center the pointer on resizing the screen
     */
    $(window).on('resize', function () {
        if ($(window).innerWidth() > 768) {
            nav.find('#mobile-nav-check').attr('tab-index', '-1');
        } else {
            nav.find('#mobile-nav-check').removeAttr('tab-index');
        }

        pointer.css({
            transform: centralize(menu.find('li.active'))
        });
    });

    /**
     * Add the active class on click
     *
     * Note: only really useful if the a tags dont go anywhere
     */
    items.on('click', function () {
        items.removeClass('active');
        $(this).addClass('active').find('a').blur();
    });

    /**
     * Center the pointer on hovering over a nav item
     */
    items.on('mouseover', function () {
        pointer.css({
            transform: centralize($(this))
        });
    });

    /**
     * Center the pointer on the active nav item when
     * hovered out of a nav-item
     */
    items.on('mouseout', function () {
        pointer.css({
            transform: centralize(menu.find('li.active'))
        });
    });

    /**
     * Center the pointer on tabbing or focussing
     * a nav item
     */
    items.find('a').focus(function () {
        pointer.css({
            transform: centralize($(this).parent())
        });
    });

    /**
     * Center the pointer on the active nav item when
     * nav-item is unfocussed
     */
    items.find('a').blur(function () {
        pointer.css({
            transform: centralize(menu.find('li.active'))
        });
    });
})(jQuery);