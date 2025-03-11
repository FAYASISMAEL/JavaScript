function fetchPost(){
    const url = "https://jsonplaceholder.typicode.com/posts"

    fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
    })
    .then(data => {
        console.log(`fetched posts:`, data);
    })
    .catch(error =>{
        console.log(`error:`,error.message);
        
    })
}

fetchPost()