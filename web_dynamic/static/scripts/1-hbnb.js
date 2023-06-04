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
});
