import { Box, Button, Image, Text,useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../ContextProvider/AuthContextProvider'
import { Navigate,useNavigate } from 'react-router-dom'
import axios from "axios"



const BooksDetails = ({author,country,imageLink,language,pages,title,year,_id}) => {

  const [data1,setData1]=useState([])
  const [loading,setLoading]=useState(false)
  const toast=useToast()
  const navigate=useNavigate()
  

  const {isAuth}=useContext(AuthContext)

  const handlebutton=(id)=>{
   
    if(!isAuth){
    return navigate("/login")
      // return <Navigate to="/cart" />
    }else{
      
    

    const filtereddata=data1.filter((el,i)=>{
        return el._id===id
    })

    console.log(filtereddata)
    
    axios.post(`https://crabby-ox-hoodie.cyclic.app/cart/new`,filtereddata[0])
    .then((res)=>{toast({
      title: 'Success.',
      position: 'top',
      description: `Item Added to Cart Sucessfully`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    })})
    .catch((err)=>console.log(err))
  }
}


  useEffect(()=>{
    axios.get(`https://crabby-ox-hoodie.cyclic.app/books`)
    .then((res)=>{
      setData1(res.data.books)
      setLoading(false)
    })
    
   
    .catch((err)=>{
      setLoading(false)
      console.log(err)
    })
  },[])

  return (
    <>
    
    <Box boxShadow='dark-lg'>
     <Image style={{margin: "auto"}} src={imageLink} alt=""/>
     <Text>Author: {author}</Text>
     <Text>Title: {title}</Text>
     <Text>Country: {country}</Text>
     <Text>Language: {language}</Text>
     <Text>Year: {year}</Text>
     <Button onClick={()=>handlebutton(_id)} bgColor={'aqua'} _hover={{bgColor: "aqua"}}>Add to Cart</Button>
     </Box>
    
    </>
  )
}

export default BooksDetails