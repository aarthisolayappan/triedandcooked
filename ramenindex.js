
$(document).ready(function(){
    $(".image-container").children().draggable();({
    })

    $(document).ready(function(){
      $(".title1").on('click',function(){
          $(this).parent().find(".descriptionm").toggleClass("active");
          $(this).parent().find(".title1").toggleClass("title1c");
      });
      

      $('h1').hover(function(){
        $('h1').toggleClass("rh1");
      })

      $("#memory").click(function(){
        scrollTo(0,5242)

      })


    const mQuery = window.matchMedia('(max-width: 414px)')
    if (mQuery.matches) { 
      console.log('Media query matched!') 
      setInterval(function (){
        if(mQuery.matches){
        $('h1').toggleClass("mh1");}
          },1000
      
        )}
    
    })

  })

    // $(".title1").on('click',function(){
    //   $(".ingred").delay(1000).fadeToggle(0);
    //   $(".ingred1").delay(2000).fadeToggle(0);
    //   $(".ingred2").delay(3000).fadeToggle(0);
    //   $(".ingred3").delay(4000).fadeToggle(0);
    //   $(".ingred4").delay(5000).fadeToggle(0);
    //   $(".ingred5").delay(6000).fadeToggle(0);
    //   $(".ingred6").delay(7000).fadeToggle(0);
    // });




//     $(".menu3").children().draggable();

//     $("#menuitem6").click(function(){
//         scrollTo(0,5000)
//     })

    
// });
// $( ".menu3" ).children().draggable();

//     $("#menuitem1").click(function(){
//         $("#container1").html("<p>this is a paragraph element now</p>");
//     })

//     $("#menuitem2").click(function(){
//         $("#container1").text("this is the text method")
//     })

//     $("#menuitem3").click(function(){
//         $("#container1").append("this is the text method")
//     })

//     $(".menu2").children().click(function(){

//         $(this).toggleClass("menuitems")
//         $(this).toggleClass("menuitems2")
//         $("#container2").slideToggle();
//         $("#container2").animate({
//           opacity: '0.2',
//           height: '60%',
//           width: '60%',},2000,function(){
//             alert("The paragraph is now hidden");
//         });
        
//     })

//     $("#menuitem6").click(function(){
//         console.log("menuitem6clicked")
//         scrollTo(0,5000)

//     })

//       $(".menu2").children().click(function(){
//         console.log("click")
//         $(this).toggleClass("menuitems")
//         $(this).toggleClass("menuitems2")
//         console.log("click")
//         $("#container2").slideToggle(1000, "swing");
//         $("#container2").fadeToggle();
//         $("#container2").animate({
//           opacity: '0.2',
//           height: '60%',
//           width: '60%',},2000,function(){
//             // alert("The paragraph is now hidden");
//         });
//         })
//       $("#menuitem6").click(function(){
//           scrollTo(0,5000)
//       })

//       $( ".menu3" ).children().draggable();

//         $("#menuitem1").click(function(){
//           $("#container1").html("<p>hello this is an html<br>paragraph element</p>");
//       })

//     $("#menuitem2").click(function(){
//         $("#container1").append("this is append");
//     })

//     $("#menuitem3").click(function(){
//       $("#container1").text("this is text");
//     })


