import React from "react"
import { Input, Button, InputGroup, InputRightElement } from "@chakra-ui/react"

export default function PasswordInput({ name, value, handleInputPassword }) {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        borderRadius='0'
        name={name}
        value={value}
        onChange={(e) => handleInputPassword(e.target.value)}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}