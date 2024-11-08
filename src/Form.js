// import {  useNavigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Input from "./Input"
import Response from "./Response"

function Form(params) {
    const navigation = useNavigate()
    return <div>


        <Input label1={"kookko         :        "} place1={"ener"} />

        <button onClick={()=>{
            navigation('/Response12')
        }} >
         Submit
        </button>
        {/* <button onClick={() => {
            
        }}>Submit</button> */}
    </div>
}

export default Form