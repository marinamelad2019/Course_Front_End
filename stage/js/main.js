
$(function () {
    'use strict'
    $(".toggle-sidebar").on('click', function () {
        // Add class no-sidebar to class ( content-area , sidebar) if not found and
        // remove class no-sidebar from class ( content-area , sidebar) if found 
        $(".content-area , .sidebar").toggleClass("no-sidebar");
    });

});