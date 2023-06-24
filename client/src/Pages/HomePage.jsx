import React from 'react'
import Navbar from '../Components/Navbar'
import { BooksListing } from '../Components/BooksListing'
import { BiSidebar } from 'react-icons/bi'
import { Sidebar } from '../Components/Sidebar'
import { Box, Flex } from '@chakra-ui/react'


export const HomePage = () => {
  return (
    <>
    <Navbar />
    <Box>
      <Flex>
    <Sidebar />
    <BooksListing />
    </Flex>
    </Box>
   
    </>
  )
}
