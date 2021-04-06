d3.json('samples.json').then(data => {
    console.log(data);
})

let trace1 = {
    type: "bar",
    orientation: "h",
    x: sample_values,
    y: otu_ids, 
}

let data = [trace1];
  
var layout = {
  title: 'Top 10 Belly Button Samples',
  showlegend: false,
  height: 600,
  width: 600
};

Plotly.newPlot('bar', data, layout);

let trace2 = {
    x: otu_ids,
    y: sample_values,
    text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
    mode: 'markers',
    marker: {
      color: otu_ids,
      size: sample_values
    }
  };
  
  let data2 = [trace2];
  
  var layout2 = {
    title: 'Belly Button Bubble Chart',
    showlegend: false,
    height: 600,
    width: 600
  };
  
  Plotly.newPlot('bubble', data2, layout2);