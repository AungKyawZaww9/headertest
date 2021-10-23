// UI 
const devtext = document.getElementById('devtext');
// console.log(devtext);
// const dev = document.querySelector('.dev');
// console.log(dev);

let replacetext = "Hi, I'm Developer";
let idx = 0;

function goingtext(){
    // console.log("hey");

    // console.log(idx);

    devtext.innerText = replacetext.slice(0,idx);
    idx++;

    if(idx === replacetext.length + 1){
        idx = 8;
        devtext.style.color = 'red';
    }
    

}


goingtext();
setInterval(goingtext,500);







//Slides images
const personimages = document.querySelectorAll('.person img');

// console.log(personimages.length);

let num = 0;

function improves(){
    num++;

    if(num > personimages.length - 1){
        num = 0;
    }
    // console.log(num);   

    personimages.forEach(function(personimage){
        // console.log(personimage);

        personimage.style.transform = `translate(${-num * 100}%)`;
    });

}


improves();
setInterval(improves,1500);







// //Change UserPhoto

// const person = document.getElementById('person');
// // console.log(person);

// let uri = 'https://randomuser.me/api/?results=';

// let totaluser = 3;

// async function getdata(){
//     const res =await fetch(`${uri}${totaluser}`);

//     // console.log(res);

//     // const data =await res.json();
//     // console.log(data);

//     const {results} = await res.json();
//     // console.log(results);

//     results.forEach((result)=>{

//         // console.log(result);
//         results.forEach(result=>{
//             // console.log(result);

//             person.innerHTML = `

               

//                 <img src="./img/user.jpg" width="150px" alt="user">
//                 <img src="./img/studio.jpg" width="150px" alt="user">
//                 <img src="./img/user.jpg" width="150px" alt="user"> 
            
//             `;


//         });

//         const images = person.querySelector('img');
//         // console.log(imgaes);

//         // improves(images);

//     });
// }

// // getdata();



