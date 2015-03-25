(function ($) {
    $('[data-toggle="switch-checkbox"]').each(function () {
        $(this).bootstrapSwitch({
            offColor: 'danger'
        });
    });
})(jQuery);