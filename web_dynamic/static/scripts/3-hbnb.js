$(document).ready(function () {
  /** display list of checked amenties **/
  let lsAmenity = [];
  $('input[type=checkbox]').change(function () {
    const name = $(this).attr('data-name');
    if ($(this).is(':checked')) {
      lsAmenity.push(name);
    } else {
      lsAmenity = lsAmenity.filter(amenity => amenity !== name);
    }
    $('.amenities h4').text(lsAmenity.join(', '));
  });
  /** add availbel to api_staus (check api status) */
  $(function () {
    const url = 'http://' + window.location.hostname + ':5001/api/v1/status/';
    $.get(url, function (data, status) {
      if (data.status === 'OK') {
        $('div#api_status').addClass('available');
      } else {
        $('div#api_status').removeClass('available');
      }
    });
  });
  $.ajax({
    url: 'http://'+ window.location.hostname +':5001/api/v1/places_search/',
    type: 'POST',
    data: JSON.stringify({}),
    contentType: 'application/json',
    success: function (data) {
      for (const place of data) {
        const article = (
          <article>
            <h2>${place.name}</h2>
            <div class='price_by_night'>$${place.price_by_night}</div>
            <div class='information'>
              <div class='max_guest'>${place.max_guest} Guests</div>
              <div class='number_rooms'>${place.number_rooms} Bedrooms</div>
              <div class='number_bathrooms'>${place.number_bathrooms} Bathrooms</div>
            </div>
            <div class='description'>
              ${place.description}
            </div>
          </article>
        );
        $('section.places').append(article);
      }
    }
  });
});
