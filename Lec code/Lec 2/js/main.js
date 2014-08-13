// Java Script 


// id selector

$( "#myDiv" ).css( "border", "8px solid green" );


// My example
$("#notMe").css("background-color","blue");


// Class Selector
$( ".myClass" ).css( "border", "3px solid red");

// My example
$(".notMe").css("background-color","green");


// Parent Child Selector
$( "ul.topnav > li" ).css( "border", "3px double red" );

// My example
$("ul.topnav > li").css("color","blue");

// Descendant Selector 
$( "form input" ).css( "border", "2px dotted blue" );
$( "form fieldset input" ).css( "backgroundColor", "yellow" );

// My example
$("form fieldset").css("background-color","navy blue");

// Header Selector
$( ":header" ).css({ background: "green", color: "yellow" });