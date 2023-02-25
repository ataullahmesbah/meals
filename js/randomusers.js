const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

const displayUsers = user => {

    const genderTag = document.getElementById('gender')
    genderTag.innerHTML = user.results[0].gender;

    const name = user.results[0].name.first + ' ' +user.results[0].name.last;
    document.getElementById('name').innerHTML = name;

    const location = user.results[0].location.city;
    document.getElementById('location').innerHTML = location;

    const picture = user.results[0].picture.medium;
    document.getElementById('picture').innerHTML = picture;


    console.log(user.results[0].picture.medium);
}

loadUser();