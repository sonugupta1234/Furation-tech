import { useState,useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"

import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Select,
  FormErrorMessage,
  FormHelperText,
  useToast,
  Text
  
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon} from '@chakra-ui/icons';
import { NavLink } from "react-router-dom";
import { HiOutlineHeart } from "react-icons/hi";
import { RiHandbagLine } from "react-icons/ri";
import { AuthContext } from '../ContextProvider/AuthContextProvider';



export default function Navbar() {
 
  
  const {isAuth,logout}=useContext(AuthContext)
  const [data1,setData1]=useState([])

  
 
 const value=localStorage.getItem("name")

  useEffect(()=>{
    axios.get(`https://crabby-ox-hoodie.cyclic.app/cart/get`)
    .then((res)=>{
      setData1(res.data)
      // console.log(res.data)
    })
    
   
    .catch((err)=>{
      
      console.log(err)
    })
  },[data1])

  

  return (
    <>
      <Box bg='blackAlpha.800' px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          
          <HStack spacing={8} alignItems={'center'}>
            <Box width="15%">
              <Link to="/"><img  width="100%" src='https://lh3.googleusercontent.com/p/AF1QipPV1Mbi1rrai_q7YYFbVYI5vSEK_xz4MDr6JgIJ=s680-w680-h510' alt=""/></Link>
            </Box>
            
          </HStack>
          <Box width="15%" >
          <Flex alignItems={'center'} >
            <Box>
            {isAuth ? 
                <Menu >
                  <MenuButton bgColor={'#333333'} _hover={{bgColor: "#333333"}}  _expanded={{ bg: '#333333' }} as={Button} color="white" rightIcon={<ChevronDownIcon />}>{value}</MenuButton>
                  <MenuList>
                    <MenuItem onClick={logout} >Logout</MenuItem>
                    </MenuList>
                </Menu> :
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                fontSize={"xs"}
                cursor={'pointer'}
                minW={0}
                mt={3}>
              
                <Avatar
                  size={'xs'}
                  src={
                    'https://affinitaslegal.com/wp-content/uploads/2020/08/imagen-perfil-sin-foto.jpg'
                  }
                />
                <Text color="white">Profile</Text>
              </MenuButton>
              <MenuList>
                <Link to="/login"><MenuItem >SIGN IN</MenuItem></Link>
                <Link to="/register"><MenuItem>SIGN UP</MenuItem></Link>
                
              </MenuList>
              </Menu>}
              </Box>

              <HStack spacing={-8} alignItems={'flex-start'} justifyContent={'center'} >
          <NavLink to="/cart">
            <Button
              display={"flex"}
              flexDirection={"column"}
              fontSize={"xs"}
              bg={"none"}
              color={"white"}
              _hover={{ bg: "none"}}
              mt={3}
            >
              <IconButton
                aria-label="Wishlist"
                icon={<RiHandbagLine />}
                variant="ghost"
                fontSize={"xl"}
                w="fit-content"
                color="white"
                _hover={{ bg: "none"}}
               
              />
              <Text >Bag{isAuth ? <span style={{color: "orange"}}>{" "} ({data1.length})</span>: ""}</Text>
            </Button>
           
          </NavLink>
          <Text
                bg={"#BB1679"}
                color={"white"}
                paddingX={1.5}
                borderRadius={"50%"}
                fontSize={'xs'}
              >
                {/* {cartData.length} */}
              </Text>
          </HStack>
              
          
          
           
          </Flex>
          </Box>
        </Flex>
      </Box>

   

        
           

     
    </>
  );
}