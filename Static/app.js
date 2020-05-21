function buildMetadata(samples) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    console.log(metadata);
    var resultArray = metadata.filter(sampleObj => sampleObj.id == samples);
    console.log(resultArray);
    var result = resultArray[0];
    var metaText = d3.select("#sample-metadata")
   
    })
  };

  buildMetadata()

function buildCharts(sample) {
    d3.json("samples.json").then((data) => {
      console.log(data);
      var samples = data.samples;
      console.log(samples);
      var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
      console.log(resultArray);
      var result = resultArray[0];
      console.log(result);
      var otu_ids = result.otu_ids;
      var otu_labels = result.otu_labels;
      var sample_values = result.sample_values;


      // Build a Bubble Chart
      var bubbleLayout = {
        title: "Bacteria Cultures Per Sample",
        margin: { t: 0 },
        hovermode: "closest",
        xaxis: { title: "OTU ID" },
        margin: { t: 30}
      };
      var bubbleData = [
        {
          x: otu_ids,
          y: sample_values,
          text: otu_labels,
          mode: "markers",
          marker: {
            size: sample_values,
            color: otu_ids,
            colorscale: "Earth"
          }
        }
    ];
    
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);

    var barData = [
      {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        type: "bar"
      }
    ]

    var barLayout = {
      title: "Types of belly button bacteria",
      xaxis: {title: "OTU ID"}
    };

    Plotly.newPlot("bar", barData, barLayout);
})
};
buildCharts("940")
