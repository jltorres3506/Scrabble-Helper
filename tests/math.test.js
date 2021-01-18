//file that holds these function are in myFunctions/mathF.js
const {fahrenhitToCelsius,celsiusToFahrenhit, add} = require("../myFunctions/mathF.js");

test("should convert 32f to 0 c",()=>{
      const result = fahrenhitToCelsius(32);
      expect(result).toBe(0);
});

test("should convert 0 c to 32 f",()=>{
      let result = celsiusToFahrenhit(0);
      expect(result).toBe(32);
})

// using jest with a asyncronous code
/*need to specify done in callback function and then call done when
after test is run, this is one way to tell jest that its async code*/
test("async code ",(done)=>{

      setTimeout(()=>{
            expect(2).toBe(2);
            done();
      },2000)
});

//using promises
test("add two numbers, using async with with a promise",(done)=>{
      add(2,3).then((sum)=>{
            expect(sum).toBe(5)
            done();
      })
});

//using async/wait
test("using aync/await", async()=>{
      const sum = await add(10,22)
      expect(sum).toBe(32)
});


