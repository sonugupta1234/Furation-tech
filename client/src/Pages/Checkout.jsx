import React, { useContext, useState } from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Box,
    Heading,
    InputGroup,
    InputLeftAddon,
    Button,
    Flex,
    Text,
    Checkbox,
    useToast
  } from '@chakra-ui/react'

import Navbar from '../Components/Navbar'
import { AuthContext } from '../ContextProvider/AuthContextProvider'
import { useNavigate } from 'react-router-dom'

export const Checkout = ({sum}) => {
  // console.log(sum)
  const toast=useToast()
  const {sum1}=useContext(AuthContext)
  const [input, setInput] = useState('')
  const navigate=useNavigate()

  const [formstate, setFormState]=useState({
    name: "",
    mobile: "",
    pincode: "",
    address: "",
    town: "",
    city: "",
    state: ""
  })

  const handleChange=(e)=>{
    const val=e.target.value
    setFormState({...formstate,[e.target.name]: val})
  }

  const handleform=()=>{
    if(formstate.name!=="" && formstate.mobile!=="" && formstate.pincode!=="" && formstate.address!=="" && formstate.town!=="" && formstate.city!=="" &&  formstate.state!=="")
    {
      toast({
        title: 'Address Added Sucessfully',
        description: "Order Placed and Confirmation Sent to Mail ",
        position: 'top',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      navigate("/")
    }
  }
  
  return (
    <>
    <Navbar />
    <Box marginTop="50px" >
        <Flex>
            <Box width="40%"  ml={60} >
                <Box width="100%" height="570px" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" marginRight="100px" >
                  <form  id="new-form">
                    <FormControl style={{width: "90%", marginLeft: "17px"}}   >
                        <FormLabel pt={10}>CONTACT DETAILS</FormLabel>
                        <Input type="text" placeholder="Name" name="name" onChange={(e)=>handleChange(e)} alt="" required/>
                        <Input mt={3} type="number" placeholder="Mobile No" name="mobile" onChange={(e)=>handleChange(e)} alt="" required/>

                        <FormLabel mt={3}>ADDRESS</FormLabel>
                        <Input mt={3} placeholder="Pin Code" name="pincode" onChange={(e)=>handleChange(e)} alt="" required/>
                        <Input mt={3} placeholder="Address(House No, Building, Street, Area)" name="address" onChange={(e)=>handleChange(e)} alt="" required/>
                        <Input mt={3} placeholder="Locality/Town" onChange={(e)=>handleChange(e)} name="town" alt="" required/>
                        <Input mt={3} placeholder="City/District" onChange={(e)=>handleChange(e)} name="city" alt="" required/>
                        <Input mt={3} placeholder="State" alt="" onChange={(e)=>handleChange(e)} name="state" required/>
                        
                        <Checkbox>Make this my default address</Checkbox><br/>
                        
                        <Button mt={8}  width="100%" form="new-form" type="submit" backgroundColor={"#FF3F6C"} _hover={{backgroundColor: "#FF3F6C"}} onClick={handleform}>ADD ADDRESS</Button>
                        
                    </FormControl>
                    </form>
                </Box>


                {/* onClick={()=>toast({
        title: 'Address Added Sucessfully',
        position: 'top',
        description: "We've placed your order Sucessfully and Sent an confirmation mail",
        status: 'success',
        duration: 5000,
        isClosable: true,
      }) */}

            </Box>
            <Box width="30%" ml={40}>
            <Heading fontSize="sm">PRICE DETAILS</Heading>
                <Box mt={6}>
                    <Flex justifyContent="space-between">
                    <Text>Total MRP</Text>
                    <Text>{sum1}</Text>
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
                    <Text>₹ {sum1-300}</Text>
                    </Flex>
                </Box>
                
            </Box>
        </Flex>
    </Box>
    </>
  )
}
