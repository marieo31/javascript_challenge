// from data.js
var tableData = data;

// 1.1 - Fill up the table
//------------------------

    // Select the table body using d3
    var tbody = d3.select("tbody")

    // Adding the row and filling the cells
    addDataToTbody(tableData)


// 1.2 - Filter the table
//-----------------------
var filterButton = d3.select("#filter-btn");

filterButton.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element
    var inputDate = d3.select("input")    
    
    console.log(inputDate.property("value"))

    // Filter the data
    var filteredData = tableData.filter(elem => 
        elem.datetime === inputDate.property("value"))
    console.log(filteredData)

    // Remove the existing content of the table
    // NB: tbody level
    d3.select('#ufo-tbody').html("")

    // Update the tbody with the filtered data
    addDataToTbody(filteredData)

})


// Function to add row to the tbody
function addDataToTbody(data_table){    
    data_table.forEach(element =>{
        // Adding a row
        var row = tbody.append("tr")
        // console.log("add row")
        // Collecting the key/value and filling the columns with the values
        Object.entries(element).forEach(([key, value]) => {
            var cell = tbody.append("td").text(value)
            // console.log(value)
        })
    })
}







// var new_tbody = document.createElement('tbody');
// populate_with_new_rows(new_tbody);
// old_tbody.parentNode.replaceChild(new_tbody, old_tbody)


// var new_tbody = document.createElement('tbody');
// populate_with_new_rows(new_tbody);
// old_tbody.parentNode.replaceChild(new_tbody, old_tbody)


// // The function to update the table
// function update(data) {

//     // // DATA JOIN
//     // // Join new data with old elements, if any.
//     // var text = g.selectAll("text")
//     //   .data(data);
  
//     // UPDATE
//     // Update old elements as needed.
//     text.attr("class", "update");
  
//     // ENTER
//     // Create new elements as needed.
//     //
//     // ENTER + UPDATE
//     // After merging the entered elements with the update selection,
//     // apply operations to both.
//     text.enter().append("text")
//         .attr("class", "enter")
//         .attr("x", function(d, i) { return i * 32; })
//         .attr("dy", ".35em")
//       .merge(text)
//         .text(function(d) { return d; });
  
//     // EXIT
//     // Remove old elements as needed.
//     text.exit().remove();
//   }