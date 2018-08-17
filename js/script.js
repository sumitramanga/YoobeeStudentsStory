(function() {
  $( document ).ready(function() {
    $('#icon').click(function(){
      console.log('working');
      $('html, body').animate({
        scrollTop: $('#titleOne').offset().top
      }, 1000);
    });

    $('#secondaryIcon').click(function(){
      console.log('working');
      $('html, body').animate({
        scrollTop: $('#titleTwo').offset().top
      }, 1000);
    });
  });


  google.charts.load('current', {'packages':['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawPieChart);
  google.charts.setOnLoadCallback(drawBarChart);

  function drawPieChart() {

    var data = google.visualization.arrayToDataTable([
      ['Industry', 'Hours per Day'],
      ['Employed',     9],
      ['Unemployed',      13],
    ]);

    var options = {
      title: ''
    };

    var chart = new google.visualization.PieChart(document.getElementById('firstChart'));

    chart.draw(data, options);
  }

  function drawBarChart() {
      var data = google.visualization.arrayToDataTable([
        ['Industry', 'Hours per Day'],
        ['Hospitality',     3],
        ['Freelance design',      1],
        ['Retail',  2],
        ['Communications and design', 1],
        ['Tech',    2]
      ]);

      var options = {
        title: 'Population of Largest U.S. Cities',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Amount of students',
          minValue: 0
        },
        vAxis: {
          title: 'Industry'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('secondChart'));
      chart.draw(data, options);
    }

    // females: employed =   unemployed =  
    // males:
}());
