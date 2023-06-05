$(document).ready(function () {
    /** display list of checked checkbes **/
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
    const url = 'http://0.0.0.0:5001/api/v1/status/';
    $.get( url, function (data, status) {
      if (data.status === 'OK' && status === 'success') {
        $('#api_staus').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    });
  });
  $(function () {
    const url_serach = 'http://0.0.0.0:5001/api/v1/places_search/';
  })
});