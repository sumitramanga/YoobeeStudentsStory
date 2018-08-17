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

        // Load the 'corechart' package.
        google.charts.load('current', {packages: ['corechart']});
        google.charts.setOnLoadCallback(jobChart);

      },
      error: function(error) {
        console.log(error);
        console.log('Something has gone wrong with the connection');
      }
    }); // ajax Ends
  });


function jobChart() {

  var getChart = document.getElementById('firstChart');

  console.log('packages loaded');

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'job');
  data.addColumn('string', 'gender');

  for(var i = 0; i < data.length; i++){
      data.addRow([data[i].job, data[i].gender]);
    }

  var options = {
    title: 'Student Count of jobs'
  };

  var chart = new google.visualization.PieChart(getChart);

  // Method to show/draw the chart on the page
  chart.draw(data, options);
}

}());
