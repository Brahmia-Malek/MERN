const express = require('express');
const faker = require('faker');

const app = express();
const port = 8000;

// Generate a random User object
const generateUser = () => ({
  password: faker.internet.password(),
  email: faker.internet.email(),
  phoneNumber: faker.phone.phoneNumber(),
  lastName: faker.name.lastName(),
  firstName: faker.name.firstName(),
  _id: faker.datatype.id(),
});

// Generate a random Company object
const generateCompany = () => ({
  _id: faker.datatype.id(),
  name: faker.company.companyName(),
  address: {
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode(),
    country: faker.address.country(),
  },
});

// Route to generate a random User object
app.get('/user', (req, res) => {
  const user = generateUser();
  res.json(user);
});

// Route to generate a random Company object
app.get('/company', (req, res) => {
  const company = generateCompany();
  res.json(company);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
