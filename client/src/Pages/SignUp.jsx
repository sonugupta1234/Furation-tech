import React from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Box,
    Heading,
    InputGroup,
    InputLeftAddon,
    Button,
    useToast,
    Image
  } from '@chakra-ui/react'
import { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'


export const SignUp = () => {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [number,setNumber]=useState(0)
    const [gender,setGender]=useState("")
    const toast=useToast()
    const toast1=useToast()
    const navigate=useNavigate()
    
    const payload={
        name: name,
        email: email,
        password: password,
        gender:gender,
        number: number
      }

      

    const handleSubmit=()=>{
      // console.log(payload)
      axios.post("https://crabby-ox-hoodie.cyclic.app/user/register", payload)
      .then((res)=>toast({
        title: 'Account created.',
        position: 'top',
        description: "We've created your account for you.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      }))
      .catch((error)=> toast1({
        title: ' Error ',
        position: 'top',
        description: 'User already exists , please Login',
        status: 'error',
        duration: 5000,
        isClosable: true,
      }))

       
    }

  return (
    <>
    <Navbar />
    
    <Box backgroundColor="#FDEFEC">
  <Box style={{width: "30%", textAlign: 'center', margin: 'auto', boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
    <Image width="100%" src="data:image/jpeg;base64,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" alt=""/>
    <Heading>SignUp</Heading>
    {/* <form onSubmit={handleSubmit} id="new-form"> */}
    <FormControl  isRequired style={{width: "90%", marginLeft: "17px"}}>
      <FormLabel>Name</FormLabel>
      <Input placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} required/>
      <FormLabel>Email</FormLabel>
      <Input type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} required/>
     
      <FormLabel>Password</FormLabel>
      <Input type="password" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} required/>
      <FormLabel>Gender</FormLabel>
      <Input type="text" placeholder='Enter Gender' onChange={(e)=>setGender(e.target.value)} required/>
      <FormLabel>Phone</FormLabel>
      <InputGroup>
     
      <InputLeftAddon children='+91' />
      <Input type='number' placeholder='Enter number' onChange={(e)=>setNumber(e.target.value)} required/>
     </InputGroup>
     
     <Link to="/login"> <Button mt={6} id="new-form" type="submit"  width="100%" onClick={handleSubmit} backgroundColor="#FF3F6C" _hover={{backgroundColor: "#FF3F6C"}}>Submit</Button></Link>
    </FormControl>
    {/* </form> */}
  </Box>
  </Box>
  </>
  )
}
