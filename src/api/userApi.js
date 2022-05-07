import axios from "axios";

export const getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.get("http://localhost/v1/users")
            resolve(result)
        }catch(error){
            reject(error)
        }
    })
    
}