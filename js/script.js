var n = 1;
var animation = [".vline",".hline",".nefade",".hfade",".boxpulse",".neline",".wave",".reversewave",".vfade",".pulse"];
var timer;
//Crea i 100 div
$(document).ready(function(){
  for (var i = 1; i <= 100; i++) {
    $('.grid').append("<div class='cell'/>");
  };
  counter = 0;
});

//Rimuove l'animazione e prepara la griglia per la partita cliccando su "NEW GAME"
counter = 0;
$(document).ready(function(){
  $('#newgame').on('click', function(){
    $('.cell').removeClass('clicked green').empty();
    $('.cell').removeClass('clicked green');
    $(".cell").each(function(n, div) {
      div.id = "div" + (n); //n starts at 1
      if(n<10){
        div.id = "div" +"0"+(n);
      }
    });
    counter = 0;
  });
});

var cellId, cellClass;
$(document).on('click', '.cell', function(){
  cellId = $(this).attr('id');
  cellClass = $(this).attr('class');
  if(cellClass.search("clicked") == -1){
    var x = getX(cellId);
    var y = getY(cellId);
    //if ($('#'+cellId).css('background-color') == "rgb(118, 233, 153)" || counter == 0) {
    if ($('#'+cellId).hasClass("green") || counter == 0) {
      allowed(x,y);
      counter++;
      $('#'+cellId).html(''+counter).removeAttr('id').addClass('clicked');
    }else{

    }
    endGame();
  }
});

$(document).ready(function(){
  $('#endnewgame').on('click', function(){
    $('#endgame').fadeOut('fast');
    $('#newgame').click();
  });

  $('#examplegif').on('click', function(){
    $('#gif').slideToggle(500);
  });
});

function getY(s){
  var l = s.charAt(s.length - 2);
  var y = parseInt(l);
  if (s.length == 4) {
    return 0;
  }else{
    return y;
  }
}

function getX(s){
  var l = s.charAt(s.length - 1);
  var x = parseInt(l);
  if (s.length == 4) {
   return parseInt(l);
  }else{
    return x;
  }
}
function allowed(x,y){
  $('.cell').removeClass('green');
  $('#div'+(y+3)+""+x).addClass('green');
  $('#div'+(y-3)+""+x).addClass('green');
  $('#div'+y+""+(x+3)).addClass('green');
  $('#div'+y+""+(x-3)).addClass('green');
  $('#div'+(y+2)+""+(x+2)).addClass('green');
  $('#div'+(y+2)+""+(x-2)).addClass('green');
  $('#div'+(y-2)+""+(x+2)).addClass('green');
  $('#div'+(y-2)+""+(x-2)).addClass('green');
}

function endGame(){
  if(counter == 100){
      $('.cell').removeClass('green');
      $('.endtext').empty().append('YOU<br>WON!!');
      $('#endgame').fadeIn('slow');
      $('.endscore').hide();
  }
  if($('.cell').hasClass('green') == false && counter < 100){
    $('.endtext').empty().append('GAME<br>OVER!!');
    $('.endscore').show().empty().append('SCORE: '+counter);
    $('#endgame').fadeIn('slow');
  }

}

$(document).ready(function(){
  $('a[href*="#"]').on('click', function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
  && location.hostname == this.hostname) {
  var $target = $(this.hash);
  $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
  if ($target.length) {
  var targetOffset = $target.offset().top;
  $('html,body').animate({scrollTop: targetOffset}, 1000);
  return false;}
  }
 });
});
