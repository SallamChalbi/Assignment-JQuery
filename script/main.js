// nav

$('header span').click(function(){
    $(".sidenav").animate({ width:'250px'},500)
   $(".header-content").animate({marginLeft :'250px'},500)
})

$(".closebtn").click(function(){
    $(".sidenav").animate({ width:'0px'},500)
   $(".header-content").animate({marginLeft :'0px'},500)
})

$(".sidenav a").click(function(){
    
    var sectionId= $(this).attr("href");
    var positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},1000);
    
})

// sliderDown

$('#sliderDown h3').click(function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500)
})

// count

window.onload = function() {
    countDownToTime("10 october 2023 9:56:00");
}

function countDownToTime(countTo) {
    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);
    let timeDifference = (futureDate- now);
        
    let days = Math.floor( timeDifference / (24*60*60));
    let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
    let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

    setInterval(function() {  countDownToTime(countTo); }, 1000);
}


/*textarea*/

var maxLength = 100;
$('textarea').keyup(function() {
    var length = $(this).val().length;
    var AmountLeft = maxLength-length;

    if(AmountLeft<=0){
         $("#chars").text("your available character finished");
    }
    else{
        $("#chars").text(AmountLeft);
    }
});
