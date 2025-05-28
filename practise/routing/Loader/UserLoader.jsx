export const userLoader=async()=>{
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/posts");
        return await response.json();
    }
    catch(error){
        console.log(error.message);
    }
}
export const singleLoader=async({params})=>{
    try{
        const {id}=params;
        const response=await fetch("https://jsonplaceholder.typicode.com/posts/"+id);
        return await response.json();
    }
    catch(error){
        console.log(error.message);
    }
}