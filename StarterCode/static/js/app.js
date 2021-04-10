// It only makes sense in my mind to wrtie things in function, sorry
function data_info(plotmaterial) {
//Reading in samples.json
      d3.json("samples.json").then (data =>{
          console.log(data)
          let ids = data.samples.otu_ids;
          console.log(ids)
          let sampleValues =  data.samples.sample_values.slice(0,10);
          console.log(sampleValues)
          let labels =  data.samples.otu_labels.slice(0,10);
          console.log (labels)
