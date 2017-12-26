/*!
* Version: 1.0
* @Author: Andres Morelos
* @Date: 23/12/2017
* @Email: andresmorelos123@gmail.com
*/

import "jquery";
import "bootstrap";
const Parallax = require('parallax-js');


$(document).ready(function(){
  let parallax_scene = document.getElementById('parallax');
  let parallax = new Parallax(parallax_scene);

  $('a[href^="#"]').on('click', function(event) {
    let target = $( $(this).attr('href') );
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
    }

  });
});
