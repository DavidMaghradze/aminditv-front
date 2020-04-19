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

  $(".select").click(function(event) {
    event.stopPropagation()
    console.log($(this).find(".dropdown"))
    $(this)
      .find(".dropdown")
      .toggleClass("visible")
  })

  // show-hide searchbar on mobile
  $(".header__mobile-bar .btn--search").click(function() {
    $(".myModal").addClass("visible")
    $(".myModal__content").click(function(event) {
      event.stopPropagation()
    })
    $(".myModal").click(function() {
      $(this).removeClass("visible")
    })
  })

  // show-hide mobile menu
  $(".hamburger").click(function() {
    $(".header__nav-mobile").addClass("shown")
    $(".header__nav-mobile__header").click(function() {
      $(".header__nav-mobile").removeClass("shown")
    })
  })
})
