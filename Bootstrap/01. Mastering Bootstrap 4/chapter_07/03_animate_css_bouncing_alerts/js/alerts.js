+function ($) {
  'use strict';
  
  var Alert = $.fn.alert.Constructor;
  
  Alert.prototype.click = function (e) {
    var $this = $(this)
    var dataAttr;
    $.each($($this).data(), function(key, value) {
      dataAttr = key.toString(); 
    })
    var selector = $this.attr('data-' + dataAttr)

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }
    
    $this.addClass('hidden-sm-up')

    var $parent = $(selector)
    
    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    console.log(dataAttr);

    switch (dataAttr) {
      case 'expand':
        $this.siblings('.minimize').removeClass('hidden-sm-up')
        $parent.trigger(e = $.Event('expand.bs.alert'))
        $parent.removeClass('alert-minimize')
        break;

      case 'minimize':
      default:
        $this.siblings('.expand').removeClass('hidden-sm-up')
        $parent.trigger(e = $.Event('minimize.bs.alert'))
        $parent.addClass('alert-minimize')
        break;
    }

    if (e.isDefaultPrevented()) return
  }
 
  $(document).on('click.bs.alert.data-api', '[data-minimize="alert"]', Alert.prototype.click)
  $(document).on('click.bs.alert.data-api', '[data-expand="alert"]', Alert.prototype.click)
  
  $(window).on('load', function() {
    $('[data-alert-animate]').each(function () {
      var defaultAnimations = 'animated pulse infinite'
      
      var $animations = $(this).attr('data-alert-animate')

      if ($animations) {
        $(this).addClass('animated ' + $animations)
      } else {
        $(this).addClass(defaultAnimations)
      }

    })
  })
}(jQuery);