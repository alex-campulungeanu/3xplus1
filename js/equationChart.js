const makeChart = () => {
  const maxLabelValue = makeChartDatasets(1,10).maxXAxes
  const datasets = makeChartDatasets(1,10).datasets
  const labels = makeChartLabels(maxLabelValue)
  var ctx = document.getElementById('equationChart').getContext('2d');
  var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: datasets
    },
    options: {
      // maintainAspectRatio: true,
      legend: {
        display: true
      },
      responsive: true,
      title: {
        display: true,
        position: "top",
        text: "3x+1 equation",
        fontSize: 18,
        fontColor: "#111"
      },
      legend: {
        display: false
      }
    }
  });
  return lineChart
}

$(function() {
  const chart = makeChart()
  // TODO: add validation for min and max inputs
  document.getElementById('generateChartBtnId').addEventListener('click', function(event) {
    event.preventDefault();
    minDataset = parseInt($('#minDatasetNr').val(), 10)
    maxDataset = parseInt($('#maxDatasetNr').val(), 10)
    const maxLabelValue = makeChartDatasets(minDataset, maxDataset).maxXAxes
    const newDatasets = makeChartDatasets(minDataset, maxDataset).datasets
    const labels = makeChartLabels(maxLabelValue)
    chart.data.labels = labels
    chart.data.datasets = newDatasets
    chart.update()
  })
})
    
