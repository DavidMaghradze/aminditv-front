var ctx = document.getElementById("chart")
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    datasets: [
      {
        data: [14, 13, 15, 15, 14],
        backgroundColor: ["transparent"],
        xAxisID: "xAxis1",
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 3,
        pointBorderWidth: 5,
        lineTension: 0,
        borderColor: "#ffb701"
      }
    ]
  },
  options: {
    legend: {
      display: false
    },

    scales: {
      yAxes: [
        {
          ticks: {
            padding: 20,
            max: 50,
            min: 0,
            stepSize: 0
          }
        }
      ],
      xAxes: [
        {
          id: "xAxis1",
          ticks: {
            padding: 20
          }
        },
        {
          id: "xAxis2",
          position: "top",
          ticks: {
            callback: () => {
              return "2 აპრ"
            }
          }
        }
      ]
    }
  }
})
