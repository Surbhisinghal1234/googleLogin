import React from 'react'

function Home() {


    const logout = () =>{
        localStorage.clear()
        window.location.reload()
    }
  return (
    <>
       <div>Home</div>
       <button  >Logout</button>
    </>
 
  )
}

export default Home