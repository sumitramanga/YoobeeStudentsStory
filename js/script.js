(function() {
  $( document ).ready(function() {
    $('#icon').click(function(){
      console.log('working');
      $('html, body').animate({
        scrollTop: $('#titleOne').offset().top
      }, 1000);
    });

    $.ajax({
      url: 'data/data.json',
      dataType: 'json',
      type: 'GET',
      success: function(data) {
        console.log(data);

        // Grabbing the chart container from the HTML
        var getChart = document.getElementById('firstChart');

        // Load the 'corechart' package.
        google.charts.load('current', {packages: ['corechart']});

        jobChart();
      },
      error: function(error) {
        console.log(error);
        console.log('Something has gone wrong with the connection');
      }
    }); // ajax Ends
  });


function jobChart() {
  console.log('Hello World');
}

}());
