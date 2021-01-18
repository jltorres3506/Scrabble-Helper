// tests on these function are conducted in
//tests/math.test.js

const fahrenhitToCelsius = (temp)=>{
      return (temp-32) /1.8
   }

const celsiusToFahrenhit = (temp)=>{
      return (temp * 1.8) +32
    }

//function using promise
const add = (n1, n2)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(n1<0 || n2<0){
        return reject ("no negtative numbers allowed");
      }
      resolve(n1+n2);

    },2000)
  })
}
    module.exports = {
      fahrenhitToCelsius, 
      celsiusToFahrenhit,
      add
    };