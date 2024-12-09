import customers from "./customer.js";

//---------- Use-Case 1: Get 'Senior Citizens' by Filtering out other customers
const seniorCitizenCatcher = (person) => person.age > 59;
const theSeniorsWhoGotBonuses = customers.filter(seniorCitizenCatcher);
console.log(theSeniorsWhoGotBonuses);

//---------- Use-Case 2: Transform the customer array with a new attribute
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
