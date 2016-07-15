;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $(document).ready(function() {
    $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
    $.fn.foundationButtons          ? $doc.foundationButtons() : null;
    $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
    $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
    $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
    $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
    $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
    $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
    $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
    $.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
    $.fn.foundationClearing         ? $doc.foundationClearing() : null;

    $.fn.placeholder                ? $('input, textarea').placeholder() : null;
  });

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

})(jQuery, this);

/*******************************/
jQuery(document).ready(function($)
{
	jQuery("#submit").bind("click", function()
	{		
		var name = jQuery("#yourName").val();
		var mail = jQuery("#yourEmail").val();
		var message = jQuery("#yourMessage").val();
		
		var data = "name=" + name + "&mail=" + mail + "&text=" + message;
		
		if(name != "" && name != "?" && name != " " && mail != "" && mail != "?" && mail != " " && 
		message != "" && message != "?" && message != " ")
		{	
			jQuery("#form").css("display", "none");
			jQuery("#response").css("display", "block");
				
			app.submitForm(data);
		}	
	});
	
	if(window.location.hash == "#chat=on")
	{
		var button = jQuery("#collaborate");		
		jQuery(button).removeAttr("disabled");		
		jQuery(button).on("click", function(evt) {
			TogetherJS(evt.target);
		});	
	} 						
});

var app = {
	submitForm: function(data)
	{
		$.ajax({
			type: "POST",
			url: "php/mail.php",
			data: data,
			cache: false,
			success: function(response)
			{
				$("#response").html(response);
			},
			error: function()
			{
				$("#response").html(response);
			}
		});
	}
};
