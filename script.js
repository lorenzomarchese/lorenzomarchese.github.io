var n = 1;
var animation = [".vline",".hline",".nefade",".hfade",".boxpulse",".neline",".wave",".reversewave",".vfade",".pulse"];
var timer;
//Crea i 100 div
$(document).ready(function(){
  for (var i = 1; i <= 100; i++) {
    $('.grid').append("<div class='cell'/>");
  };
});
//Rimuove l'animazione e prepara la griglia per la partita cliccando su "NEW GAME"
counter = 0;
$(document).ready(function(){
  $('#newgame').click(function(){
    $('.grid').removeClass('wave');
    $('.cell').css({"background-color":"rgba(255,255,255,0.7)"}).css({"margin-top":"2px"}).empty();
    $('.cell').removeClass('clicked');
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
var cellColor = $('.cell').css('background-color');
$(document).ready(function(){
  $('.cell').click(function(){
    cellId = $(this).attr('id');
    cellClass = $(this).attr('class');
    if(cellClass.search("clicked") == -1){
      var x = getX(cellId);
      var y = getY(cellId);
      if ($('#'+cellId).css('background-color') == "rgb(118, 233, 153)" || counter == 0) {
        allowed(x,y);
        counter++;
        $('#'+cellId).html(''+counter).removeAttr('id').addClass('clicked');
      }else if ($('#'+cellId).css('background-color') == "rgba(255, 255, 255, 0.7)"){
        allowed(x,y);
        counter++;
        $('#'+cellId).html(''+counter).removeAttr('id').addClass('clicked');
      }else{

      }
      endGame();
    }
  });
});

$(document).ready(function(){
  $('#endnewgame').click(function(){
    $('#endgame').fadeOut('fast');
    $('.cell').fadeIn('slow');
    $('#newgame').click();
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
  $('.cell').css({"background-color":"rgba(255,255,255,0.7)"});
  $('#div'+(y+3)+""+x).css({"background-color":"rgb(118,233,153)"});
  $('#div'+(y-3)+""+x).css({"background-color":"rgb(118,233,153)"});
  $('#div'+y+""+(x+3)).css({"background-color":"rgb(118,233,153)"});
  $('#div'+y+""+(x-3)).css({"background-color":"rgb(118,233,153)"});
  $('#div'+(y+2)+""+(x+2)).css({"background-color":"rgb(118,233,153)"});
  $('#div'+(y+2)+""+(x-2)).css({"background-color":"rgb(118,233,153)"});
  $('#div'+(y-2)+""+(x+2)).css({"background-color":"rgb(118,233,153)"});
  $('#div'+(y-2)+""+(x-2)).css({"background-color":"rgb(118,233,153)"});
}

function endGame(){
  if(counter == 100){
      $('.cell').fadeOut('slow');
      $('.endtext').empty().append('YOU<br>WON!!');
      $('#endgame').fadeIn('slow');
  }
  if($('.cell').css('background-color') == "rgba(255, 255, 255, 0.7)" && counter < 100){
    $('.cell').fadeOut('slow');
    $('.endtext').empty().append('GAME<br>OVER!!');
    $('#endgame').fadeIn('slow');
  }

}

$(document).ready(function(){
  $('a[href*=#]').click(function() {
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

