$(document).ready(function () {
    $('#enrollForm').on('submit', function (e) {
      e.preventDefault();
      $('#confirmation').removeClass('d-none');
      $('#enrollForm')[0].reset();
    });
  });
  