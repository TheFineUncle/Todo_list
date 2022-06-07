$("ul").on("click", "li", function(){
    $(this).toggleClass("completed")
});

// stopPropagation is added to stop the bubbling effect/firing on the page
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
     $(this).remove();  
    });
event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
// grab new todo from input and clear *input tab
    var todoText = $(this).val();
    $(this).val("");
// create a new li and add to ul
    $("ul").append("<li><span> <i class='fas fa-trash'></i> </span> " + todoText + "</li>")
}
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});