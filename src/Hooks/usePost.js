import { useState } from "react"
import { useNavigate } from "react-router-dom";

const useSignup = ()=>{

    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    
        const signup = async({name,email,year,company,linkedin,type,file})=>{
            setLoading(true);

            try{
                const res = await fetch('',{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({name,email,year,company,linkedin,type,file})
                })

                if(res.status == 200) navigate("/posted");
                const data = await res.json();

                if(data.error){
                    throw new Error(data.error);
                }
            }
            catch(error){
                console.log(error);
            }finally{
                setLoading(false);
            }
        }

        return {loading,signup};
}

export default useSignup;