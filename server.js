const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;


class User {
    constructor() {
        this.id = faker.random.number()
        this.firstname = faker.name.firstName()
        this.lastname = faker.name.lastName()
        this.phone = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.pword = faker.internet.password()
    }
}
class Company {
    constructor() {
        this.id = faker.random.number()
        this.name = faker.company.companyName()
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res) =>{
    res.json( new User() );
});
app.get("/api/companies/new", (req, res) =>{
    res.json( new Company() );
});
app.get("/api/user/company", (req, res) =>{
    res.json( [new User(), new Company()] );
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );

