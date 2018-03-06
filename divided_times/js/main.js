$(".international").on("click",function(event){
  event.preventDefault();

  $("#international-drop").show();
  $("#politics-drop").hide();
  $("#business-drop").hide();
  $("#technology-drop").hide();
  $("#culture-drop").hide();
  $("#blogs-drop").hide();

if ($(this).hasClass("active")){
  $('#slide-down').slideUp();
  $(this).removeClass("active");
} else {
  $("#slide-down").slideDown();
  $("#primary-nav li").removeClass("active");
  $(this).addClass("active");
  }
});
