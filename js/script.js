(function() {
  $( document ).ready(function() {
    $('#icon').click(function(){
      console.log('working');
      $('html, body').animate({
        scrollTop: $('#titleOne').offset().top
      }, 1000);
    });
  });


  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Industry', 'Hours per Day'],
      ['Hospitality',     3],
      ['Freelance design',      1],
      ['Retail',  2],
      ['Communications and design', 1],
      ['Tech',    2]
    ]);

    var options = {
      title: 'My Daily Activities'
    };

    var chart = new google.visualization.PieChart(document.getElementById('firstChart'));

    chart.draw(data, options);
  }

}());
