$(document).ready(function() {
  $("#formOne").submit(function(event) {
    $("#booking").show();

    event.preventDefault();
  });
});
