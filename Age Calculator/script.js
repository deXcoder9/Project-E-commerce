let userInput = document.getElementById("date")
userInput.max = new Date().toISOString().split("T")[0]
let result = document.getElementById("result")

function calculateAge(){
    let birthDate = new Date(userInput.value) 
    let date_1 = birthDate.getDate()
    let month_1 = birthDate.getMonth()
    let year_1 = birthDate.getFullYear()

    let today = new Date()
    let date_2 = today.getDate()
    let month_2 = today.getMonth()
    let year_2 = today.getFullYear()

    let date_3, month_3, year_3;

    console.log(date_1, month_1, year_1, date_2, month_2, year_2)

    year_3 = year_2 - year_1;
    if(month_2 >= month_1){
        month_3 = month_2 - month_1
    }
    else{
        year_3 -= 1
        month_3 = 12 + month_2 - month_1
    }

    if(date_2 >= date_1){
        date_3 = date_2 - date_1
    }
    else{
        month_3--
        date_3 = getDaysInMonth(year_1, month_1) + date_2 - date_1
    }

    if(month_3 < 0){
        month_3  = 11
        year_3--
    }
    result.innerHTML = `Your are <span> ${year_3}</span> years, <span>${month_3}</span> months and <span>${date_3}</span> days old!`
}

function getDaysInMonth(year, month) {
    // Month parameter in JavaScript starts from 0 (January) to 11 (December)
    const lastDay = new Date(year, month + 1, 0).getDate();
    return lastDay;
  }