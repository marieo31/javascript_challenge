// from data.js
var tableData = data;

// 1.1 - Fill up the table
//------------------------

// Select the table body using d3
var tbody = d3.select("tbody")

// Adding the row and filling the cells
tableData.forEach(element =>{
    // Adding a row
    var row = tbody.append("tr")
    // Collecting the key/value and filling the columns with the values
    Object.entries(element).forEach(([key, value]) => {
        var cell = tbody.append("td").text(value)
    })
})


// 1.2 - Filter the table
//-----------------------

var inputDate = d3.select("#datetime")

var filterButton = d3.select("#filter-btn");

