function checkDriverAge() {
    var age = Number (prompt("what is your age:"));

    if (age < 18){
        console.log("you are too young");
    }
    else if (age === 18){
        console.log("enjoy your first ride");
    }
    else{
        console.log("enjoy the ride");
    }
}

checkDriverAge();