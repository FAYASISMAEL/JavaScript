let postData = new XMLHttpRequest();

postData.open("POST","https://jsonplaceholder.typicode.com/posts", true)
postData.setRequestHeader("Content-Type","application/json")
postData.onload = function(){
    if(postData.status === 201){
        console.log("success:",JSON.parse(postData.responseText));
        
    }
    else{
        console.log("failure:",postData.status,postData.statusText);
        
    }    
};

postData.onerror = function () {
    console.error("Network error occurred while creating post");
};


let data = JSON.stringify({
    title:"New Post",
    body:"This is a new post created using XMLHttpRequest",
    userId:1
});

postData.send(data);