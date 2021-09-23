function getEquationValues(nr) {
  r = nr
  const equantionValues = [nr]
  let max = 1
  while(r != 1){
    if(r%2 == 0){
      r = r/2
    } else {
      r = 3*r + 1
    }
    if (r > max) {
      max = r
    }
    equantionValues.push(r)
  }
  return {
    max: max,
    data: equantionValues
  }
}

function stringToColour(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = '#';
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}

const randomColors = [
  '#F44336', '#e91e63', '#9c27b0', '#673ab7',
  '#ff9800', '#ff5722', '#795548', '#607d8b',
  '#3f51b5', '#2196F3', '#00bcd4', '#009688',
  '#2196F3', '#32c787', '#00BCD4', '#ff5652',
  '#ffc107', '#ff85af', '#FF9800', '#39bbb0',
  '#4CAF50', '#ffeb3b', '#ffc107', '#A71D31',
  '#D5BF86', '#A71D31', '#3F0D12', '#988F2A',
  '#599FDF', '#322F20', '#6A5837', '#FE5F00',
  '#0A2047', '#959252', '#77869E', '#923F35',
];

function getRandomColor(inputString) {
  inputString = inputString.substr(0, 10);

  var hash = 0;
  for (var i = 0; i < inputString.length; i++) {
      hash = 31 * hash + inputString.charCodeAt(i);
  }
  var index = Math.abs(hash % randomColors.length);
  return randomColors[index];
}