console.log('Client side javascript file is loaded!')

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data);
//     })
// });





let weatherform = document.querySelector('form');

let search = document.querySelector('input');
let message1 = document.querySelector('#message-1');
let message2 = document.querySelector('#message-2');


weatherform.addEventListener('submit', (e)=>{

    e.preventDefault();
    let location = search.value ;

    fetch('http://localhost:3000/weather?address='+ location).then((response) => {

    response.json().then((data)=> {
        if (data.error){
            message1.textContent = data.error;
            message2.textContent = '';
            console.log('there is an error')

        } else {
            message1.textContent = data.location;
            message2.textContent = data.forecast;
            console.log(data.location);
            console.log(data.forecast)
        }
    })
})



    console.log(location);
})