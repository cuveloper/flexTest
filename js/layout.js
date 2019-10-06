$(function(){
  $(".c_pro_list li").each(function(e){
    $(this).hover(function(e){
      $(this).siblings().removeClass("c_on");
      $(this).addClass("c_on");
    }, function(e){
      $(this).siblings().removeClass("c_on");
    });
  });
});
