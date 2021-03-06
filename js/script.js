(function() {

  var myData;

  var defaultArray = [
    {
      employed: []
    },
    {
      unemployed: []
    }
  ];

  var femaleArray = [
    {
      employed: []
    },
    {
      unemployed: []
    }
  ];
  var maleArray = [
    {
      employed: []
    },
    {
      unemployed: []
    }
  ];

  var nonBiArray = [
    {
      employed: []
    },
    {
      unemployed: []
    }
  ];


  // Grabbing the buttons from the html
  var femaleEmployBtn = document.getElementById('femaleEmployBtn');
  var maleEmployBtn = document.getElementById('maleEmployBtn');
  var nonBinaryEmployBtn = document.getElementById('nonBinaryEmployBtn');


  // Scroll to sections
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


// Calling an ajax request to get the json data
  $.ajax({
        url: 'data/data.json',
        dataType: 'json',
        type: 'GET',
        success: function(data) {
          // console.log(data);
          myData = data;
          addToDefaultArray();
          addToArrays();
          initPieChart(defaultArray);
        },
        error: function(error) {
          console.log(error);
          console.log('Something has gone wrong with the connection');
        }
  }); // ajax Ends


// To show a graph with data on load
  function addToDefaultArray(){
    for(var i = 0; i < myData.length; i++){
      if (myData[i].job == 'yes'){
        defaultArray[0].employed.push(myData[i]);
      } else if (myData[i].job == 'no'){
        defaultArray[1].unemployed.push(myData[i]);
      }
    }
    console.log('Default array:');
    console.log(defaultArray);
  }


  // Filtering the pie chart to genders
  function addToArrays(){
    for(var i = 0; i < myData.length; i++){
      if (myData[i].gender == 'female' && myData[i].job == 'yes'){
        femaleArray[0].employed.push(myData[i]);
      } else if (myData[i].gender == 'female' && myData[i].job == 'no'){
        femaleArray[1].unemployed.push(myData[i]);
      } else if (myData[i].gender == 'male' && myData[i].job == 'yes'){
        maleArray[0].employed.push(myData[i]);
      } else if (myData[i].gender == 'male' && myData[i].job == 'no'){
        maleArray[1].unemployed.push(myData[i]);
      } else if (myData[i].gender == 'non-binary' && myData[i].job == 'yes'){
        nonBiArray[0].employed.push(myData[i]);
      } else if (myData[i].gender == 'non-binary' && myData[i].job == 'no'){
        nonBiArray[1].unemployed.push(myData[i]);
      }

    } // for loop ends
  } // addToArray ends


  google.charts.load('current', {'packages':['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawBarChart);


  // Adding event listeners to the buttons for filtering through genders of pie chart
  femaleEmployBtn.addEventListener("click", function(){
      initPieChart(femaleArray);
  }, false);

  maleEmployBtn.addEventListener("click", function(){
      initPieChart(maleArray);
  }, false);

  nonBinaryEmployBtn.addEventListener("click", function(){
      initPieChart(nonBiArray);
  }, false);


  // Function that initialises the pie chart once the json data has been successfully retrieved
  // An array is passed through as an argument to define what data will be used in the chart, making it dynamic
  function initPieChart(selectedArray){
    google.charts.setOnLoadCallback(drawPieChart);

    function drawPieChart() {
      console.log(selectedArray[0].length);
      var data = google.visualization.arrayToDataTable([
        ['Industry', 'Hours per Day'],
        ['Employed',  selectedArray[0].employed.length], //
        ['Unemployed', selectedArray[1].unemployed.length],
      ]);

      var options = {
        title: ''
      };

      var chart = new google.visualization.PieChart(document.getElementById('firstChart'));

      chart.draw(data, options);
    }
  } // End initPieChart


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
}());
