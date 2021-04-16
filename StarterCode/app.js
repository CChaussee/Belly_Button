// It only makes sense in my mind to wrtie things in function, sorry
function data_info (plotmaterials) {
//Read samples.json
      d3.json("samples.json").then (data =>{
          console.log(data)
          let ids = data.samples[0].otu_ids;
          console.log(ids)
          let sampleValues = data.samples[0].sample_values.slice(0,10).reverse();
          console.log(sampleValues)
          let label =  data.samples[0].otu_labels.slice(0,10);
          console.log (label)
// getting the top 10 and reversing it
          let topids = (data.samples[0].otu_ids.slice(0, 10)).reverse();
          let OTU_id = topids.map(d => "OTU " + d);
          console.log(`OTU IDS: ${OTU_id}`)
          let labels =  data.samples[0].otu_labels.slice(0,10);
          console.log(`OTU_labels: ${labels}`)
          let trace1 = {
              x: sampleValues,
              y: OTU_id,
              text: labels,
              type:"bar",
              orientation: "h",
          };
          let data1 = [trace1];
  
          let layout1 = {
              title: "Top 10 Belly Button Samples"
          };
 // creating the bar chart 
      Plotly.newPlot("bar", data1, layout1);
//bubble chart data, top 10 not needed
          let trace2 = {
              x: data.samples[0].otu_ids,
              y: data.samples[0].sample_values,
              mode: "markers",
              marker: {
                  size: data.samples[0].sample_values,
                  color: data.samples[0].otu_ids
              },
              text:  data.samples[0].otu_labels
  
          };
  
          let layout2 = {
              xaxis:{title: "OTU ID"},
              height: 600,
              width: 1000
          };
  
          let data2 = [trace2];
  
      Plotly.newPlot("bubble", data2, layout2); 
      
      });
  }  
  //filing in demographics table
function demographics(plotmaterials) {
  
      d3.json("samples.json").then((data)=> {

          let metadata = data.metadata;
  
          console.log(metadata)
//convert to sting to create text for table  
         let result = metadata.filter(meta => meta.plotmaterials.toString() === plotmaterials)[0];
         let demographicInfo = d3.select("#sample-metadata"); 
         demographicInfo.html("");
         Object.entries(result).forEach((key) => {   
          demographicInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");    
      });
  });
}

// creating function to have the dropdown menu work correctly 
  function optionChanged(plotmaterials) {
      data_info(plotmaterials);
      demographics(plotmaterials);
  }
  

  function init() {
// select dropdown menu 
      let dropdown = d3.select("#selDataset");
  
//forever reading in the data again
      d3.json("samples.json").then((data)=> {
          console.log(data)
// get the id data to the dropdwown menu
          data.names.forEach(function(name) {
              dropdown.append("option").text(name).property("value");
          });
  

          data_info(data.names[0]);
          demographics(data.names[0]);
      });
  }
  
  init();