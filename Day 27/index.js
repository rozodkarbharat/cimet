function createCounterPromise(maxCount = 3, timeoutMs = 5000) {  
  let count = 0;
  let interval;
    const promise = new Promise((resolve, reject) => {
                interval =setInterval(()=>{
                    if(count==maxCount) {
                        clearInterval(interval);
                        resolve(`Done ! Counter reached ${maxCount}`);
                    }
                    else if(count>maxCount) {
                            throw new Error("Counter exceeded")
                        
                    }
                        else{
                            count++;
                            console.log(`Count: ${count}`);
                    }
                },1000)
   
        
    });

   function cancel(){
        clearInterval(interval);
        console.log("cancelled after 2 seconds")
    }
  
    return {
        promise, cancel
    };
  }
  
  // Usage:
  const { promise, cancel } = createCounterPromise(11, 11000);
  promise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });


    setTimeout(()=>{
        cancel()
    },2000)