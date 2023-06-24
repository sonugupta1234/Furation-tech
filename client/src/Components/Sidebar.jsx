import React from 'react'
import {useState,useEffect} from "react"

import {
    Box,
    Checkbox,
    CheckboxGroup,
    Flex,
    Heading,
    Input,
    Radio,
    RadioGroup,
    Select,
    Stack,
    Text,
  } from "@chakra-ui/react";

  import { Link, useSearchParams } from 'react-router-dom';

export const Sidebar = () => {

    
    const [searchparams,setSearchParams]=useSearchParams()
    const initialState= searchparams.getAll("title")
    const [title,setTitle]=useState(initialState || [])


    const handleChange=(e)=>{
        let newTitle=[...title]
        let option=e.target.value
        // console.log(option)

        if(newTitle.includes(option))
        {
            newTitle.splice(newTitle.indexOf(option),1)
        }else{
            newTitle.push(option)
        }

        setTitle(newTitle)
    }

    useEffect(()=>{
        let params={
            title,
        }

        
        setSearchParams(params)
    },[title])

    console.log(title)


  return (
    <Box width="20%" mt={10}>
        <Heading fontSize={'lg'}>Filter</Heading>
    <Box
    display={"flex"}
    flexDirection="column"
    borderWidth={"1px"}
    p={"20px"}
    mt={5}
  >
    <Text fontWeight={"500"} mb={"15px"} textAlign={'left'}>
      Title
    </Text>

   <CheckboxGroup
      colorScheme="blue"
    //   value={brand}
    defaultValue={title}
    >
      <Checkbox value="Fairytales"   onChange={(e)=>handleChange(e)} > Fairytales</Checkbox>
      <Checkbox value="Dynamo"   onChange={(e)=>handleChange(e)} >Dynamo</Checkbox>
      <Checkbox value="PridePrejudice"   onChange={(e)=>handleChange(e)} >PridePrejudice</Checkbox>
      

    </CheckboxGroup>
    
  </Box>
  </Box>
  )
}
