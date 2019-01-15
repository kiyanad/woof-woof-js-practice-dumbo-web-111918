document.addEventListener('DOMContentLoaded',() => {
  fetch("http://localhost:3000/pups")
  .then(res => res.json())
  .then(data => showDogs(data))
})

function showDogs(dogs){

  dogBar = document.querySelector("#dog-bar")
  dogBar.innerHTML = ""
  dogs.forEach(appendDogToDom)

  document.querySelector("#dog-bar").addEventListener('click', function(event){
    if (event.target.className.includes("doggy")) {
      findDog(event.target.getAttribute('data-id'), dogs)
    }
  })

  document.querySelector("#filter-div").addEventListener('click', function(event) {
  if (event.target.className.includes("good-dog-filter")) {
    // if(event.target.innerText == "Filter good dogs: OFF"){
      filterDog(dogs, event.target)
    // } else {
      // console.log();
    // }
  }


})
}



// function showGoodDogs(dogs){
//   dogBar.innerHTML = ""
//   dogs.forEach(function(dog){
//   dogBar = document.querySelector("#dog-bar")
//   dogSpand = document.createElement("span")
//   dogSpand.className = "doggy"
//   dogSpand.setAttribute("data-id", dog.id)
//   dogSpand.innerText = dog.name
//   // debugger
//   dogBar.append(dogSpand)
// })
//   document.querySelector("#dog-bar").addEventListener('click', function(event){
//     if (event.target.className.includes("doggy")) {
//       findDog(event.target.getAttribute('data-id'), dogs)
//     }
//   })
//
//   document.querySelector("#filter-div").addEventListener('click', function(event) {
//   if (event.target.className.includes("good-dog-filter")) {
//     filterDog(dogs)
//   }
// })
// }

function appendDogToDom(dog){
  dogBar = document.querySelector("#dog-bar")
  dogSpand = document.createElement("span")
  dogSpand.className = "doggy"
  dogSpand.setAttribute("data-id", dog.id)
  dogSpand.innerText = dog.name
  // debugger
  dogBar.append(dogSpand)
}


function filterDog(dogs, button) {
   // debugger
  let filDog = button.innerText == "Filter good dogs: OFF"
  const dogBar = document.querySelector("#dog-bar")
  if(filDog){
    goodDogs = dogs.filter(function(dog){
      return dog.isGoodDog
    })
    button.innerText = "Filter good dogs: ON"
    dogBar.innerHTML = ""
    goodDogs.forEach(appendDogToDom)
  }
  else {
     // debugger
    button.innerText = "Filter good dogs: OFF"
    dogBar.innerHTML = ""
    dogs.forEach(appendDogToDom)
  }
}


  function findDog(id, dogs){
  const myDog = dogs.find(function(dog){
      return dog.id == id

    })
    seeDog(myDog)
  }



function seeDog(dog){
  // debugger
document.querySelector("#dog-info").innerHTML = `  <img src=${dog.image}>
  <h2>${dog.name}</h2>`
  if(dog.isGoodDog == true){
  document.querySelector("#dog-info").innerHTML +=
  `<button class= "btn" data-id="${dog.id}">Good Dog!</button>` }
  else {
    document.querySelector("#dog-info").innerHTML +=
    `<button class= "btn" data-id="${dog.id}">Bad Dog!</button>`}

    document.querySelector("#dog-info").addEventListener('click', function(event){
      if(event.target.className.includes("btn")){
          // debugger
        editDog(event.target.getAttribute('data-id'), event.target)

      }
    })
  }

  function editDog(id, button){
    let becomesGoodDog = button.innerText == "Bad Dog!"
    becomesGoodDog ? button.innerText = "Good Dog!" : button.innerText = "Bad Dog!"
    fetch(`http://localhost:3000/pups/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({isGoodDog: becomesGoodDog}
    ),
      headers: {
        'Content-Type': 'application/json'
        },
      }).then (res => res.json())
  .then (data => data)
     // debugger
//     if(button.innerText == "Good Dog!"){
//     fetch(`http://localhost:3000/pups/${id}`, {
//       method: 'PATCH',
//       body: JSON.stringify({isGoodDog: false}
//     ),
//       headers: {
//         'Content-Type': 'application/json'
//         },
//       }).then (res => res.json())
//   .then (data => data)
//
//   button.innerText = "Bad Dog!"
// }
// else {
//   fetch(`http://localhost:3000/pups/${id}`, {
//     method: 'PATCH',
//     body: JSON.stringify({isGoodDog: true}
//   ),
//     headers: {
//       'Content-Type': 'application/json'
//       },
//     }).then (res => res.json())
// .then (data => data)
//
//   button.innerText = "Good Dog!"}

     // debugger
  }




  // debugger

  // debugger
