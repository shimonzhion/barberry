


const BARBERS_API = 'https://my-json-server.typicode.com/shimonzhion/jsonBarber/barbers'
export const barbersService=async()=>{
    try {
        return await fetch(BARBERS_API).then(res=>res.json())    
    } catch (error) {
        console.log(error);
    }
    
}