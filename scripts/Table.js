
const addTransactionBtn = document.getElementById('add-transaction-btn');
const transactionModal = document.getElementById('transaction-modal');
const closeModalBtn = document.getElementById('close-modal');
const transactionForm = document.getElementById('transaction-form');
const transactionsContainer = document.getElementById('transactions-container');
const chartWeekBtn = document.getElementById('chart-week');
const chartMonthBtn = document.getElementById('chart-month');
const chartYearBtn = document.getElementById('chart-year');
const balanceEl = document.getElementById('current-balance');
const monthlyIncomeEl = document.getElementById('monthly-income');
const monthlyExpensesEl = document.getElementById('monthly-expenses');


const financialData = {
    weekly: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        income: [0, 0, 850, 0, 0, 170, 0],
        expenses: [25, 87.32, 0, 95.40, 14.99, 65.80, 30]
    },
    monthly: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        income: [3500, 850, 170, 0],
        expenses: [950, 320, 280, 180]
    },
    yearly: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        income: [4200, 4200, 4520, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        expenses: [1350, 1420, 1279, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
};






(async function () {
    const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 0 },
        { year: 2014, count: 323 },
        { year: 2015, count: 20 },
        { year: 2016, count: 2 },
    ];

    new Chart(
        document.getElementById('acquisitions'),
        {
            type: 'line',
            data: {
                labels: data.map(row => row.year),
                datasets: [
                    {
                        label: 'Acquisitions by year',
                        data: data.map(row => row.count)
                    }
                ]
            }
        }
    );
})();
