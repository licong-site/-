/**
 * 生成文章目录
*/

$(function() {
  $("section h1, section h2, section h3").each(function(){

    var idStr = $(this).text().toLowerCase().replace(/ /g, '-').replace(/(、)|(\.)/g, '')
    $("nav ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + idStr + "'>" + $(this).text() + "</a></li>");
    $(this).attr("id", idStr);
    $("nav ul li:first-child a").parent().addClass("active");
  });

  $("nav ul li").on("click", "a", function(event) {
    // var position = $($(this).attr("href")).offset().top - 190;
    // $("html, body").animate({scrollTop: position}, 400);
    $("nav ul li a").parent().removeClass("active");
    $(this).parent().addClass("active");
    // event.preventDefault();
  });
});
