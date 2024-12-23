import customers from "./customer.js";

//------------- Use-Case 1: Get 'Senior Citizens' by Filtering out other customers
const seniorCitizenCatcher = (person) => person.age > 59;
const theSeniorsWhoGotBonuses = customers.filter(seniorCitizenCatcher);
console.log(theSeniorsWhoGotBonuses);

//------------- Use-Case 2: Transform the customer array with a new attribute
const newAttributeAdded = (person) => {
  // Adding a title to customer
  let title = "";
  switch (person.gender) {
    case "M":
      title = "Mr.";
      break;
    case "F" && person.married:
      title = "Mrs.";
      break;
    default:
      title = "Miss";
  }
  // Adding Customer Full name
  person["full_name"] = `${title} ${person.f_name} ${person.l_name}.`;

  return person;
};

const newCustomerList = customers.map(newAttributeAdded);

console.log("[map] Customers With Full Name = ", newCustomerList);

//-------------- Use-Case 3: Average age of 'Book' buyers
let count = 0;
let totalAgeCount = 0;

// The accumulator now stores totalAgeCount and count
let averageAgeBookBuyersGenerator = (acc, person) => {
  if (person.purchased.includes("Book")) {
    acc.totalAgeCount += person.age; // Accumulate the total age of book buyers
    acc.count++; // Count how many people bought a book
  }
  return acc; // Return the updated accumulator
};

// The initial value for reduce is an object with totalAgeCount and count
let result = customers.reduce(averageAgeBookBuyersGenerator, {
  totalAgeCount: 0,
  count: 0,
});

// Calculate the average age of book buyers
let averageAge = result.count > 0 ? result.totalAgeCount / result.count : 0;

console.log(`Customer Avg Age Purchased Book: ${Math.floor(averageAge)}`);

//--------------- Use-Case 4: Do we have a Young Customer(age less than 10 years)?
const doWeHaveYoungCustomer = customers.some((customers) => customers.age < 10);
console.log(`Some has young customers (Age>10): ${doWeHaveYoungCustomer}`);

//--------------- Use-Case 5: Who's the young customers
const whoAreTheCusomtersYounger = (person) => {
  return customers.age > 10;
};
console.log(
  "Found Young Customer:" + customers.find(whoAreTheCusomtersYounger)
);

//--------------- Use-Case 6: who are the young customers (age > 10)
const foundYoungCustomer = customers.find((customer) => {
  return customer.age < 10;
});
console.log("[find] Found Young Customer(Age < 10): ", foundYoungCustomer);

//--------------- Use-Case 6: Get the total amount spent by Married Customers
const marriedCustomers = customers.filter((customer) => {
  return customer.married;
});

const expenseMapped = marriedCustomers.map((marriedCustomer) => {
  return marriedCustomer.expense;
});

const totalExpenses = expenseMapped.reduce((accum, expense) => {
  return accum + expense;
}, 0);

console.log("Total Expense of Married Customers in INR: " + totalExpenses);

//---------Use-Case 7:  Get the total amount spent by people over 50
const totalAmountSpentBy50 = customers
  .filter((person) => person.age > 49)
  .map((person) => person.expense)
  .reduce((accum, expense) => accum + expense);

console.log("Total expense by people over 50: ", totalAmountSpentBy50);
