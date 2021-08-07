var ctx = document.getElementById("myChart").getContext("2d");

var data = {
    labels: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10"
    , "11", "12", "13", "14", "15"
,"16", "17", "18", "19", "20", "21", "22", "23"],
    datasets: [{
            label: "Planned",
            backgroundColor: '#364acf'
            ,
            data: [3, 7, 4, 3, 7, 4, 3, 7, 4, 3, 7, 4, 3, 7, 4, 3, 7, 4, 3, 7, 4, 3, 7, 4]
        },
        {
            label: "Executed",
            backgroundColor: '#36914a' ,
            data: [3, 7, 4, 3, 7, 4, 3, 7, 4, 3, 7, 4, 3, 7, 4, 3, 7, 4, 3, 7, 4, 3, 7, 4]
        },
    ]
};

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        barValueSpacing: 20,
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                }
            }]
        }
    }
});



var ctx = document.getElementById("myChart2").getContext("2d");

var data = {
    labels: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
    datasets: [{
            label: "Planned",
            backgroundColor: '#364acf',
            data: [3, 7, 4, 3, 7, 4, 3, 7, 4, 3, 7, 4, 3, 7, 4, 3, 7, 4, 3, 7, 4, 3, 7, 4]
        }
    ]
};

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        barValueSpacing: 20,
        scales: {
            yAxes: [{ 
                ticks: {
                    min: 0,
                }
            }]
        }
    }
});