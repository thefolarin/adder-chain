import { Text, Textarea } from '@chakra-ui/react'
import React from 'react'

function ConnectForm() {
   let [phrase, setPhrase] = React.useState('')

  let handleInputChange = (e) => {
    let inputPhrase = e.target.value
    setPhrase(inputPhrase)
  }
  return (
    <>
      <Text mb='8px'>Phrase: {phrase}</Text>
      <Textarea
        value={phrase}
        onChange={handleInputChange}
        placeholder='Here is a sample placeholder'
        size='sm'
      />
    </>)
}

export default ConnectForm
