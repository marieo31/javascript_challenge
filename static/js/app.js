// from data.js
var fullTable = data;

// 1.1 - Fill up the table
//------------------------

    // Select the table body using d3
    var tbody = d3.select("tbody")

    // Adding the row and filling the cells
    addDataToTbody(fullTable)


// 1.2 - Filter the table
//-----------------------
var filterButton = d3.select("#filter-btn");

filterButton.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input elements
    let inputDate = d3.select("#datetime").property("value")
    let inputCity = d3.select("#city").property("value")
    let inputState = d3.select("#state").property("value")
    // console.log(inputDate)
    // console.log(inputCity)
    // console.log(inputState)

    
    // Filter the data (only if there is a value to filter on)
    let filteredTable = fullTable
    if (inputDate != "All" && inputDate != ""){
        filteredTable = filterData(filteredTable, inputDate, "date")
    }
    if (inputCity != "All" && inputCity != ""){
        filteredTable = filterData(filteredTable, inputCity, "city")
    }
    if (inputState != "All" && inputState != ""){
        filteredTable = filterData(filteredTable, inputState, "state")
    }

    // var filteredData = fullTable.filter(elem => 
    //     elem.datetime === inputDate.property("value"))
    // console.log(filteredData)
    // filteredTable = filterData(fullTable, inputDate, "date")

    // Remove the existing content of the table
    // NB: tbody level!!!!!! 
    d3.select('#ufo-tbody').html("")

    // Update the tbody with the filtered data
    addDataToTbody(filteredTable)

})

// Get ALL the data back
var AllDataButton = d3.select("#all-btn")

AllDataButton.on("click", function(){
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Remove the existing content of the table
    // NB: tbody level
    d3.select('#ufo-tbody').html("")

    // Update the tbody with the full Data
    addDataToTbody(fullTable)

    // Update the field on the input element
    d3.select("input").property("value","")
})


// Function to add rows to the tbody
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

// Filtering function
function filterData(ftable, fvalue, fkey){
    /* inputs:
        > table: table to filter
        > fvalue: filtering value
        > fkey: filtering key
    */
    switch (fkey) {
        case "date":
            return ftable.filter(elem => elem.datetime === fvalue)
        case "city":
            return ftable.filter(elem => elem.city === fvalue)
        case "state":
            return ftable.filter(elem => elem.state === fvalue)
        case "shape":
            return ftable.filter(elem => elem.shape === fvalue)
    }

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