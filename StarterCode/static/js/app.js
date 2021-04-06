d3.json('samples.json').then(data => {
    console.log(data);
})

let trace1 = {
    type: "bar",
    orientation: "h",
    x: sample_values,
    y: otu_ids, 
}