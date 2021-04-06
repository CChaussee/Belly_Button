d3.json('samples.json').then(data => {
    console.log(data);
})

function data_info () {

let otu_ids = data.samples[0].otu_ids;
console.log(otu_ids);
let sample_values = data.samples[0].sample_values
console.log(sample_values);
let otu_labels = data.samples[0].otu_labels;
console.log(otu_labels);
};
  let trace1 = {
    type: "bar",
    orientation: "h",
    x: sample_values,
    y: otu_ids, 
}

  let data = [trace1];
  
  let layout = {
  title: 'Top 10 Belly Button Samples',
  showlegend: false,
  height: 600,
  width: 600
};

Plotly.newPlot('bar', data, layout);

  let trace2 = {
    x: otu_ids,
    y: sample_values,
    text: otu_labels,
    mode: 'markers',
    marker: {
      color: otu_ids,
      size: sample_values
    }
  };
  
  let data2 = [trace2];
  
  let layout2 = {
    title: 'Belly Button Bubble Chart',
    showlegend: false,
    height: 600,
    width: 600
  };
  
  Plotly.newPlot('bubble', data2, layout2);