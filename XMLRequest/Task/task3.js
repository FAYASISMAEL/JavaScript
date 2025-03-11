function task3(){
    let putData=new XMLHttpRequest()
    putData.open("PUT","https://jsonplaceholder.typicode.com/posts/1",true)
    putData.setRequestHeader("content-type", "application/json")
    putData.onload = function(){
        if(putData.status === 200){
            console.log("success:",JSON.parse(putData.responseText));
            
        }
        else{
            console.log("failure",putData.status,putData.statusText);
            
        }
    }

    let data = JSON.stringify({
        title:"updated post title",
        body:"updated post body",
    })

    putData.send(data)
}

task3()