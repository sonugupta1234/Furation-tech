import { Box, Button, Flex, FormLabel, Grid, GridItem, Image, Input } from '@chakra-ui/react'
import React from 'react'
import { useState, useEffect } from 'react'
import BooksDetails from './BooksDetails'
import { useLocation,useSearchParams } from 'react-router-dom'
import axios from 'axios'






export const BooksListing = () => {

  const [loading,setLoading]=useState(false)
  const [data,setData]=useState([])
  const [data1,setData1]=useState([])
  const location=useLocation()
  const [searchparams]=useSearchParams()
  const [countryname,setCountryName]=useState("")

const getallbooks=()=>{
  // console.log(params)
  setLoading(true) 
  

    
    axios.get(`https://crabby-ox-hoodie.cyclic.app/books`,{
      params: {
       title: searchparams.getAll("title"),
       
     }
    })
    .then((res)=>{
      setData(res.data.books)
      setLoading(false)
    })
    // const response=await fetch(`http://localhost:7780/books`,params)
    // const mydata=await response.json()
    // setData(mydata.books)
   
    .catch((err)=>{
      setLoading(false)
      console.log(err)
    })
}




// console.log(obj.params)

useEffect(()=>{

 getallbooks()
 
},[location.search])






const handleChange=(e)=>{
   setCountryName(e.target.value)
}


const handleSubmit=()=>{
 
  
  axios.get(`https://crabby-ox-hoodie.cyclic.app/books/country`,{
    params: {
     country: countryname
     
   }
  })
    .then((res)=>{
      if(res.data.books.length>0){
        setData(res.data.books)
      }else{
        getallbooks()
      }
      
      setLoading(false)
    })
    .catch((err)=>{
      setLoading(false)
      console.log(err)
    })

 
}

useEffect(()=>{
   handleSubmit()
},[countryname])

console.log(data)


  return (
    <>
       {/*<Box></Box>  */}
    <Box mt={10} width="80%">
      <Box>
      <Flex flexDirection={'column'}>
        <FormLabel textAlign={'left'}>Search By Country Name</FormLabel>
        <Input type="text" width="30%" mb={4} placeholder='Search by Country Name' onChange={(e)=>handleChange(e)}/>
        {/* <Button onClick={handleSubmit}>Search</Button> */}
      </Flex>
    </Box>
      {loading ? <Image width="30%" src="https://img.freepik.com/premium-vector/system-software-update-upgrade-concept-loading-process-screen-vector-illustration_175838-2182.jpg?w=2000" alt=""/> :
      <Grid templateColumns='repeat(4, 1fr)' gap={5}>
        {data?.map((el,i)=>{
          return (
            <>
            <GridItem >
              <BooksDetails key={el._id} {...el} />
            </GridItem>
            </>
          )
        })}
        
      </Grid>}
    </Box>
    </>
  )
}
