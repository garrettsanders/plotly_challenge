function buildMetadata(samples) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    console.log(metadata);
    var resultArray1 = metadata.filter(Obj => Obj.metadata == samples);
    console.log(resultArray1);
    var result1 = resultArray1[0];
    console.log(result1);
    var metaText = d3.select("#sample-metadata");
    Object.entries(result1).forEach(([key, value]) => {
      metaText.append("div")
      .text(`${key}: ${value}`);
    })
    });
  }
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
        x: sample_values,
        y: otu_labels,
        text: otu_ids,
        type: "bar",
        orientation: "h"
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

function init(option) {
  d3.json("samples.json").then((data) => {
   var names = data.names;
   console.log(names);
   var resultArray2 = names.filter(Obj => Obj.names == option);
    console.log(resultArray2);
    var result2 = resultArray2[0];
    console.log(result2);
    var dropDown = d3.select("#selDataset");
    
    
  })
};


  



 
  init();