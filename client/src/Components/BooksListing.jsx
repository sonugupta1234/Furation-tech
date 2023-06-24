import { Box, Button, Flex, Grid, GridItem, Image, Input } from '@chakra-ui/react'
import React from 'react'
import { useState, useEffect } from 'react'
import BooksDetails from './BooksDetails'
import { useLocation,useSearchParams } from 'react-router-dom'
import axios from 'axios'





export const BooksListing = () => {

  const [loading,setLoading]=useState(false)
  const [data,setData]=useState([])
  const location=useLocation()
  const [searchparams]=useSearchParams()
  const [countryname,setCountryName]=useState("")

const getallbooks=()=>{
  // console.log(params)
  setLoading(true) 
  

    
    axios.get(`http://localhost:7780/books`,{
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


//   useEffect(()=>{
//     axios.get(`http://localhost:7780/books/get`)
//     .then((res)=>{
//       setData(res.data.books)
//       setLoading(false)
//     })
//     .catch((err)=>{
//       setLoading(false)
//       console.log(err)
//     })
// },[])

// console.log(data)

useEffect(()=>{
  console.log(countryname)
  if(countryname==="")
  {
     getallbooks()
  }
},[])


const handleSubmit=()=>{
   
  axios.get(`http://localhost:7780/books/country`,{
    params: {
     country: countryname
     
   }
  })
    .then((res)=>{
      setData(res.data.books)
      setLoading(false)
    })
    .catch((err)=>{
      setLoading(false)
      console.log(err)
    })

 
}


  return (
    <>
    
    <Box mt={10} width="80%">
      <Box>
      <Flex>
        <Input type="text" width="30%" mb={4} placeholder='Search by Country Name' onChange={(e)=>setCountryName(e.target.value)}/>
        <Button onClick={handleSubmit}>Search</Button>
      </Flex>
    </Box>
      {loading ? <Image src="https://img.freepik.com/premium-vector/system-software-update-upgrade-concept-loading-process-screen-vector-illustration_175838-2182.jpg?w=2000" alt=""/> :
      <Grid templateColumns='repeat(3, 1fr)' gap={5}>
        {data?.map((el,i)=>{
          return (
            <>
            <GridItem >
              <BooksDetails key={el.id} {...el} />
            </GridItem>
            </>
          )
        })}
      </Grid>}
    </Box>
    </>
  )
}
