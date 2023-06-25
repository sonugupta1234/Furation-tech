import React, { useContext, useState } from 'react'
import {Box,Flex,Text,Button, Heading, Image,useToast} from "@chakra-ui/react"
import {CiDeliveryTruck, CiShoppingTag} from "react-icons/ci"
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from "axios"
import Navbar from "../Components/Navbar"
import { Link } from 'react-router-dom'
import { Checkout } from './Checkout'
import { AuthContext } from '../ContextProvider/AuthContextProvider'

export const Cart = () => {

    const [data,setData]=useState([])
    const {id}=useParams()
    const toast=useToast()
    const toast1=useToast()
    const {sum1,handleSum}=useContext(AuthContext)
    const [loading,setLoading]=useState(false)
    const navigate=useNavigate()

    var sum=0;

    const getcartdata=()=>{
        setLoading(true)
        axios.get(`https://crabby-ox-hoodie.cyclic.app/cart/get`)
      .then((res)=>{setLoading(false);setData(res.data)})
      .catch((err)=>{setLoading(false);console.log(err)})
    }

    const handledelete=(id)=>{
        axios.delete(`https://crabby-ox-hoodie.cyclic.app/cart/${id}`)
        .then((res)=>{toast({
            title: 'Success',
            position: 'top',
            description: `Item Deleted From Cart Sucessfully`,
            status: 'success',
            duration: 5000,
            isClosable: true,
          });getcartdata()})
        .catch((err)=>console.log(err))
    }


    useEffect(()=>{
      getcartdata()
    },[])

    const handleChange=(el)=>{
        sum=sum+Number(el.pages)
        // console.log(sum)
        handleSum(sum)
        
    }

    const handleClick=()=>{
        if(data.length===0)
        {
            toast1({
                title: ' Error ',
                position: 'top',
                description: 'Cart Item Empty , please add Some product',
                status: 'error',
                duration: 5000,
                isClosable: true,
              })
        }else{
            navigate("/checkout")
        }
    }

    

    

  return (
    <>
    <Navbar />
    <Box mt={70}  >
        <Flex>
            <Box width="60%"  >
                <Box width="70%" margin="auto" >
                <Flex justifyContent="space-between">
              <Text>Check delivery time & services</Text>
              
                <Button color="#FF3F6C" border="1px solid #FF3F6C">Enter PIN CODE</Button>
               </Flex>

               <Box mt={7}>
                <Heading fontSize="sm">Available Offers</Heading>
                <Text>. Get Upto Rs 500 Cashback on CRED Pay UPI on a min spend of Rs 1000</Text>
               </Box>

                <Box mt={7}>
                <Flex>
               <CiDeliveryTruck fontSize="large"/>
                <Text> Yay! No Convenience fee on this order</Text>
                </Flex>
               </Box>

               <Box mt={6}>
               {loading ? <Image width="30%" src="https://img.freepik.com/premium-vector/system-software-update-upgrade-concept-loading-process-screen-vector-illustration_175838-2182.jpg?w=2000" alt=""/> :
                   <Box>
                   {data ?.map((el,i)=>{
                     return <>
                     {handleChange(el)}
                    <Box width="100%">
                        <Flex justifyContent={'space-between'}>
                     <Box width="80%">
                     <Flex>
                     <Box  width="30%" mt={5}>
                        <Image width="100%" src={el.imageLink} alt=""/>
                    </Box>
                    <Box mt={5}>
                        <Heading>Title: {el.title}</Heading>
                        <Text>Author: {el.author}</Text>
                        <Text>Country: {el.country}</Text>
                        <Text>Language: {el.language}</Text>
                        
                            <Text>Price:  ₹{el.pages}</Text>
                            
                    </Box>
                     </Flex>
                     </Box>

                     <Box>
                        <Button bgColor={'#FF3F6C'} _hover={{bgColor: "#FF3F6C"}} onClick={()=>handledelete(el._id)}>Remove</Button>
                     </Box>

                     </Flex>
                     </Box>
                     </>
                     })}
                     </Box>}
                       
               </Box>

               </Box>
            </Box>
            <Box width="40%" >
              <Text>COUPONS</Text>
              <Box mt={10}>
                <Flex justifyContent="space-between">
                    <Box>
                        <Flex>
                        <CiShoppingTag />
                        <Text>Apply Coupons</Text>
                        </Flex>
                    </Box>

                    <Box>
                        <Button color="#FF3F6C" border="1px solid #FF3F6C">Apply</Button>
                    </Box>
                    

                </Flex>
              </Box>

              <Text>Login to get upto ₹ 200 OFF on first order</Text>

              <Box mt={6}>
                <Heading fontSize="sm">PRICE DETAILS</Heading>
                <Box mt={6}>
                    <Flex justifyContent="space-between">
                    <Text>Total MRP</Text>
                    <Text>{sum}</Text>
                    </Flex>
                </Box>
                <Box mt={6}>
                    <Flex justifyContent="space-between">
                    <Text>Discount on MRP</Text>
                    <Text>-₹ 300</Text>
                    </Flex>
                </Box>
                <Box mt={6}>
                    <Flex justifyContent="space-between">
                    <Text>Convenience Fee</Text>
                    <Text>FREE</Text>
                    </Flex>
                </Box>
                <Box mt={6}>
                    <Flex justifyContent="space-between">
                    <Text>Total Amount</Text>
                    <Text>₹ {sum<300 ? 0 : sum-300}</Text>
                    </Flex>
                </Box>
               <Button width="50%" margin="auto" left="10%" mt={8} backgroundColor="#FF3F6C" _hover={{backgroundColor: "#FF3F6C"}} onClick={handleClick}>PLACE ORDER</Button>
                {/* {price ? <Checkout sum={sum}/>: ""} */}
              </Box>
            </Box>
        </Flex>
    </Box>
    </>
  )
}

