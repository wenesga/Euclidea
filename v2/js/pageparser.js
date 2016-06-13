(function ($) {
    'use strict';
    var conf = window.conf = window.conf || {};
    var $menu = $('nav.menu'),
        $menuList = $('.menu-list', $menu),
        $menuSwitch = $('.menu-switch', $menu),
        $close = $('button.close', $menuList);

    $close.on('click', function () {
        $menuSwitch.removeClass('hide fadeout');
        $menuList.addClass('fadeout');
    });

    $menuSwitch.on('click', function () {
        $menuList.removeClass('hide fadeout');
        $menu.removeAttr('style');
        $menuSwitch.addClass('fadeout');
    });

    $menuList.on("transitionend", function () {
        if ($menuList.hasClass('fadeout')) {
            $menuList.addClass('hide');
            $menu.css('top', -1000);
        }
    });

    $menuSwitch.on("transitionend", function () {
        if ($menuSwitch.hasClass('fadeout')) {
            $menuSwitch.addClass('hide');
        }
    });

}(jQuery));

