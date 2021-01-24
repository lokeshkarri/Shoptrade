function menuClick(element) {
  $(element).toggleClass('active');
  $('.menu').toggleClass('active');
}

$('.thumbnail').hover(function () {
  $(".thumbnail .selct ul li").on("click", function () {
    $('.selct').addClass('d-none');
    $('.add-cart').addClass('d-block')
  })
})

$('document').ready(function () {
  if (sessionStorage && sessionStorage.length > 0) {
    $('#count').text(sessionStorage.getItem("count"));
  } else {
    $('#count').text('0');
  }
})

$('.add-cart').click(function () {
  var count, session;
  if (sessionStorage && sessionStorage.length > 0) {
    count = sessionStorage.getItem("count");
  } else {
    count = $('#count').text();
  }

  if (count) {
    session = sessionStorage.setItem("count", +count + 1);
    var finalCount = sessionStorage.getItem("count")
    $('#count').text(finalCount);
    location.reload(true);
  }
})

$('.sort').click(function () {
  $('#sort').slideToggle();
})

$('#myBtnContainer li').click(function () {
  $('#myBtnContainer li').removeClass('active')
  $(this).addClass('active')
})

$('#myBtnContainer li button').click(function () {
  var value = $(this).attr('data-filter');

  $('.grid').isotope({
    filter: value
  });
})

$('#sort li button').click(function () {
  var value = $(this).attr('data-id')
  if (value === 'low') {
    sortProductsPriceAscending();
  } else if (value === 'high') {
    sortProductsPriceDescending();
  }
})

function sortProductsPriceAscending() {
  var products = $('.grid .grid-item');
  products.sort(function (a, b) {
    return $(a).data("price-item") - $(b).data("price-item")
  });
  $(".grid").html(products);
  $(".sort-value").text('Low to High')

}

function sortProductsPriceDescending() {
  var products = $('.grid .grid-item');

  products.sort(function (a, b) {
    return $(b).data("price-item") - $(a).data("price-item")
  });
  $(".grid").html(products);
  $(".sort-value").text('High to Low')
}
