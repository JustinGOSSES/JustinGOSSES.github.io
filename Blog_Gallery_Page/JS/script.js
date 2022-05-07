

// $(document).ready(function(){
// 	function mouseEnterStrengths() {
// 		$(this).css("display: inline")
// 		$("div.floatAboveLandingBox p#Intro").css("display:none")
// 	}
// 	function mouseLeaveStrengths() {
// 		$(this).css("display: none")
// 		$("div.floatAboveLandingBox p#Intro").css("display:inline")
// 	}
//     $("div.floatAboveLandingBox div.strengths h3").mouseenter(mouseEnterStrengths()).mouseleave(mouseLeaveStrengths());

//     })


$(document).ready(function(){
    $("div.floatAboveLandingBox div.strengths").mouseenter(function(){
    		$("div.floatAboveLandingBox p#Intro").stop(true).fadeOut(700).css("display","none")
             var classNameStrengths = $(this).attr('id')
             $(this).addClass("strengthsBold")
             $("div.floatAboveLandingBox p#"+classNameStrengths).stop(true).fadeIn(1000).css("display", "inline");
    		console.log("moused over strengths "+classNameStrengths)
    }).mouseleave(function(){
    	 var classNameStrengths = $(this).attr('id');  
        $(this).removeClass("strengthsBold")
        $("div.floatAboveLandingBox p#"+classNameStrengths).stop(true).fadeOut(7000).css("display", "none");
    	$("div.floatAboveLandingBox p#Intro").stop(true).fadeIn(1000).css("display","inline")
    	console.log("mouse left strengths")
    });

    })

$(document).ready(function(){
    $("div.moveBox").mouseenter(function(){
            $(this).addClass("moveBoxHighlight")
            console.log("mouse over moveBOx")
    }).mouseleave(function(){

        $(this).removeClass("moveBoxHighlight")
        console.log("mouse leaves moveBOx")
       
    });

    })



// $(document).ready(function(){
//     $("div.floatAboveLandingBox div.strengths h3").mouseenter(function(){
//     		$("div.floatAboveLandingBox p#Intro").css("display","none")
//              var classNameStrengths = $(this).attr('class').split(' ')[1];
//              $("div.floatAboveLandingBox p#Increase_Discovery").css("display", "inline");
//     		var innerHTMLhere = $(this).html()
//     		console.log("moused over strengths "+innerHTMLhere)
//     }).mouseleave(function(){
//     	 var classNameStrengths = $(this).attr('class').split(' ')[1]  
//         $("div.floatAboveLandingBox p#"+classNameStrengths).css("display", "none");
//     	$("div.floatAboveLandingBox p#Intro").css("display","inline")
//     	console.log("mouse left strengths")
//     });

//     })


// var dataVizStrengths = [{"name": "Increase Discovery", "description": "Allowing the user to change figure style, filter the data population, and adjust display parameters increases the chance of making new insights"
// 	},
// 	{
// 		"name": "Tell A Story", "description":"If a picture is worth a 1000 words, a data visualization is worth even more. The ability to explore data creates user buy-in for your narrative."
// 	},
// 	{

// 	},
// 	{

// 	},
// 	{

// 	},
// 	{

// 	}]






// var landingCards = [
// 	{
// 		"link": ,
// 		"image": ,
// 		"type": ,
// 		"dataset": ,
// 		"style": ,
// 		"description": 
// 		"date": ,
// 	},
// ]
