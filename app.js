//Creating a constant variable named kelvin and assigning it the value 293
const kelvin = 0;
//kelvin to celsius conversion
const celsius= kelvin - 273;
//celsius to fahrenheit conversion
let fahrenheit= celsius * (9/5) + 32;
//round dow fahrenheit value to integer
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// Convert to Newton
let newton = celsius * (33 / 100);
 
// Round down
newton = Math.floor(newton);
 
console.log(`The temperature is ${newton} degrees Newton.`);