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
});
