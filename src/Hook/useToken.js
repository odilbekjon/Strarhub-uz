import { useContext } from "react";
import { Context } from "./../Context/AutoContext";

function useToken(){

    const { token, setToken } = useContext(Context)

    return [ token, setToken ]
    
}

export default useToken ;