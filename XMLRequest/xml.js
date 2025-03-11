// let xhr = new XMLHttpRequest()

// xhr.open("GET","https://jsonplaceholder.typicode.com/posts/1")

// xhr.onload = function(){
//     if(xhr.status === 200){
//         console.log("Success",xhr.responseText);
        
//     }
//     else{
//         console.log("Error",xhr.status,xhr.stausText);
        
//     }
// }

// xhr.send()





// xml post //

let xhr = new XMLHttpRequest()

xhr.open("POST","https://jsonplaceholder.typicode.com/posts")

xhr.setRequestHeader("content-type","application/json")

xhr.onload = function(){
    if(xhr.status === 201){
        console.log("success",xhr.responseText);
        
    }
    else{
        console.log("Error",xhr.status,xhr.statusText);
        
    }
}

let data = JSON.stringify({
    title:"My title",
    body:"My body",
    userId:101

})

xhr.send(data)