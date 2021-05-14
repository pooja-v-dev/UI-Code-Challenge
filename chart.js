google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawVisualization);

google.charts.load('current', { 'packages': ['line'] });
google.charts.setOnLoadCallback(drawMultipleTrendlineChart);

function drawVisualization() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
        ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Disn'],
        ['Jan', 165, 93, 22, 12],
        ['Mar', 85, 61, 32, 19],
        ['May', 97, 41, 46, 87],
        ['July', 89, 31, 72, 65],
        ['Sept', 96, 69, 69, 41]
    ]);

    var options = {
        seriesType: 'bars',
        height: 300,
        width: 300,
        chartArea: { left: 30, top: 10, width: '100%' },
        legend: { position: 'none' }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

google.load("visualization", "1", {
    packages: ["corechart"]
});
google.setOnLoadCallback(drawChart);

function drawChart() {
    var data1 = new google.visualization.DataTable();

    data1.addColumn('string', 'Task');
    data1.addColumn('number', 'Hours per Day');
    data1.addRows([
        ['A', 90],
        ['B', 10]
    ]);
    var data2 = new google.visualization.DataTable();

    data2.addColumn('string', 'Task');
    data2.addColumn('number', 'Hours per Day');
    data2.addRows([
        ['A', 80],
        ['B', 20]
    ]);

    var data3 = new google.visualization.DataTable();

    data3.addColumn('string', 'Task');
    data3.addColumn('number', 'Hours per Day');
    data3.addRows([
        ['A', 45],
        ['B', 55]
    ]);

    var options = {
        width: 120,
        height: 120,
        colors: ['darkorange', 'blue'],
        legend: { position: 'none' },
        pieHole: 0.5,
        animation: { duration: 800, easing: 'in' }
    };

    var chart1 = new google.visualization.PieChart(document.getElementById('chart1_div'));
    chart1.draw(data1, options);
    var chart2 = new google.visualization.PieChart(document.getElementById('chart2_div'));
    chart2.draw(data2, options);
    var chart3 = new google.visualization.PieChart(document.getElementById('chart3_div'));
    chart3.draw(data3, options);
    var chart4 = new google.visualization.PieChart(document.getElementById('chart4_div'));
    chart4.draw(data2, options);
    var chart5 = new google.visualization.PieChart(document.getElementById('chart5_div'));
    chart5.draw(data1, options);

}

function drawMultipleTrendlineChart() {

    var chart;

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Month');
    data.addColumn('number', 'Sales A');
    data.addColumn('number', 'Sales B');
    data.addColumn('number', 'Sales C');
    data.addColumn('number', 'Sales D');

    data.addRows([
        ['Jan', 7.0, 0, 0.9, 3.9],
        ['Feb', 6.9, 0.8, 0.6, 4.2],
        ['Mar', 9.5, 5.7, 3.5, 5.7],
        ['Apr', 14.5, 11.3, 8.4, 8.5],
        ['May', 18.2, 17.0, 13.5, 11.9],
        ['Jun', 21.5, 22.0, 17.0, 15.2],
        ['Jul', 25.2, 24.8, 18.6, 17.0],
        ['Aug', 26.5, 24.1, 17.9, 16.6],
        ['Sep', 23.3, 20.1, 14.3, 14.2],
        ['Oct', 18.3, 14.1, 9.0, 10.3],
        ['Nov', 13.9, 8.6, 3.9, 6.6],
        ['Dec', 9.6, 2.5, 1.0, 4.8]


    ]);

    var chartHeight = 300;
    var chartWidth = 350;
    var chartOptions = {
        pointsVisible: true,
        trendlines: {
            0: {
                color: 'red'
            },
            1: {
                color: 'yellow'
            },
            2: {
                color: 'blue'
            },
            3: {
                color: 'green'
            }
        },
        isStacked: true,
        width: chartWidth,
        height: chartHeight,
        colors: ['#0000D8', '#00dddd', '#df1b59', '#281414'],
        hAxis: {
            slantedText: true,
            textStyle: {
                fontSize: 10
            },
            // direction: -1,
            slantedTextAngle: 70
        },
        chartArea: {
            left: 50,
            top: 20,
            width: (chartWidth - 10),
            height: (chartHeight - 90)
        }
    };
    chart = new google.visualization.LineChart(document.getElementById('multipleTrendChart'));
    chart.draw(data, chartOptions);
}

$(document).ready(function() {

    $(".searchbox").hide();
    $(".filtertext").hide();

    $("#tooltip").click(function() {
        $(".searchbox").hide();
    });

    $("#tooltip").click(function() {
        $(".searchbox").show();
    });

    $(".fa-filter").click(function() {
        $(".filtertext").hide();
    });

    $(".fa-filter").click(function() {
        $(".filtertext").show();
    });
});