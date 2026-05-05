/* ============================================================
   ASLWM Project Page — JavaScript
   ============================================================ */

$(document).ready(function () {
    'use strict';

    // --- BibTeX Copy to Clipboard ---
    var clipboard = new Clipboard('#copyBibtex');
    clipboard.on('success', function (e) {
        var btn = $('#copyBibtex');
        btn.text('Copied!');
        btn.removeClass('btn-outline-secondary').addClass('btn-success');
        setTimeout(function () {
            btn.text('Copy');
            btn.removeClass('btn-success').addClass('btn-outline-secondary');
        }, 2000);
        e.clearSelection();
    });

    clipboard.on('error', function () {
        var btn = $('#copyBibtex');
        btn.text('Press Ctrl+C');
        btn.removeClass('btn-outline-secondary').addClass('btn-danger');
        setTimeout(function () {
            btn.text('Copy');
            btn.removeClass('btn-danger').addClass('btn-outline-secondary');
        }, 2000);
    });

    // --- Back to Top Button ---
    var $backToTop = $('#backToTop');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $backToTop.removeClass('d-none').addClass('fade-in');
        } else {
            $backToTop.addClass('d-none').removeClass('fade-in');
        }
    });

    $backToTop.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 400);
        return false;
    });

    // --- Smooth Scroll for Anchor Links ---
    $('a[href^="#"]').on('click', function (e) {
        var target = $($(this).attr('href'));
        if (target.length) {
            e.preventDefault();
            var offset = target.offset().top - 70; // navbar offset
            $('html, body').animate({ scrollTop: offset }, 500);
        }
    });

    // --- Video Lazy Loading: play on hover, pause on leave ---
    $('video').each(function () {
        var vid = this;
        $(vid).parent().hover(
            function () {
                vid.play().catch(function () { /* autoplay blocked, ignore */ });
            },
            function () {
                vid.pause();
            }
        );
    });

    // --- Navbar Active State on Scroll ---
    var sections = [];
    $('.section-heading').each(function () {
        var id = $(this).closest('[id]').attr('id');
        if (id) {
            sections.push(id);
        }
    });

    $(window).on('scroll', function () {
        var scrollPos = $(this).scrollTop() + 100;
        var currentSection = '';
        sections.forEach(function (id) {
            var el = $('#' + id);
            if (el.length && el.offset().top <= scrollPos) {
                currentSection = id;
            }
        });
        $('.nav-link').removeClass('active');
        $('.nav-link[href="#' + currentSection + '"]').addClass('active');
    });
});
