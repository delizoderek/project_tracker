let newProjectBtn = $("#create-project");
let projectTable = $("#project-table");

let numColumns = 7;

let testProject = {
    name: "Build a Website",
    type: "Web Application (Front End)",
    rate: 100,
    dueDate: "08/11/2021",
    daysTilDueDat: 41,
    earningPotential: 32800
}

newProjectBtn.on("click",function(event){
    event.preventDefault();
    //Create a table row
    let newTableRow = $("<tr>");
    //Create a td for each column
    //populate each td with the correct text
    for(let el in testProject){
        let newTd = $("<td>");
        newTd.text(testProject[el]);
        newTableRow.append(newTd);
    }
    let lastTd = $("<td>");
    let delBtn = $("<button>");
    delBtn.text = "X";
    delBtn.on("click",function(event){
        event.preventDefault();
        console.log("You clicked a button");
    })
    lastTd.append(delBtn);
    newTableRow.append(lastTd);
    projectTable.append(newTableRow);

})