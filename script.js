//syntax for js


//old
//ar variable = 'value'

//new way
//const variable2 = 'value';
//let variable3 = 'value';

//const number = 2;
//error
//number++

//let number2 = 2;
//number2 += 1;

//print()
//console.log(number2)

//strings
//const string1 = 'string'
//const string2 = "string"
//const string3 = 'string'

//example
//const string4 = `he value of number is: ${number}`
//console.log(string4)

//conditionals
//if (5 > 4) {
  //console.log('5 is greater than 4')
//} else if (5 < 4) {
  //console.log('5 is less than 4')
//} else if(5 === 5){
  //console.log('5 is equal to 5')
//} else{
  //console.log('nevermind')
//}

//loops
//let loop = 5
//while(loop > 0){
  //console.log(loop);
  //loop -= 1;
//}

//for( intialization ; loop condition ; to do after each loop)
//for(let i = 0; i < 5; i++){
  //console.log(`Currently i has value of ${i}`)
//}

//for each

//arrays
//const arr = [1,2,3,4,5];

//do something for each element
//const mappedArr = arr.map( (element) => {
  //return element + 1;
//})

//console.log(mappedArr)

//filter - apply filterto array
//const filterArr = arr.filter( (element) => {
  //return element > 2
//})
//console.log(filterArr)

//first element of arr
//console.log(arr[0]);

//add
//arr.push(6)

//remove last element
//arr.pop()

//remove any element
//arr.splice(0, 1)

//functions
//old school
//function functionName(parameter){
  //return 0;
//}

//variables functions
//const func = (parameter) => {
  //return 0;
//}

//console.log(functionName(0))
//console.log(func(0))

//select the element in html
//const header = document.querySelector('.header')
//console.log(header)
//make changes
//changing the text
//const paragraph1 = document.querySelector('.paragraph1')
//console.log(paragraph1)
//header.textContent = "This header has been changed"
//paragraph1.textContent = "This paragraph has been changed"

//changing the style
//header.style['color'] = 'blue'
//header.style['text-align'] = 'center'
//header.style['font-size'] = '36px'

//class list
//paragraph1.classList.add('red-text')

//const paragraph2 = document.querySelector('.paragraph2')
//paragraph2.classList.add('red-text')

//button actions
//let isBlack = false
//const makeBackgroundBlack = () => {
  //const body = document.querySelector('body')
  //body.style['background-color'] = isBlack ? 'white' : 'black'
  //reverse -> true to false or false to tru
  //isBlack = !isBlack
//}

//attach the action above to the button
//const button = document.querySelector('.button')
//button.addEventListener('click', makeBackgroundBlack)

//const form = document.querySelector('.form')
//const handleSubmit = (data) =>{
  //data.preventDefault()

  //const name = data.target.name.value;
  //const ssn = data.target.ssn.value;
  //const email = data.target.email.value;
  //const password = data.target.password.value;
  //console.log(
    //`${name} ${ssn} ${email} ${password}`
  //)
//}

//const jsonData = {
  //name : name,
  //ssn : ssn,
  //email : email,
  //password : password

//const table = document.querySelector('.content');
//const newRow = document.createElement('tr')
//NewRow.innerHTML = 
//}
//form.addEventListener('submit', (formData) => {
  //handleSubmit(formData)
//})

