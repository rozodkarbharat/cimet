function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

let count = 1;
async function sequentialDelayedCounting(limit = 5) {
    try {
        if(limit ===0){
            return 
        }
            let num = getRandomArbitrary(1000,3000).toFixed(0)
        setTimeout(()=>{
            console.log(`delayedny ${num}`);
            console.log(count++)
            sequentialDelayedCounting(limit-1)
        },num)
        

    } catch (error) {}
  }
  
  sequentialDelayedCounting(15);