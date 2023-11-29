
const input=document.getElementById('input');

const output=document.getElementById('output');
const submit=document.getElementById('submit');
const span=document.getElementById('span');

let show=0;
input.addEventListener('change',(e)=>{
 
    show=parseInt(e.target.value)
   

})
input.addEventListener('click',()=>{
    span.style.height=`0%`;
    output.value=`°F`;
    
})

submit.addEventListener('click',()=>{

    if(show){
        let temp=0;
        temp=(show*9/5)+32;
        
        
        output.value=`${temp} °F`;
        
        span.style.height=`70%`
      
    }
    else if(show===0){
        let temp=0;
        temp=(show*9/5)+32;
        span.style.height=`70%`     
        output.value=`${temp} °F`;
           
    }
})


