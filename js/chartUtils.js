function makeChartDatasets(minDataset, maxDataset) {
  let datasets = []
  let maxXAxes = 1
  for(let i = minDataset; i <= maxDataset; i++) {
    const currentEqValues = getEquationValues(i)
    if (currentEqValues.data.length > maxXAxes) {
      maxXAxes = currentEqValues.data.length
    }
    // const rnd = Math.random()
    // const datasetColor = stringToColour(rnd.toString())
    const datasetColor = getRandomColor(`${i}`)
    datasets.push(
      {
        label: i,
        data: currentEqValues.data,
        borderWidth: 1,
        borderColor:datasetColor,
        backgroundColor: [datasetColor],
        fill: false,
        tension: 0.2
      }
    )
  }
  return {
    datasets: datasets,
    maxXAxes: maxXAxes
  }
}

function makeChartLabels(maxLabel) {
  const labels = []
  for (let val = 1; val < maxLabel; val++) {
    labels.push(val)
  }
  return labels
}