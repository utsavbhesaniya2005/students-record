
let student = [
  {
    id: 1,
    name: "Daryl Hawkins",
    age: 22,
    email: "hawkins@gmail.com",
    gender: "Male",
    contact: 6728322849,
    address: "Los Angeles"
  },
  {
    id: 2,
    name: "Kate	Hill",
    age: 22,
    email: "hill@gmail.com",
    gender: "Female",
    contact: 2000507266,
    address: "Chicago"
  },
  {
    id: 3,
    name: "Tess	Cooper",
    age: 20,
    email: "cooper@gmail.com",
    gender: "Female",
    contact: 2635138382,
    address: "New York"
  },
  {
    id: 4,
    name: "Amber Higgins",
    age: 20,
    email: "higgins@gmail.com",
    gender: "Female",
    contact: 4485994890,
    address: "Houston"
  },
  {
    id: 5,
    name: "Dainton Allen",
    age: 19,
    email: "hawkins@gmail.com",
    gender: "Male",
    contact: 6056829909,
    address: "San Antonio"
  },
  {
    id: 6,
    name: "Reid	Hawkins",
    age: 18,
    email: "hawkins@gmail.com",
    gender: "Male",
    contact: 8364464686,
    address: "San Diego"
  },
  {
    id: 7,
    name: "Lenny Edwards",
    age: 23,
    email: "edwards@gmail.com",
    gender: "Male",
    contact: 2277029287,
    address: "Dallas"
  },
  {
    id: 8,
    name: "Kirsten Turner",
    age: 19,
    email: "turner@gmail.com",
    gender: "Female",
    contact: 1969688729,
    address: "Austin"
  },
  {
    id: 9,
    name: "Daisy Bailey",
    age: 24,
    email: "bailey@gmail.com",
    gender: "Female",
    contact: 6324582034,
    address: "Fort Worth"
  },
  {
    id: 10,
    name: "Alexia Chapman",
    age: 18,
    email: "chapman@gmail.com",
    gender: "Female",
    contact: 7493330788,
    address: "San Jose"
  },
  {
    id: 11,
    name: "Brooke Thomas",
    age: 19,
    email: "thomas@gmail.com",
    gender: "Female",
    contact: 5133765511,
    address: "Columbus"
  },
  {
    id: 12,
    name: "Abraham Carter",
    age: 19,
    email: "carter@gmail.com",
    gender: "Male",
    contact: 3145143082,
    address: "Charlotte"
  },
  {
    id: 13,
    name: "Daryl Riley",
    age: 20,
    email: "riley@gmail.com",
    gender: "Male",
    contact: 7857849116,
    address: "Seattle"
  },
  {
    id: 14,
    name: "James Hill",
    age: 20,
    email: "hill@gmail.com",
    gender: "Male",
    contact: 8683253904,
    address: "Oklahoma City"
  },
  {
    id: 15,
    name: "Luke	Foster",
    age: 22,
    email: "foster@gmail.com",
    gender: "Male",
    contact: 5573355846,
    address: "El Paso"
  },
  {
    id: 16,
    name: "James Chapman",
    age: 22,
    email: "chapman@gmail.com",
    gender: "Male",
    contact: 1598877994,
    address: "Las Vegas"
  },
  {
    id: 17,
    name: "Martin Edwards",
    age: 20,
    email: "edwards@gmail.com",
    gender: "Male",
    contact: 9451750754,
    address: "Detroit"
  },
  {
    id: 18,
    name: "Annabella Owens",
    age: 22,
    email: "owens@gmail.com",
    gender: "Female",
    contact: 5569829020,
    address: "Portland"
  },
  {
    id: 19,
    name: "Jessica Fowler",
    age: 20,
    email: "fowler@gmail.com",
    gender: "Female",
    contact: 6020724547,
    address: "Memphis"
  },
  {
    id: 20,
    name: "Myra	Sullivan",
    age: 18,
    email: "sullivan@gmail.com",
    gender: "Female",
    contact: 6575351042,
    address: "Milwaukee"
  },
  {
    id: 21,
    name: "Ted Alexander",
    age: 18,
    email: "alexander@gmail.com",
    gender: "Male",
    contact: 2633622253,
    address: "Albuquerque"
  },
  {
    id: 22,
    name: "Kelvin Phillips",
    age: 22,
    email: "phillips@gmail.com",
    gender: "Male",
    contact: 2797837875,
    address: "Tucson"
  },
  {
    id: 23,
    name: "Fiona Ferguson",
    age: 21,
    email: "ferguson@gmail.com",
    gender: "Female",
    contact: 5336409080,
    address: "Sacramento"
  },
  {
    id: 24,
    name: "Florrie Stewart",
    age: 21,
    email: "stewart@gmail.com",
    gender: "Female",
    contact: 6753646434,
    address: "Atlanta"
  },
  {
    id: 25,
    name: "Adison Rogers",
    age: 21,
    email: "rogers@gmail.com",
    gender: "Male",
    contact: 8507287566,
    address: "Raleigh"
  }

]

let details = document.querySelector(".row");

student.forEach((rec) => (
    details.innerHTML += `
                        
                        <div class="col-4">
                            <div class="card1">
                                <div class="card" style="width: 20rem;">
                                  <div class="card-body">
                                    <h5 class="card-title text-center">Student Details</h5>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Id:- ${rec.id}</li>
                                    <li class="list-group-item">Name:- ${rec.name}</li>
                                    <li class="list-group-item">Age:- ${rec.age}</li>
                                    <li class="list-group-item">Email:- ${rec.email}</li>
                                    <li class="list-group-item">Gender:- ${rec.gender}</li>
                                    <li class="list-group-item">Contact:- ${rec.contact}</li>
                                    <li class="list-group-item">Address:- ${rec.address}</li>
                                  </ul>
                                </div>
                            </div>
                        </div>
                        `
));