// variable declear
const calculationBtn = document.getElementById("calculation-btn");
const saveBtn = document.getElementById("save-btn");
let income = document.getElementById("income");
const totalIncome = parseFloat(income.value);
const totalExpense = document.getElementById("total-expense");
const balance = document.getElementById("balance");
const totalSaving = document.getElementById("totalSaving");
const remainBalance = document.getElementById("remainBalance");
const error = document.getElementById("error");


// function create
function expanseTotal(item1, item2, item3) {
    let food = document.getElementById(item1).value;
    food=parseFloat(food);
    let rent = document.getElementById(item2).value;
    rent=parseFloat(rent);
    let clothes = document.getElementById(item3).value;
    clothes=parseFloat(clothes);

    if(!isNaN(food) || !isNaN(rent) || !isNaN(clothes) || !isNaN(totalIncome)){
        if(food < 0 || rent < 0 || clothes < 0){
            error.style.display = "block";
            return 0;
        }
        let total =  food + rent + clothes;
        return total; 
        
    }else{
        error.style.display = "block";
        return 0;
    }

}

function balanceCalculation(sumOfExpense) {
    let income = document.getElementById("income").value;
        if(income !="" && income > 0) {
            const result = parseFloat(income) - sumOfExpense;
            return result; 
        }else{
            return 0
        }
}

function saveAmount() {
    let income = document.getElementById("income").value;
    income = parseFloat(income);
    let percentage = document.getElementById("save").value;
    percentage = parseFloat(percentage);
    const saveAmount = income * (percentage/100);
    return saveAmount;
}
// click event 
calculationBtn.addEventListener("click",function() {
    const sumOfExpense = expanseTotal("food", "rent", "clothes");
    const balanceResult = balanceCalculation(sumOfExpense);
    if(sumOfExpense > 0 && balanceResult > 0) {
        totalExpense.innerText = sumOfExpense;
        balance.innerText = balanceResult;
    }else{
        error.style.display = "block";
    }

});

saveBtn.addEventListener("click", function() {
    
    let balance = document.getElementById("balance").innerText;
    balance = parseFloat(balance);
    const saving = saveAmount();
    if(!isNaN(saving) && saving > 0){
        if(balance > saving){
            totalSaving.innerText = saving;
            remainBalance.innerText = parseFloat(balance) - saving;
        }else {
            document.getElementById("errorsaving").style.display = "block";
        }
    }else {
        document.getElementById("errorPercentage").style.display = "block";
    }
});
