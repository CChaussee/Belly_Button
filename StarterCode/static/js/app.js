
// how my mind proccesses things
function data_info () {
d3.json('samples.json').then((data) => {
    console.log(data);

let otu_ids = data.samples[0].otu_ids;
console.log(otu_ids);
let sample_values = data.samples[0].sample_values
console.log(sample_values);
let otu_labels = data.samples[0].otu_labels;
console.log(otu_labels)})};
data_info();


function init() {
  var dropdown = d3.select("#selDataset");
  d3.json("samples.json").then((data)=> {
      console.log(data)
      data.names.forEach(function(name) {
          dropdown.append("option").text(name).property("value");
      });
      
  let otu_ids = data.samples[0].otu_ids.slice(0,10).reverse();
  let sample_values = data.samples[0].sample_values.slice(0,10).reverse();
  let otu_labels = data.samples[0].otu_labels;


  let trace1 = {

    x: sample_values,
    y: otu_ids,
    type: "bar",
    orientation: "h" 
}

  let dataa = [trace1];
  
  let layout = {
  title: 'Top 10 Belly Button Samples',
  showlegend: false,
  height: 600,
  width: 600
};

Plotly.newPlot('bar', dataa, layout);

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

Plotly.newPlot('bubble', data2, layout2)})}

function optionChanged(otu_ids) {
  data_info(otu_ids);
  init(otu_ids);
}


init() 