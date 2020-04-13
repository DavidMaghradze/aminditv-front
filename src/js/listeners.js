$(document).ready(function() {
  $(".select--geo").click(function() {
    $(".dropdown--world").removeClass("visible")
    $(".dropdown--geo").toggleClass("visible")
  })

  $(".select--world").click(function() {
    $(".dropdown--geo").removeClass("visible")
    $(".dropdown--world").toggleClass("visible")
  })
})
