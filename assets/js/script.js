$l.ready(function() {
    var bodyJqueryWrapper = $(document.body);
    var pageElement = $l('#page');
    var sidebarElement = $l('#sidebar');
    var sidebarStatus = false;

    $l.dom.setEvent(
        $l(['.xscroll-link']),
        'click',
        function(ev, elem) {
            var targetElement = $l(elem.getAttribute('href'));
            var targetPosition = targetElement.getBoundingClientRect();

            bodyJqueryWrapper.animate(
                { scrollTop: targetPosition.top + document.body.scrollTop },
                500
            );

            return false;
        }
    );

    $l.dom.setEvent(
        $l(['.sidebar-toggle-link']),
        'click',
        function(ev, elem) {
            if (!sidebarStatus) {
                sidebarStatus = true;
                $l.css.addClass(pageElement, 'with-sidebar');
                $l.css.addClass(sidebarElement, 'visible');
            } else {
                sidebarStatus = false;
                $l.css.removeClass(pageElement, 'with-sidebar');
                $l.css.removeClass(sidebarElement, 'visible');
            }
        }
    );

    $('#p-filter a').click(function() {
        var that = $(this);
        $('#p-filter a.btn-act').removeClass('btn-act');
        that.addClass('btn-act');

        var p_filter = that.attr('rel');

        $('.p-item').each(function() {
            var that2 = $(this);

            var p_property = that2.attr('rel');
            if (p_property == p_filter && p_filter != 'all') {
                that2.fadeTo(300, 1);
                $('img', this).fadeTo(300, 1);
                that2.removeClass('item-off');
            } else if (p_filter != 'all') {
                that2.fadeTo(300, 0.3);
                $('img', this).fadeTo(300, 0.2);
                that2.addClass('item-off');
            } else {
                that2.fadeTo(300, 1);
                $('img', this).fadeTo(300, 1);
                that2.removeClass('item-off');
            }
        });
        
        return false;
    });

    $('.showmore').click(function() {
        var that = $(this);
        
        $('.' + that.attr('rel')).fadeIn();
        that.parent().remove();
    });
});
