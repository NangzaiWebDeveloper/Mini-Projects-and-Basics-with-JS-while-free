async function fetchData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json()
        console.log(data);
    }
    catch(error){
        console.error("Find a error : " + error);
    }
}

fetchData()