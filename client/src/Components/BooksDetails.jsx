import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'


const BooksDetails = ({author,country,imageLink,language,pages,title,year}) => {
  return (
    <>
    <Box boxShadow='dark-lg'>
     <Image style={{margin: "auto"}} src={imageLink} alt=""/>
     <Text>Author: {author}</Text>
     <Text>Title: {title}</Text>
     <Text>Country: {country}</Text>
     <Text>Language: {language}</Text>
     <Text>Year: {year}</Text>
     <Button>Add to Cart</Button>
     </Box>
    </>
  )
}

export default BooksDetails