
$(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
        $('div#loadmoreajaxloader').show();
        window.setTimeout(function() {
        	$("#postswrapper").append("<p>And then this happened</p>");
        	$('div#loadmoreajaxloader').hide(); 
        }, 1000);
        
    }
});    





// $(window).scroll(function()
// {
//     if($(window).scrollTop() == $(document).height() - $(window).height())
//     {
//         $('div#loadmoreajaxloader').show();
//         $.ajax({
//         url: "http://www.gutenberg.org/cache/epub/13419/pg13419.html",
//         type:'GET',
//     	dataType:'JSONP',
//         success: function(html)
//         {
//             if(html)
//             {
//                 $("#postswrapper").append(html);
//                 $('div#loadmoreajaxloader').hide();
//             }else
//             {
//                 $('div#loadmoreajaxloader').html('<center>No more posts to show.</center>');
//             }
//         }
//         });
//     }
// });