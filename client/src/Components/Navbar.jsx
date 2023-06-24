import { useState,useRef } from 'react';
import { Link } from 'react-router-dom';

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



export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [otp,setOtp]= useState(1256)
  const [otpvalue,setOtpValue]=useState()
  const toast1 = useToast()
  const toast2=useToast()
  const [userInfo,setUserInfo]=useState(false)
  
  const { 
    isOpen: isOpenModal, 
    onOpen: onOpenModal, 
    onClose: onCloseModal 
} = useDisclosure()

const { 
  isOpen: isOpenloginModal, 
  onOpen: onOpenloginModal, 
  onClose: onCloseloginModal 
} = useDisclosure()

const { 
  isOpen: isOpenotpModal, 
  onOpen: onOpenotpModal, 
  onClose: onCloseotpModal 
} = useDisclosure()


  const verifyotp=()=>{
  
    if(otp==otpvalue)
    {
       toasting()
    }else
       toasted()
    }
  


  const toasting=()=>{
    toast1({
      title: 'Login Successfull',
      position: 'top',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
     onCloseotpModal()
     onCloseloginModal()
     setUserInfo(true)
  }

    const toasted=()=>{
      toast2({
        title: 'Invalid Otp',
        position: 'top',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
  }

  

  const [size, setSize] = useState('')
  const [placement, setPlacement] = useState('right')
  const [modalSize,setModalSize]=useState('lg')
  const toast = useToast()
  

  const [formstate, setFormState]=useState({
    selectValue: "",
    phone: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  })

 
  
  

 

  const handleSubmit=async(e)=>{
    
    e.preventDefault()

    try {
      const response=await fetch(`https://rct-deployment.onrender.com/signupData`,{
        method: 'POST',
        body: JSON.stringify(formstate),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data= await response.json()
      setFormState("")
    } catch (error) {
       console.log(error)
    }
  
   
  }
  
 

  

  const handleClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  

  

  return (
    <>
      <Box bg='blackAlpha.800' px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            {/* <Box>
              <Link to="/"><img  width="50%" src='data:image/png;base64,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' alt=""/></Link>
            </Box> */}
            
          </HStack>
          <Box width="12%" >
          <Flex alignItems={'center'} >
            <Box>
            {userInfo ? 
                <Menu>
                  <MenuButton variant={'link'} as={Button} color="white" rightIcon={<ChevronDownIcon />}>Sonu</MenuButton>
                  <MenuList>
                    <MenuItem>Logout</MenuItem>
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
                <Text color="white">Contact</Text>
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
              <Text >Bag</Text>
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