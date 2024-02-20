$(document).ready(function () {
    var $menuBtn = $('.btn-menu');
    var $sidebar = $('#sidebar');
    var $sidebarColumn = $('.col-md-3');

    $menuBtn.click(function () {
        $sidebar.toggleClass('active');
        $sidebarColumn.toggleClass('d-none');
    });
});
