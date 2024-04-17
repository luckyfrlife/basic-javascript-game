// const btn = document.querySelector("button")
// btn.onclick = ()=>{
//     const Usertext = alert("Please click to play game: ")
//     let number = prompt("please enter your suggested number")
//     alert(`wait while we check your answer`)
//     const answer = Math.floor(Math.random() * 10)
//     if (number === answer){
//         alert(`you are correct!!`);
//     }
//     else{
//         alert(`you are wrong!!`);
//         alert(`Correct answer is ${answer}`);
//     }
// }
// const input = document.getElementById("input").value;
// const btn = document.querySelector("button")
// btn.onclick = ()=>{
//     const randomNumber = Math.floor(Math.random() * 10)
//     const userNumber = parseInt(input.value)

//     if(randomNumber === userNumber){
//         document.body.style.backgroundColor = "green"
//         alert("You won a medal")
//     }else{
//         document.body.style.backgroundColor = "red"
//         alert("You might win if you try again")
//     }
// alert(`Computer Guess ${randomNumber} \n Your Guess ${UserNumber}`)
// }
const input = document.querySelector("#input");
const btn = document.querySelector("button");
btn.onclick = () => {
  const randomNumber = Math.floor(Math.random() * 10);
  const userNumber = parseInt(input.value);
  console.log(input.value);
  if (randomNumber === userNumber) {
    document.body.style.backgroundColor = "green";
    alert("you won a medal");
  } else {
    document.body.style.backgroundColor = "red";
    alert("you might win if you try again");
  }
  alert(`computer Guess ${randomNumber} \n your Guess is ${userNumber}`);
};
