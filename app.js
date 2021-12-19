const brooklyn = document.getElementById("brooklyn")
const manhattan = document.getElementById("manhattan")
const queens =  document.getElementById("queens")
const bronx = document.getElementById("bronx")
const staten = document.getElementById("staten")
const complaintDiv = document.getElementById("complaint")
const resolveDiv = document.getElementById("resolve")
const resolveDocDiv = document.getElementById("resolveDoc")
const quantity = document.getElementById("quantity")
const displayResolve = document.getElementById("displayResolve")

// if(displayResolve>0){ 
// displayResolve.addEventListener("click", ()=>{
//     if (resolveDocDiv.className == "open"){
//         //shrink the box
//         resolveDocDiv.innerHTML =''
//         // resolveDiv.innerHTML = "Show Resolve"
//     }else
//         //expand the box
//         resolveDocDiv.className = "open"
//         // resolveDiv.innerHTML = "Hide Resolve"
//     })
// }else
console.log("this didnt work");
    brooklyn.addEventListener("click", ()=>{
        complaintDiv.innerHTML =''
        resolveDiv.innerHTML = ''
        resolveDocDiv.innerHTML=''


        let num = Number(quantity.value)
        const brooklynComplaints = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=${num}&borough=BROOKLYN`
    
        fetch(brooklynComplaints)
        .then((response)=> response.json())
        .then ((brooklynInfo)=>{
            for(let i =0;i<brooklynInfo.length;i++){
                let problem = brooklynInfo[i].descriptor
                let resolution = brooklynInfo[i].resolution_description
                
                complaintDiv.innerHTML += `<p>${problem}<p>`
                resolveDiv.innerHTML += `<button id="displayResolve" >NYPD Resolve</button>`


                
                // if(displayResolve>0){ 
                // displayResolve.addEventListener("click", ()=>{
                //     if (resolveDocDiv.className == "open"){
                //         //shrink the box
                //         resolveDocDiv.innerHTML =''
                //         // resolveDiv.innerHTML = "Show Resolve"
                //     }else
                //         //expand the box
                //         resolveDocDiv.className = "open"
                //         // resolveDiv.innerHTML = "Hide Resolve"
                //     })
                // }else

                resolveDocDiv.innerHTML+=`<p>${resolution}<p>`
                
            }
               
        }).catch((error)=>{
            console.log(error);
        })
    })


manhattan.addEventListener("click", ()=>{
    complaintDiv.innerHTML =''
    resolveDiv.innerHTML = ''
    resolveDocDiv.innerHTML=''
    num = Number(quantity.value)
   const manhattanComplaints = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=${num}&borough=MANHATTAN`

   fetch(manhattanComplaints)
   .then((response)=> response.json())
   .then ((manhattanInfo)=>{
       for(let i =0;i<manhattanInfo.length;i++){
           let problem = manhattanInfo[i].descriptor
           let resolution = manhattanInfo[i].resolution_description
           complaintDiv.innerHTML += `<p>${problem}<p>`
           resolveDiv.innerHTML += `<button>NYPD Resolve</button>`
           resolveDocDiv.innerHTML+=`<p>${resolution}<p>`
           
       }
          
   }).catch((error)=>{
    console.log(error);
})
})



bronx.addEventListener("click", ()=>{
    complaintDiv.innerHTML =''
    resolveDiv.innerHTML = ''
    resolveDocDiv.innerHTML=''
     num = Number(quantity.value)
    const bronxComplaints = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=${num}&borough=BRONX`

    fetch(bronxComplaints)
    .then((response)=> response.json())
    .then ((bronxInfo)=>{
        for(let i =0;i<bronxInfo.length;i++){
            let problem = bronxInfo[i].descriptor
            let resolution = bronxInfo[i].resolution_description
            complaintDiv.innerHTML += `<p>${problem}<p>`
            resolveDiv.innerHTML += `<button>NYPD Resolve</button>`
            resolveDocDiv.innerHTML+=`<p>${resolution}<p>`
            
        }
           
    }).catch((error)=>{
        console.log(error);
    })
})


queens.addEventListener("click", ()=>{
    complaintDiv.innerHTML =''
    resolveDiv.innerHTML = ''
    resolveDocDiv.innerHTML=''
    num = Number(quantity.value)
   const queensComplaints = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=${num}&borough=QUEENS`

   fetch(queensComplaints)
   .then((response)=> response.json())
   .then ((queensInfo)=>{
       for(let i =0;i<queensInfo.length;i++){
           let problem = queensInfo[i].descriptor
           let resolution = queensInfo[i].resolution_description
           complaintDiv.innerHTML += `<p>${problem}<p>`
           resolveDiv.innerHTML += `<button>NYPD Resolve</button>`
           resolveDocDiv.innerHTML+=`<p>${resolution}<p>`
           
       }
          
   }).catch((error)=>{
    console.log(error);
})
})

staten.addEventListener("click", ()=>{
    complaintDiv.innerHTML =''
    resolveDiv.innerHTML = ''
    resolveDocDiv.innerHTML=''
    num = Number(quantity.value)
   const statenComplaints = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=${num}&borough=STATEN%20ISLAND`

   fetch(statenComplaints)
   .then((response)=> response.json())
   .then ((statenInfo)=>{
       for(let i =0;i<statenInfo.length;i++){
           let problem = statenInfo[i].descriptor
           let resolution = statenInfo[i].resolution_description
           complaintDiv.innerHTML += `<p>${problem}<p>`
           resolveDiv.innerHTML += `<button>NYPD Resolve</button>`
           resolveDocDiv.innerHTML+=`<p>${resolution}<p>`
            
       }     
   }).catch((error)=>{
       console.log(error);
   })
})
