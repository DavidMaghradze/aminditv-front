$(document).ready(function() {
  $(document).click(function() {
    const dropdowns = $(".dropdown")
    dropdowns.each(function() {
      if ($(this).hasClass("visible")) {
        $(this).removeClass("visible")
      }
    })
  })

  $(".select--geo").click(function(event) {
    event.stopPropagation()
    const worldDropdown = $(".dropdown--world")
    const isVisible = worldDropdown.hasClass("visible")
    if (isVisible) {
      worldDropdown.removeClass("visible")
      setTimeout(() => {
        $(".dropdown--geo").toggleClass("visible")
      }, 150)
    } else {
      $(".dropdown--geo").toggleClass("visible")
    }
  })

  $(".select--world").click(function() {
    event.stopPropagation()
    const geoDropdown = $(".dropdown--geo")
    const isVisible = geoDropdown.hasClass("visible")

    if (isVisible) {
      geoDropdown.removeClass("visible")
      setTimeout(() => {
        $(".dropdown--world").toggleClass("visible")
      }, 150)
    } else {
      $(".dropdown--world").toggleClass("visible")
    }
  })
})
