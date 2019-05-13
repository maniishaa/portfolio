var tutorage= "tutorage.jpg";
var shadow="shadow.png";
var logoo = "logoo.png";
var photolio= "photolio.jpg";
var profile= "profile.png";
var portfolio = "portfolio.jpg";
var pro= "pro.png";
var tutorage= "tutorage.jpg";
var logoo= "logoo.png";
var home= "home.png";
var portfolio= "portfolio.jpg";
var photolio= "photolio.jpg";
var images1 = [tutorage,shadow,logoo,photolio,home,pro];
var images= [shadow,profile,portfolio,shadow,logoo,tutorage];
var images2=[pro,tutorage,logoo,home,portfolio,photolio];
var images3=[home,portfolio,photolio,tutorage,shadow,logoo];

// var images=document.getElementById("demo");
// hhh
 // shuffleInstance.filter(['tutoragee', 'pro']);

// hhh
     
    function html() {
      $("#display").remove();
      $("#images").append("<div id='display' class='text-center'></div>");
     // document.getElementById('display').innerHTML = "";
      $(".menu-item1").addClass("selected");
      for(var i= 0;i< images.length;i++) {
        var img = document.createElement('img');
        //img.src = images[i];
        // img.setAttribute('src', 'imag.png');
        // document.getElementById('display').append(img);
        $('<img />')
                        .attr('src', "" + images[i]+ "")         // ADD IMAGE PROPERTIES.
                            .attr('title', "title")
                            .attr('alt', "alt")
                            .attr('class','img-marg')
                            .width('390px').height('507px')

                        .appendTo($('#display'));
                      
                         images.sort();
  // Then reverse it:
  images.reverse();
  document.getElementById("demo").innerHTML = images;
      }
      
    }

function css() {
     // document.getElementById('display').innerHTML = "";
     $("#display").remove();
     $("#images").append("<div id='display' class='text-center'></div>");
      var img1= document.createElement('img');
      for( var i = 0; i < images1.length ; i++ ) {
          //img1.src = images1[i];
        //   img1.setAttribute('src', 'imag.png');
        //   img1.setAttribute('width', '50px');
        //   img1.setAttribute('height', '50px');
        // document.getElementById('display').appendTo(img1);
        $('<img />')
                        .attr('src', " " + images1[i]+ "")         // ADD IMAGE PROPERTIES.
                            .attr('title', "title")
                            .attr('alt', "alt")
                            .attr('class','img-marg')
                            .width('390px').height('507px')

                        .appendTo($('#display'));
                             images1.sort();
  // Then reverse it:
  images1.reverse();
  document.getElementById("demo").innerHTML = images1;
      }
      
    }
    function bootstrap() {
      $("#display").remove();
      $("#images").append("<div id='display' class='text-center'></div>");
     // document.getElementById('display').innerHTML = "";
      var img2 = document.createElement('img');
      for( var i = 0; i < images2.length ; i++ ) {
        // img2.src = images2[i];
        // img2.setAttribute('src', 'imag.png');
        // document.getElementById('display').append(img2);
        $('<img />')
                        .attr('src', "" + images2[i]+ "")         // ADD IMAGE PROPERTIES.
                            .attr('title', "title")
                            .attr('alt', "alt")
                            .attr('class','img-marg')
                            .width('390px').height('507px')

                        .appendTo($('#display'));
                          images2.sort();
  // Then reverse it:
  images2.reverse();
  document.getElementById("demo").innerHTML = images2;
      }
      
    }
    function javascript() {
      $("#display").remove();
      $("#images").append("<div id='display' class='text-center'></div>");
     // document.getElementById('display').innerHTML = "";
      var img3 = document.createElement('img');
      for( var i = 0; i < images3.length ; i++ ) {
        //  img3.src = images3[i];
        // img3.setAttribute('src', 'imag.png');
        // document.getElementById('display').append(img3);
        $('<img/>')
                        .attr('src', "" + images3[i]+ "")         // ADD IMAGE PROPERTIES.
                            .attr('title', "title")
                            .attr('alt', "alt")
                            .attr('class','img-marg')
                            .width('390px').height('507px')

                        .appendTo($('#display'));
      }
      
    }
 
   
    // downloadbtn
//    $(document).ready(function() {
//   $('.btn').mouseenter(function() {
//     $('.btn').animate({
//     'marginLeft' : "-=30px" //moves left
//     });
//   });
// });
   // gh
   $(document).ready(function(){
  $(".btn").mouseenter(function(){
    $("btn").animate({left: '250px'});
  });
  html();
});
   //downloadbtn
//    // loader
//    var progressBarOptions = {
//   startAngle: -1.55,
//   size: 200,
//     value: 0.75,
//     fill: {
//     color: '#ffa500'
//   }
// }

// $('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
//   //$(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
// });

// $('#circle-b').circleProgress({
//   value : 0.25,
//   fill: {
//     color: '#FF0000'
//   }
// });

// $('#circle-c').circleProgress({
//   value : 0.92,
//   fill: {
//     color: '#008000'
//   }
// });
// // gthy
//  var ctx   = document.getElementById("my_canvas").getContext('2d'),
//     al    = 0,
//     start = 4.72,
//     des   = 80,
//     cw    = ctx.canvas.width,
//     ch    = ctx.canvas.height,
//     diff;
// function progressSim() {
//   diff = ((al / 100) * Math.PI*2*10 ).toFixed(2);
//   ctx.clearRect(0, 0, cw, ch);
//   ctx.lineWidth = 8;
//   ctx.fillStyle = "#FFA600";  
//   ctx.strokeStyle = "#FFA600";
//   ctx.textAlign = "center";
//   ctx.fillText(al + "%", cw*0.5, ch*0.5+2, cw);
//   ctx.beginPath();
//   ctx.arc(35, 35, 30, start, diff/10+start, false);
//   ctx.stroke();
//   if(al >= des) {
//     clearTimeOut(sim);
//   }
//   al++;
// }
// //progressSimm();
//     var sim   = setInterval(progressSim, 50);
//     progressSim();
    // dummy
  window.onload = function onLoad() {
  var progressBar = 
    new ProgressBar.Circle('#progress', {
      color: '#ffa804',
      strokeWidth:3,
      duration: 2000, // milliseconds
      easing: 'easeInOut'
    });

  var progressBar2 = 
    new ProgressBar.Circle('#pro', {
      color: '#ffa804',
      strokeWidth: 3,
      duration: 2000, // milliseconds
      easing: 'easeInOut'
    });
     var progressBar3 = 
    new ProgressBar.Circle('#pr', {
      color: '#ffa804',
      width:'100%',
      strokeWidth: 3,
      duration: 2000, // milliseconds
      easing: 'easeInOut'
    });
     var progressBar4 = 
    new ProgressBar.Circle('#p', {
      color: '#ffa804',
      strokeWidth: 3,

      duration: 2000, // milliseconds
      easing: 'easeInOut'
    });

  progressBar4.animate(0.63); // percent
  progressBar3.animate(0.63); // percent
   progressBar2.animate(0.63); // percent
    progressBar.animate(0.63); // percent
};
// shuffle
$(document).ready(function(){

    $(".filter-li").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-li").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});
