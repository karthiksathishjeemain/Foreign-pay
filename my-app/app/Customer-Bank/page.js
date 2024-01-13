'use client'
import Link from 'next/link'
import { useState } from 'react';

export default  function ConsumerSignup() {
const [username, setusername] = useState('')
const [upiAddress, setUPI] = useState('')
const [PhoneNumber, setPhoneNumber] = useState('')
const [userPassword, setPassword] = useState('')
const [member, setMember] = useState(0)
const [user, setUser] = useState({})
const handleUsername = (e) =>{
  setusername(e.target.value)
  console.log(username)
}
const handleUPI = (e) =>{
  setUPI(e.target.value)
  console.log(upiAddress)
}
const handlePhoneNumber = (e) =>{
  setPhoneNumber(e.target.value)    
  console.log(PhoneNumber)
}
const handlePassword = (e) =>{
  setPassword(e.target.value)
  console.log(userPassword)
}
const handleSubmit = (e) =>{  
  e.preventDefault()
  console.log("Submitted")    
  console.log(username)
  console.log(upiAddress)
  console.log(PhoneNumber)
  console.log(userPassword)
  // setMember(member+1);
  setUser({username,upiAddress,PhoneNumber,userPassword})
  
}
  


    return (
      <div>
        <h1>Consumert Signup</h1>
        <form>
        <label>username:</label>
          <input type="text" value={username} name="Name" onChange={handleUsername} required/>
          <br />
          <label>UPI ID:</label>
          <input type="text" value={upiAddress} name="UPI ID" onChange={handleUPI} required />
          <br />
          <label>Phone Number:</label>
          <input type="text" value={PhoneNumber} name="Phone Number" onChange={handlePhoneNumber} required/>
          <br />
          <label>Enter Password(set strong password)</label>
          <input type ="password" value ={userPassword}name="Password" onChange={handlePassword} required/>
          <br />
       < button onClick={handleSubmit} className="px-4 py-2 font-semibold text-white bg-red-500 rounded">Add Consumer</button>
        </form>
      <div>
        Member: {member}</div>
      <p>Visit the login page after completing the process</p>
      <Link href="../Consumer">Login</Link>
      </div>
      
    );
  }

 
