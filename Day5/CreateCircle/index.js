let canvas = document.getElementsByClassName('canvas')[0];
let redo = document.getElementById('redo');
let undo = document.getElementById('undo');
let reset = document.getElementById('reset');
let dotsArray = []

let history = []

canvas.addEventListener('click',(e)=>{
    let x = e.pageX;
    let y = e.pageY;

    var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    dotsArray.push({x,y,'color':randomColor})
    history=[]
    displayPoints();
})

undo.addEventListener('click',()=>{
    history.push(dotsArray.pop());
    displayPoints()
})


redo.addEventListener('click',()=>{
    dotsArray.push(history.pop());
    displayPoints()
})

reset.addEventListener('click',()=>{
    history = []
    dotsArray = []
    displayPoints()
})


function disableButton () {
    if(dotsArray.length ===0 ){
        undo.setAttribute('disabled',true);
        redo.setAttribute('disabled',true);
        reset.setAttribute('disabled',true);
        return;
    }
    undo.removeAttribute('disabled');
    reset.removeAttribute('disabled');

    if(history.length !== 0){
        redo.removeAttribute('disabled');
    }else{
        redo.setAttribute('disabled',true);

    }

}


function displayPoints () {
    canvas.innerHTML = ""
    disableButton();
    workingCircle.forEach(ele=>{
        const points = document.createElement('div');
        points.classList.add('pointer');
        points.setAttribute('style',`top:${ele.y}px; left:${ele.x}px; background-color:${ele.color}`)
        canvas.append(points)   
    })
}


disableButton();