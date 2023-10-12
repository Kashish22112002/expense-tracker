// Dummy array to simulate expenses (in a real app, this data would be fetched from a database)
let expenses = [];

function addExpense() {
    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (description && !isNaN(amount)) {
        const expense = {
            description,
            amount
        };

        expenses.push(expense);

        // Clear input fields
        document.getElementById("description").value = "";
        document.getElementById("amount").value = "";

        // Update the expense list
        updateExpenseList();
    }
}

function updateExpenseList() {
    const expenseList = document.getElementById("expense-list");
    expenseList.innerHTML = "";

    expenses.forEach((expense, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${expense.description}</strong> - $${expense.amount} <button onclick="removeExpense(${index})">Remove</button>`;
        expenseList.appendChild(li);
    });
}

function removeExpense(index) {
    expenses.splice(index, 1);
    updateExpenseList();
}

// Initial update of the expense list
updateExpenseList();
