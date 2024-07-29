import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {auth} from "./Firebase"
import {toast} from "react-toastify"
function SignIn() {


    function googleLogin(){
        const provider = new GoogleAuthProvider()
        signInWithPopup (auth, provider).then((async(result)=>{
            console.log(result)
            if(result.user){
                toast.success("User logged in Successfully",{
                    position:"top-center"
                })
                window.location.href = "/profile"
            }
        }))
    }
  return (
    <>
    <button onClick={googleLogin} >Button</button>
    </>
  )
}

export default SignIn