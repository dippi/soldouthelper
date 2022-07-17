/*

=========================================================
* Swipe - Mobile App One Page Bootstrap 5 Template
=========================================================

* Product Page: https://themesberg.com/product/bootstrap/swipe-free-mobile-app-one-page-bootstrap-5-template
* Copyright 2019 Themesberg (https://www.themesberg.com)

* Coded by https://themesberg.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. Contact us if you want to remove it.

*/

"use strict";
const d = document;
d.addEventListener("DOMContentLoaded", function(event) {

    if (d.querySelector('.headroom')) {
        var headroom = new Headroom(document.querySelector("#navbar-main"), {
            offset: 0,
            tolerance: {
                up: 0,
                down: 0
            },
        });
        headroom.init();
    }

    // Tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // Popovers
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
    })

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        speedAsDuration: true
    });

    d.querySelector('.current-year').textContent = new Date().getFullYear();


    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    
});


hljs.initLineNumbersOnLoad({
    singleLine: true
});


function copyTextFromElement(elementID) {
    let element = document.getElementById(elementID); //select the element
    let elementText = element.innerText.replace(/\n\n/g,"\n"); //get the text content from the element
    copyText(elementText); //use the copyText function below
  }
  
  //If you only want to put some Text in the Clipboard just use this function
  // and pass the string to copied as the argument.
  function copyText(text) {
    navigator.clipboard.writeText(text);
  }




//  function clickAlert() {
 //   alert("Alert!")};


 $('#notification-box').hide();

$('body').on("click", "#button_bash", function(){
	  $('#notification-box').append('<p>Copied</p>').show().fadeTo(1000, 1, function(){
        $('#notification-box, #notification-box p').hide().fadeTo(1000, 0);
    });
});

$('body').on("click", "#button_java", function(){
    $('#notification-box').append('<p>Copied</p>').show().fadeTo(1000, 1, function(){
      $('#notification-box, #notification-box p').hide().fadeTo(1000, 0);
  });
});

$('body').on("click", "#button_python", function(){
    $('#notification-box').append('<p>Copied</p>').show().fadeTo(1000, 1, function(){
      $('#notification-box, #notification-box p').hide().fadeTo(1000, 0);
  });
});

$('body').on("click", "#button_js", function(){
    $('#notification-box').append('<p>Copied</p>').show().fadeTo(1000, 1, function(){
      $('#notification-box, #notification-box p').hide().fadeTo(1000, 0);
  });
});



$('body').on("click", "#button_codeCardSnippet", function(){
  $('#notification-box').append('<p>Copied</p>').show().fadeTo(1000, 1, function(){
    $('#notification-box, #notification-box p').hide().fadeTo(1000, 0);
});
});

$('body').on("click", "#button_codeLetterSnippet", function(){
  $('#notification-box').append('<p>Copied</p>').show().fadeTo(1000, 1, function(){
    $('#notification-box, #notification-box p').hide().fadeTo(1000, 0);
});
});

$('body').on("click", "#button_codeResumeSnippet", function(){
  $('#notification-box').append('<p>Copied</p>').show().fadeTo(1000, 1, function(){
    $('#notification-box, #notification-box p').hide().fadeTo(1000, 0);
});
});

$('body').on("click", "#button_codeResume2Snippet", function(){
  $('#notification-box').append('<p>Copied</p>').show().fadeTo(1000, 1, function(){
    $('#notification-box, #notification-box p').hide().fadeTo(1000, 0);
});
});

$('body').on("click", "#button_codeReportSnippet", function(){
  $('#notification-box').append('<p>Copied</p>').show().fadeTo(1000, 1, function(){
    $('#notification-box, #notification-box p').hide().fadeTo(1000, 0);
});
});

$('body').on("click", "#button_codeInvoiceSnippet", function(){
  $('#notification-box').append('<p>Copied</p>').show().fadeTo(1000, 1, function(){
    $('#notification-box, #notification-box p').hide().fadeTo(1000, 0);
});
});

//  ATTRIBUTIONS
function ShowAndHide() {
    var x = document.getElementById('contentinfo1');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}



