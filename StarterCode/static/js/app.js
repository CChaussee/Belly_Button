// It only makes sense in my mind to wrtie things in function, sorry
function data_info(plotmaterial) {
  //Reading in samples.json
      d3.json("samples.json").then (data =>{
          console.log(data)
