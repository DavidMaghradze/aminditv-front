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

    const filterSimpleSelects = $(".filters .select--simple").find(".dropdown")
    console.log("filterSimpleSelects", filterSimpleSelects)
    filterSimpleSelects.each(function() {
      $(this).removeClass("visible")
    })

    if (isVisible) {
      geoDropdown.removeClass("visible")
      setTimeout(() => {
        $(".dropdown--world").toggleClass("visible")
      }, 150)
    } else {
      $(".dropdown--world").toggleClass("visible")
    }
  })

  $(".select--simple").click(function(event) {
    event.stopPropagation()
    const cityDropdowns = $(".dropdown--cities")
    let isVisible = ""

    isVisible = cityDropdowns.map(function() {
      if ($(this).hasClass("visible")) {
        return $(this)
      }
    })

    if (isVisible.length !== 0) {
      isVisible[0].removeClass("visible")
    }

    $(this)
      .find(".dropdown")
      .toggleClass("visible")
  })

  // change header background on scroll
  $(window).scroll(function() {
    const scrollTop = $(window).scrollTop()
    if (scrollTop > 0) {
      $(".header").addClass("scrolled")
    } else {
      $(".header").removeClass("scrolled")
    }
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

  $(".header__nav-item--dropdown").click(function() {
    $(this)
      .find("span")
      .toggleClass("shown")
    $(this)
      .next()
      .slideToggle("fast")
  })
})
