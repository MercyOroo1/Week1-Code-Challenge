let marks = parseInt(prompt("Enter the marks of the student")) //prompts the user to input student marks//
if (marks > 100) {
    console.log("Please enter valid marks"); alert("Please enter valid marks")
    //program should not accept marks above 100//
} else if (marks < 0) 
{ console.log("Marks cannot be negative, enter valid marks"); 
alert("Marks cannot be negative, enter valid marks") 
// program should not accept marks below 0//
} else if (marks > 79) { grade = "A" } else if (marks >= 60) {
    grade = "B"
} else if (marks >= 49) { grade = "C" } else if (marks >= 40) {
    grade = "D"
} else { grade = "E" }
//program assign grade according to marks input// 
console.log(`Your grade is ${grade}`)
alert(`Your grade is ${grade}`)
//program should display the grade assigned//




