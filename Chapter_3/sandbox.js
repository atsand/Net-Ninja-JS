//------------ switch statements start------------------
const grade = 'D';

switch(grade){
    case 'A':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got an B!');
        break;
    case 'C':
        console.log('you got an C!');
        break;
    case 'D':
        console.log('you got an D!');
        break;
    case 'E':
        console.log('you got an E!');
        break;
    default:
        console.log('not a valid grade');
}


//------------ switch statements end------------------

// //------------ break and continue start------------------
// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++) {

//     if(scores[i] === 0){
//         //breaks out of current itteration and continue
//         continue;
//     }

//     console.log('your score: ', scores[i]);

//     if(scores[i] === 100){
//         console.log('congrats, you got the top score!');
//         //breaks out of outer loop and stops
//         break;
//     }
    
// }
// //------------ break and continue end------------------

// //------------ logical NOT (!) start------------------
// let user = false;

// if(!user){
//     console.log('you must be logged in to continue');
// }

// //------------ logical NOT (!) end------------------

// //------------ logical operators - || && start------------------
// const password = 'passwof@';

// if(password.length >= 12 && password.includes('@')){
//     console.log('that password is mighty strong');
// } else if(password.length >= 8 || password.includes('@') && password.length > 5){
//     console.log('that password is strong enough');
// } else{
//     console.log('that password is not strong enough');
// }
// //------------ logical operators - || && end------------------

// //------------ if statements start------------------
// // const age = 30;

// // if(age > 20){
// //     console.log('you are over 20 years old');
// // }

// // const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// // if(ninjas.length > 3){
// //     console.log("that's a lot of ninjas");
// // }

// const password = 'password';

// if(password.length >= 12){
//     console.log('that password is mighty strong');
// } else if(password.length >= 8){
//     console.log('that password is long enough');
// } else{
//     console.log('that password is not long enough');
// }
// //------------ if statements end------------------

// //------------ do while loops start------------------
// let i = 0;
// do{
//     console.log('val of i is: ', i);
//     i++;
// } while(i < 5)

// //------------ do while loops end------------------

// //------------ while loops start------------------
// //const names = ['shaun', 'mario', 'luigi'];

// // let i = 0;
// // while(i<5){
// //     console.log('in loop', i);
// //     i++;
// // }

// let i = 0;
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

// //------------ while loops end------------------

// //------------ for loops start------------------

// // for(let i = 0; i < 5; i++){
// //     console.log('inside loop: ', i);
// // }

// // console.log('loop finished');

// const names = ['shaun', 'mario', 'luigi'];

// for(let i = 0; i < names.length; i++){
//     // console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }

// console.log('loop finihed');

// //------------ for loops end------------------