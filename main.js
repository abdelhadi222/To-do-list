const inp = document.querySelector('.one .rrt')

const plus = document.querySelector('.plus')

const task = document.querySelector('.chiTow')

const noTsk  = document.querySelector('.task')
const taskCompri  = document.querySelector('.blue')
const taskNum = document.querySelector('.rose')
const dAll = document.querySelector('.delall')

window.onload = function () {
     inp.focus()
}

plus.onclick = (()=>{
    
// let u = inp.value

    if (inp.value === ""){
       swal("warning","your Input is Null","warning")
    }
    else{
          // const noTsk  = document.querySelector('.task')
          if(document.body.contains(document.querySelector('.task'))){
          noTsk.remove()
          }



         let rt=document.querySelectorAll('.task-one p')
  
              for(let i=0 ; i<rt.length;i++){
              if(inp.value === rt[i].innerText){
              swal("warning","your wirte input is exist deja","warning")
              inp.value =''
              break;
   
  }
}

       if(inp.value !== ''){

           const creDiv = document.createElement('div')
        creDiv.classList.add('task-one')

        const credelte = document.createElement('button')
        credelte.classList.add('span')
        const ktibBUtton = document.createTextNode('delet')

           const cremodif = document.createElement('button')
        cremodif.className = ('spa')
        const ktibModif = document.createTextNode('Modi')
         cremodif.appendChild(ktibModif)
      




        const crP = document.createElement('p')
        crP.style = 'cursor: pointer;'
        const ktib = document.createTextNode(inp.value)



 
 
  // cre butto to delet all : 


 
    // const creBudeltALL = document.createElement('button')
    //     cremodif.classList.add('spa')
    //     const creBudeltALLKtiba = document.createTextNode('delet ALL')
    //      creBudeltALL.appendChild(creBudeltALLKtiba)
    //      document.body.appendChild(creBudeltALL)



      
        crP.appendChild(ktib)
        creDiv.appendChild(crP)


        // ta3 button : 
          credelte.appendChild(ktibBUtton)
        creDiv.appendChild(credelte)
         creDiv.appendChild(cremodif)

        task.appendChild(creDiv)
  


  
        
      // document.querySelector('.zz').style = 'display:block;'
  
          inp.value = ""
          inp.focus()

          calcTask() 

       }
        console.log(task)
       
   
     
    }


    
})
 


document.addEventListener('click',((e)=>{
if (e.target.className == 'span'){
//Methode 1 :  
 e.target.parentNode.remove()
   calcTask() 



 //methode 2 :
//  document.querySelector('.task-one').remove()

}
if(task.childElementCount === 0 ){
    noTsak()
     calcTask() 
}

if (e.target.classList.contains('task-one')){
 e.target.classList.toggle('fini')
   calcTask() 
}




if(e.target.className === 'spa'){
let l 
let TheVal
l = e.target.parentNode.children[0].innerText
e.target.parentNode.children[0].innerHTML = ""

e.target.parentNode.children[0].innerHTML = `<input class='w'  type="text" value="${l}"> <button class='m'>Valid</button>`
const m = document.querySelector('.m')
const w = document.querySelector('.w')


m.onclick = (()=>{
  let valInput = w.value
  m.remove()
  w.remove()
  e.target.parentNode.children[0].innerHTML = valInput
})
}








}))
   

function noTsak() {
    const no = document.createElement('div')
    const sp = document.createElement('span')
    const text = document.createTextNode("no taks to show")
    no.className= 'task'
    sp.appendChild(text)
    no.appendChild(sp)
    task.appendChild(no)
}

function calcTask() {
    taskNum.innerHTML = document.querySelectorAll('.task-one').length
     taskCompri.innerHTML = document.querySelectorAll('.chiTow .fini').length
}





































document.addEventListener("keypress",(e)=>{

  if (e.code != "Enter") {
    return 
  }
  
    


    if (inp.value === ""){
       swal("warning","your Input is Null","warning")
    }
    else{
          const noTsk  = document.querySelector('.task')
          if(document.body.contains(document.querySelector('.task'))){
          noTsk.remove()
          }



         let rt=document.querySelectorAll('.task-one p')
  
              for(let i=0 ; i<rt.length;i++){
              if(inp.value === rt[i].innerText){
              swal("warning","your wirte input is exist deja","warning")
              inp.value =''
   
  }
}

       if(inp.value !== ''){

           const creDiv = document.createElement('div')
        creDiv.classList.add('task-one')

        const credelte = document.createElement('button')
        credelte.classList.add('span')
        const ktibBUtton = document.createTextNode('delet')

           const cremodif = document.createElement('button')
        cremodif.className = ('spa')
        const ktibModif = document.createTextNode('Modi')
         cremodif.appendChild(ktibModif)
      

  


        const crP = document.createElement('p')
        crP.style = 'cursor: pointer;'
        const ktib = document.createTextNode(inp.value)

  
 
  // cre butto to delet all : 


 
    // const creBudeltALL = document.createElement('button')
    //     cremodif.classList.add('spa')
    //     const creBudeltALLKtiba = document.createTextNode('delet ALL')
    //      creBudeltALL.appendChild(creBudeltALLKtiba)
    //      document.body.appendChild(creBudeltALL)



      
        crP.appendChild(ktib)
        creDiv.appendChild(crP)


        // ta3 button : 
          credelte.appendChild(ktibBUtton)
        creDiv.appendChild(credelte)
         creDiv.appendChild(cremodif)

        task.appendChild(creDiv)

          inp.value = ""
          inp.focus()
          calcTask() 
       }
       
     



    }


    
})



