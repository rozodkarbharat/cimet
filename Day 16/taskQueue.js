class taskQueue{
    constructor(concurrency){
        this.queue = [];
        this.concurrency = concurrency;
        this.waitings = [];
        this.count=0
    }

    addTask(task){
        if(this.queue.length+1>this.concurrency){
            this.addToWaitings(task)
        }
        else{

            // this.count++;
            this.queue.push(task().then(()=>{
                // this.count--
                this.executeFromWaitings()
            }));
        }
    }
    addToWaitings(task){
        console.log("task in waiting")
        this.waitings.push(task);
    }
     executeFromWaitings(){
        if(this.waitings.length>0 ){
            this.queue.push(this.waitings.shift()().then(()=>{
                this.count--
                this.executeFromWaitings()
            }))
        }
     }

}   


const ex = new taskQueue(3);



// Simulated async tasks
const t1 = async () => { console.log('t1 started'); await delay(2000); console.log('t1 finished'); };
const t2 = async () => { console.log('t2 started'); await delay(1000); console.log('t2 finished'); };
const t3 = async () => { console.log('t3 started'); await delay(1500); console.log('t3 finished'); };
const t4 = async () => { console.log('t4 started'); await delay(1000); console.log('t4 finished'); };
const t5 = async () => { console.log('t5 started'); await delay(500); console.log('t5 finished'); };
const t6 = async () => { console.log('t6 started'); await delay(1000); console.log('t6 finished'); };


ex.addTask(t1)
ex.addTask(t2)
ex.addTask(t3)
ex.addTask(t4)
ex.addTask(t5)
ex.addTask(t6)


function delay(time){
   return new Promise((res,reject)=>{
        setTimeout(()=>{
            res("")
        },time)
    })
}