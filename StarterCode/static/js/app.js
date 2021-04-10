// It only makes sense in my mind to wrtie things in function, sorry
function data_info(plotmaterial) {
//Reading in samples.json
      d3.json("samples.json").then (data =>{
          console.log(data)
// grabbing data needed for plots          
          let topids = data.samples.otu_ids.slice(0,10).sort((a,b) => b-a);
          console.log(topids)
          let sampleValues =  data.samples.sample_values.slice(0,10);
          console.log(sampleValues)
          let labels =  data.samples.otu_labels.slice(0,10);
          console.log (labels)
// creating bar plot trace
          let trace1 = {
            x: sampleValues,
            y: topids,
            type: bar,
            orientation: "h"
          };
// bar plot data and layout
          let data1 = [trace1];
          let layout1 = {
            title: "Top 10 Belly Button Samples"
          };
// creating bar chart plotly
          Plotly.newPlot("bar", data1, layout1);        
// buble chart time
          let trace2 = {
            x: topids,
            y: sampleValues,
            mode: "markers",
            marker: {
              size: sampleValues,
              color: topids
            },
            text : labels
          };
          let layout2 = {
            height: 600,
            width: 800
          };
          let data2 = [trace2];
          Plotly.newPlot("bubble", data2, layout2);
        });
}

//sleceting demographic information
function demographic(plotmaterial) {
  d3.joson("smples.json").then((data) => {
    let metadata = data.metadata;
    console.log(metadata)
  })
}