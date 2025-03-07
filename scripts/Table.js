// Sample data
const finance = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  date: new Date().toLocaleDateString(),
  category: `${i}`,
  description: `${i + 1}`,
  amount: `${i + 1}`,
  account: `${i + 1}`,
  type: i % 2 === 0 ? "Income" : "Expense",
  payement: i % 4 === 0 ? "Online" : "Cash"
}));

function cheakPayement() {
  if (finance.payement === 'Cash') {
    document.getElementById("payement-type").innerHTML = "Cash";
    cheakPayement();

  }
}

buildTable(finance);

function buildTable(data) {
  let tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  data.forEach((item) => {
    let row = document.createElement("tr");
    row.setAttribute("id", `row-${item.id}`);

    row.innerHTML = `
          <td class="border px-4 py-2">${item.id}</td>
          <td class="border px-4 py-2" id="date-${item.id}">${item.date}</td>
          <td class="border px-4 py-2" id="category-${item.id}">${item.category}</td>
          <td class="border px-4 py-2" id="description-${item.id}">${item.description}</td>          
          <td class="border px-4 py-2" id="amount-${item.id}">${item.amount}</td>
          <td class="border px-4 py-2" id="type-${item.id}">${item.type}</td>
          <td class="border px-4 py-2" id="payement-${item.id}">${item.payement}</td>
      
          <td class="border px-4 py-2">
              <button class="bg-red-500 text-white px-3 py-1 rounded" onclick="deleteRow(${item.id})">
                  Delete
              </button>
              <button class="bg-blue-500 text-white px-3 py-1 rounded" onclick="updateRow(${item.id})">
                  Edit
              </button>
          </td>
      `;

    tableBody.appendChild(row);
  });
}

function deleteRow(id) {
  let row = document.getElementById(`row-${id}`);
  if (row) row.remove();

  // Also remove from the data array
  const index = finance.findIndex(item => item.id === id);
  if (index !== -1) {
    finance.splice(index, 1);
  }
}

function updateRow(id) {
  let user = finance.find((item) => item.id === id);
  if (!user) return;
  document.getElementById("editId").value = id;
  document.getElementById("editDescription").value = user.description;
  document.getElementById("editCategory").value = user.category;
  document.getElementById("editPayment").value = user.payement;
  document.getElementById("editModal").classList.remove("hidden");
}

function saveChanges() {
  let id = parseInt(document.getElementById("editId").value);
  let newDescription = document.getElementById("editDescription").value.trim();
  let newCategory = document.getElementById("editCategory").value.trim();
  let newPayement = document.getElementById("editPayment").value.trim();

  if (!newDescription || !newCategory || !newPayement) {
    alert("Invalid input");
    return;
  }

  let user = finance.find((item) => item.id === id);
  if (user) {
    user.description = newDescription;
    user.category = newCategory;
    user.payement = newPayement;

    document.getElementById(`description-${id}`).innerText = newDescription;
    document.getElementById(`category-${id}`).innerText = newCategory;
    document.getElementById(`payement-${id}`).innerText = newPayement;
  }

  closeModal();
}

function closeModal() {
  document.getElementById("editModal").classList.add("hidden");
}

// Form toggling
document.getElementById("add").addEventListener("click", function () {
  const formElement = document.getElementById("form");
  formElement.classList.toggle("hidden");
});

// Transaction form submission
document.getElementById("transactionForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;
  const amount = document.getElementById("amount").value;
  const type = document.getElementById("type").value;
  const paymentMethod = document.getElementById("paymentMethod").value;

  // Create new transaction
  const newTransaction = {
    id: finance.length > 0 ? Math.max(...finance.map(item => item.id)) + 1 : 0,
    date: new Date().toLocaleDateString(),
    category: category,
    description: description,
    amount: parseFloat(amount),
    type: type,
    payement: paymentMethod
  };

  // Add to finance array
  finance.push(newTransaction);

  // Rebuild table
  buildTable(finance);

  // Reset form
  document.getElementById("transactionForm").reset();
  document.getElementById("form").classList.add("hidden");
});