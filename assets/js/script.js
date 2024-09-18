
let stud1 = {
    id: 1,
    name: "Daryl Hawkins",
    age: 22,
    email: "hawkins@gmail.com",
    gender: "Male",
    contact: 6728322849,
    address: "Los Angeles"
}

let stud2 = {
    id: 2,
    name: "Kate	Hill",
    age: 22,
    email: "hill@gmail.com",
    gender: "Female",
    contact: 2000507266,
    address: "Chicago"
}

let stud3 = {
    id: 3,
    name: "Tess	Cooper",
    age: 20,
    email: "cooper@gmail.com",
    gender: "Female",
    contact: 2635138382,
    address: "New York"
}

let stud4 = {
    id: 4,
    name: "Amber Higgins",
    age: 20,
    email: "higgins@gmail.com",
    gender: "Female",
    contact: 4485994890,
    address: "Houston"
}

let stud5 = {
    id: 5,
    name: "Dainton Allen",
    age: 19,
    email: "hawkins@gmail.com",
    gender: "Male",
    contact: 6056829909,
    address: "San Antonio"
}

let stud6 = {
    id: 6,
    name: "Reid	Hawkins",
    age: 18,
    email: "hawkins@gmail.com",
    gender: "Male",
    contact: 8364464686,
    address: "San Diego"
}

let stud7 = {
    id: 7,
    name: "Lenny Edwards",
    age: 23,
    email: "edwards@gmail.com",
    gender: "Male",
    contact: 2277029287,
    address: "Dallas"
}

let stud8 = {
    id: 8,
    name: "Kirsten Turner",
    age: 19,
    email: "turner@gmail.com",
    gender: "Female",
    contact: 1969688729,
    address: "Austin"
}

let stud9 = {
    id: 9,
    name: "Daisy Bailey",
    age: 24,
    email: "bailey@gmail.com",
    gender: "Female",
    contact: 6324582034,
    address: "Fort Worth"
}

let stud10 = {
    id: 10,
    name: "Alexia Chapman",
    age: 18,
    email: "chapman@gmail.com",
    gender: "Female",
    contact: 7493330788,
    address: "San Jose"
}

let stud11 = {
    id: 11,
    name: "Brooke Thomas",
    age: 19,
    email: "thomas@gmail.com",
    gender: "Female",
    contact: 5133765511,
    address: "Columbus"
}

let stud12 = {
    id: 12,
    name: "Abraham Carter",
    age: 19,
    email: "carter@gmail.com",
    gender: "Male",
    contact: 3145143082,
    address: "Charlotte"
}

let stud13 = {
    id: 13,
    name: "Daryl Riley",
    age: 20,
    email: "riley@gmail.com",
    gender: "Male",
    contact: 7857849116,
    address: "Seattle"
}

let stud14 = {
    id: 14,
    name: "James Hill",
    age: 20,
    email: "hill@gmail.com",
    gender: "Male",
    contact: 8683253904,
    address: "Oklahoma City"
}

let stud15 = {
    id: 15,
    name: "Luke	Foster",
    age: 22,
    email: "foster@gmail.com",
    gender: "Male",
    contact: 5573355846,
    address: "El Paso"
}

let stud16 = {
    id: 16,
    name: "James Chapman",
    age: 22,
    email: "chapman@gmail.com",
    gender: "Male",
    contact: 1598877994,
    address: "Las Vegas"
}

let stud17 = {
    id: 17,
    name: "Martin Edwards",
    age: 20,
    email: "edwards@gmail.com",
    gender: "Male",
    contact: 9451750754,
    address: "Detroit"
}

let stud18 = {
    id: 18,
    name: "Annabella Owens",
    age: 22,
    email: "owens@gmail.com",
    gender: "Female",
    contact: 5569829020,
    address: "Portland"
}

let stud19 = {
    id: 19,
    name: "Jessica Fowler",
    age: 20,
    email: "fowler@gmail.com",
    gender: "Female",
    contact: 6020724547,
    address: "Memphis"
}

let stud20 = {
    id: 20,
    name: "Myra	Sullivan",
    age: 18,
    email: "sullivan@gmail.com",
    gender: "Female",
    contact: 6575351042,
    address: "Milwaukee"
}

let stud21 = {
    id: 21,
    name: "Ted Alexander",
    age: 18,
    email: "alexander@gmail.com",
    gender: "Male",
    contact: 2633622253,
    address: "Albuquerque"
}

let stud22 = {
    id: 22,
    name: "Kelvin Phillips",
    age: 22,
    email: "phillips@gmail.com",
    gender: "Male",
    contact: 2797837875,
    address: "Tucson"
}

let stud23 = {
    id: 23,
    name: "Fiona Ferguson",
    age: 21,
    email: "ferguson@gmail.com",
    gender: "Female",
    contact: 5336409080,
    address: "Sacramento"
}

let stud24 = {
    id: 24,
    name: "Florrie Stewart",
    age: 21,
    email: "stewart@gmail.com",
    gender: "Female",
    contact: 6753646434,
    address: "Atlanta"
}

let stud25 = {
    id: 25,
    name: "Adison Rogers",
    age: 21,
    email: "rogers@gmail.com",
    gender: "Male",
    contact: 8507287566,
    address: "Raleigh"
}



document.querySelector(".stud-details1").innerHTML = `<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Student Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:- ${stud1.id}</li>
    <li class="list-group-item">Name:- ${stud1.name}</li>
    <li class="list-group-item">Age:- ${stud1.age}</li>
    <li class="list-group-item">Email:- ${stud1.email}</li>
    <li class="list-group-item">Gender:- ${stud1.gender}</li>
    <li class="list-group-item">Contact:- ${stud1.contact}</li>
    <li class="list-group-item">Address:- ${stud1.address}</li>
  </ul>
</div>`;

document.querySelector(".stud-details2").innerHTML = `<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Student Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:- ${stud2.id}</li>
    <li class="list-group-item">Name:- ${stud2.name}</li>
    <li class="list-group-item">Age:- ${stud2.age}</li>
    <li class="list-group-item">Email:- ${stud2.email}</li>
    <li class="list-group-item">Gender:- ${stud2.gender}</li>
    <li class="list-group-item">Contact:- ${stud2.contact}</li>
    <li class="list-group-item">Address:- ${stud2.address}</li>
  </ul>
</div>`;

document.querySelector(".stud-details3").innerHTML = `<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Student Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:- ${stud3.id}</li>
    <li class="list-group-item">Name:- ${stud3.name}</li>
    <li class="list-group-item">Age:- ${stud3.age}</li>
    <li class="list-group-item">Email:- ${stud3.email}</li>
    <li class="list-group-item">Gender:- ${stud3.gender}</li>
    <li class="list-group-item">Contact:- ${stud3.contact}</li>
    <li class="list-group-item">Address:- ${stud3.address}</li>
  </ul>
</div>`;

document.querySelector(".stud-details4").innerHTML = `<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Student Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:- ${stud4.id}</li>
    <li class="list-group-item">Name:- ${stud4.name}</li>
    <li class="list-group-item">Age:- ${stud4.age}</li>
    <li class="list-group-item">Email:- ${stud4.email}</li>
    <li class="list-group-item">Gender:- ${stud4.gender}</li>
    <li class="list-group-item">Contact:- ${stud4.contact}</li>
    <li class="list-group-item">Address:- ${stud4.address}</li>
  </ul>
</div>`;

document.querySelector(".stud-details5").innerHTML = `<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Student Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:- ${stud5.id}</li>
    <li class="list-group-item">Name:- ${stud5.name}</li>
    <li class="list-group-item">Age:- ${stud5.age}</li>
    <li class="list-group-item">Email:- ${stud5.email}</li>
    <li class="list-group-item">Gender:- ${stud5.gender}</li>
    <li class="list-group-item">Contact:- ${stud5.contact}</li>
    <li class="list-group-item">Address:- ${stud5.address}</li>
  </ul>
</div>`;

document.querySelector(".stud-details6").innerHTML = `<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Student Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:- ${stud6.id}</li>
    <li class="list-group-item">Name:- ${stud6.name}</li>
    <li class="list-group-item">Age:- ${stud6.age}</li>
    <li class="list-group-item">Email:- ${stud6.email}</li>
    <li class="list-group-item">Gender:- ${stud6.gender}</li>
    <li class="list-group-item">Contact:- ${stud6.contact}</li>
    <li class="list-group-item">Address:- ${stud6.address}</li>
  </ul>
</div>`;

document.querySelector(".stud-details7").innerHTML = `<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Student Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:- ${stud7.id}</li>
    <li class="list-group-item">Name:- ${stud7.name}</li>
    <li class="list-group-item">Age:- ${stud7.age}</li>
    <li class="list-group-item">Email:- ${stud7.email}</li>
    <li class="list-group-item">Gender:- ${stud7.gender}</li>
    <li class="list-group-item">Contact:- ${stud7.contact}</li>
    <li class="list-group-item">Address:- ${stud7.address}</li>
  </ul>
</div>`;

document.querySelector(".stud-details8").innerHTML = `<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Student Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:- ${stud8.id}</li>
    <li class="list-group-item">Name:- ${stud8.name}</li>
    <li class="list-group-item">Age:- ${stud8.age}</li>
    <li class="list-group-item">Email:- ${stud8.email}</li>
    <li class="list-group-item">Gender:- ${stud8.gender}</li>
    <li class="list-group-item">Contact:- ${stud8.contact}</li>
    <li class="list-group-item">Address:- ${stud8.address}</li>
  </ul>
</div>`;

document.querySelector(".stud-details9").innerHTML = `<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Student Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:- ${stud9.id}</li>
    <li class="list-group-item">Name:- ${stud9.name}</li>
    <li class="list-group-item">Age:- ${stud9.age}</li>
    <li class="list-group-item">Email:- ${stud9.email}</li>
    <li class="list-group-item">Gender:- ${stud9.gender}</li>
    <li class="list-group-item">Contact:- ${stud9.contact}</li>
    <li class="list-group-item">Address:- ${stud9.address}</li>
  </ul>
</div>`;

document.querySelector(".stud-details10").innerHTML = `<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Student Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:- ${stud10.id}</li>
    <li class="list-group-item">Name:- ${stud10.name}</li>
    <li class="list-group-item">Age:- ${stud10.age}</li>
    <li class="list-group-item">Email:- ${stud10.email}</li>
    <li class="list-group-item">Gender:- ${stud10.gender}</li>
    <li class="list-group-item">Contact:- ${stud10.contact}</li>
    <li class="list-group-item">Address:- ${stud10.address}</li>
  </ul>
</div>`;

document.querySelector(".stud-details11").innerHTML = `<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Student Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:- ${stud11.id}</li>
    <li class="list-group-item">Name:- ${stud11.name}</li>
    <li class="list-group-item">Age:- ${stud11.age}</li>
    <li class="list-group-item">Email:- ${stud11.email}</li>
    <li class="list-group-item">Gender:- ${stud11.gender}</li>
    <li class="list-group-item">Contact:- ${stud11.contact}</li>
    <li class="list-group-item">Address:- ${stud11.address}</li>
  </ul>
</div>`;

document.querySelector(".stud-details12").innerHTML = `<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Student Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:- ${stud12.id}</li>
    <li class="list-group-item">Name:- ${stud12.name}</li>
    <li class="list-group-item">Age:- ${stud12.age}</li>
    <li class="list-group-item">Email:- ${stud12.email}</li>
    <li class="list-group-item">Gender:- ${stud12.gender}</li>
    <li class="list-group-item">Contact:- ${stud12.contact}</li>
    <li class="list-group-item">Address:- ${stud12.address}</li>
  </ul>
</div>`;

document.querySelector(".stud-details13").innerHTML = `<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Student Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:- ${stud13.id}</li>
    <li class="list-group-item">Name:- ${stud13.name}</li>
    <li class="list-group-item">Age:- ${stud13.age}</li>
    <li class="list-group-item">Email:- ${stud13.email}</li>
    <li class="list-group-item">Gender:- ${stud13.gender}</li>
    <li class="list-group-item">Contact:- ${stud13.contact}</li>
    <li class="list-group-item">Address:- ${stud13.address}</li>
  </ul>
</div>`;

document.querySelector(".stud-details14").innerHTML = `<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Student Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:- ${stud14.id}</li>
    <li class="list-group-item">Name:- ${stud14.name}</li>
    <li class="list-group-item">Age:- ${stud14.age}</li>
    <li class="list-group-item">Email:- ${stud14.email}</li>
    <li class="list-group-item">Gender:- ${stud14.gender}</li>
    <li class="list-group-item">Contact:- ${stud14.contact}</li>
    <li class="list-group-item">Address:- ${stud14.address}</li>
  </ul>
</div>`;

document.querySelector(".stud-details15").innerHTML = `<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Student Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:- ${stud15.id}</li>
    <li class="list-group-item">Name:- ${stud15.name}</li>
    <li class="list-group-item">Age:- ${stud15.age}</li>
    <li class="list-group-item">Email:- ${stud15.email}</li>
    <li class="list-group-item">Gender:- ${stud15.gender}</li>
    <li class="list-group-item">Contact:- ${stud15.contact}</li>
    <li class="list-group-item">Address:- ${stud15.address}</li>
  </ul>
</div>`;

document.querySelector(".stud-details16").innerHTML = `<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Student Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:- ${stud16.id}</li>
    <li class="list-group-item">Name:- ${stud16.name}</li>
    <li class="list-group-item">Age:- ${stud16.age}</li>
    <li class="list-group-item">Email:- ${stud16.email}</li>
    <li class="list-group-item">Gender:- ${stud16.gender}</li>
    <li class="list-group-item">Contact:- ${stud16.contact}</li>
    <li class="list-group-item">Address:- ${stud16.address}</li>
  </ul>
</div>`;

document.querySelector(".stud-details17").innerHTML = `<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Student Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:- ${stud17.id}</li>
    <li class="list-group-item">Name:- ${stud17.name}</li>
    <li class="list-group-item">Age:- ${stud17.age}</li>
    <li class="list-group-item">Email:- ${stud17.email}</li>
    <li class="list-group-item">Gender:- ${stud17.gender}</li>
    <li class="list-group-item">Contact:- ${stud17.contact}</li>
    <li class="list-group-item">Address:- ${stud17.address}</li>
  </ul>
</div>`;

document.querySelector(".stud-details18").innerHTML = `<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Student Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:- ${stud18.id}</li>
    <li class="list-group-item">Name:- ${stud18.name}</li>
    <li class="list-group-item">Age:- ${stud18.age}</li>
    <li class="list-group-item">Email:- ${stud18.email}</li>
    <li class="list-group-item">Gender:- ${stud18.gender}</li>
    <li class="list-group-item">Contact:- ${stud18.contact}</li>
    <li class="list-group-item">Address:- ${stud18.address}</li>
  </ul>
</div>`;

document.querySelector(".stud-details19").innerHTML = `<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Student Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:- ${stud19.id}</li>
    <li class="list-group-item">Name:- ${stud19.name}</li>
    <li class="list-group-item">Age:- ${stud19.age}</li>
    <li class="list-group-item">Email:- ${stud19.email}</li>
    <li class="list-group-item">Gender:- ${stud19.gender}</li>
    <li class="list-group-item">Contact:- ${stud19.contact}</li>
    <li class="list-group-item">Address:- ${stud19.address}</li>
  </ul>
</div>`;

document.querySelector(".stud-details20").innerHTML = `<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Student Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:- ${stud20.id}</li>
    <li class="list-group-item">Name:- ${stud20.name}</li>
    <li class="list-group-item">Age:- ${stud20.age}</li>
    <li class="list-group-item">Email:- ${stud20.email}</li>
    <li class="list-group-item">Gender:- ${stud20.gender}</li>
    <li class="list-group-item">Contact:- ${stud20.contact}</li>
    <li class="list-group-item">Address:- ${stud20.address}</li>
  </ul>
</div>`;

document.querySelector(".stud-details21").innerHTML = `<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Student Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:- ${stud21.id}</li>
    <li class="list-group-item">Name:- ${stud21.name}</li>
    <li class="list-group-item">Age:- ${stud21.age}</li>
    <li class="list-group-item">Email:- ${stud21.email}</li>
    <li class="list-group-item">Gender:- ${stud21.gender}</li>
    <li class="list-group-item">Contact:- ${stud21.contact}</li>
    <li class="list-group-item">Address:- ${stud21.address}</li>
  </ul>
</div>`;

document.querySelector(".stud-details22").innerHTML = `<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Student Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:- ${stud22.id}</li>
    <li class="list-group-item">Name:- ${stud22.name}</li>
    <li class="list-group-item">Age:- ${stud22.age}</li>
    <li class="list-group-item">Email:- ${stud22.email}</li>
    <li class="list-group-item">Gender:- ${stud22.gender}</li>
    <li class="list-group-item">Contact:- ${stud22.contact}</li>
    <li class="list-group-item">Address:- ${stud22.address}</li>
  </ul>
</div>`;

document.querySelector(".stud-details23").innerHTML = `<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Student Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:- ${stud23.id}</li>
    <li class="list-group-item">Name:- ${stud23.name}</li>
    <li class="list-group-item">Age:- ${stud23.age}</li>
    <li class="list-group-item">Email:- ${stud23.email}</li>
    <li class="list-group-item">Gender:- ${stud23.gender}</li>
    <li class="list-group-item">Contact:- ${stud23.contact}</li>
    <li class="list-group-item">Address:- ${stud23.address}</li>
  </ul>
</div>`;

document.querySelector(".stud-details24").innerHTML = `<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Student Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:- ${stud24.id}</li>
    <li class="list-group-item">Name:- ${stud24.name}</li>
    <li class="list-group-item">Age:- ${stud24.age}</li>
    <li class="list-group-item">Email:- ${stud24.email}</li>
    <li class="list-group-item">Gender:- ${stud24.gender}</li>
    <li class="list-group-item">Contact:- ${stud24.contact}</li>
    <li class="list-group-item">Address:- ${stud24.address}</li>
  </ul>
</div>`;

document.querySelector(".stud-details25").innerHTML = `<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title text-center">Student Details</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:- ${stud25.id}</li>
    <li class="list-group-item">Name:- ${stud25.name}</li>
    <li class="list-group-item">Age:- ${stud25.age}</li>
    <li class="list-group-item">Email:- ${stud25.email}</li>
    <li class="list-group-item">Gender:- ${stud25.gender}</li>
    <li class="list-group-item">Contact:- ${stud25.contact}</li>
    <li class="list-group-item">Address:- ${stud25.address}</li>
  </ul>
</div>`;