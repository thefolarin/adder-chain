import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React, { useState, useEffect, useRef } from 'react';
import ConnectForm from '@/components/ConnectForm';
import { Spinner } from '@chakra-ui/react';

function ConnectWallet() {
  const [loading, setLoading] = useState(true);
  const [formActive, setFormActive] = useState(false);

  useEffect(() => {
    setInterval(() => {
        setLoading(false)
    }, 2000)
  }, [])

  return (
    <Box className='w-full flex items-center justify-center'>
      <Box className='rounded-xl bg-white shadow-md p-6 min-w-[330px] md:min-w-[430px] flex items-center justify-center'>
        {loading ? (
          <Box className='flex flex-col items-center'>
            <Spinner color='green.500' />
            <Text color={'black'} className="font-light">
              Connecting to wallet...
            </Text>
          </Box>
        ) : formActive ? (
          <ConnectForm />
        ) : (
          <FailedToConnect setFormActive={setFormActive} />
        )}
      </Box>
    </Box>
  );
}

function FailedToConnect({ setFormActive }) {
  return (
    <Box className='flex items-center justify-center flex-col gap-3'>
      <Heading color='black' size={'md'}>
        Failed to connect automatically.
      </Heading>
      <button
        onClick={() => setFormActive(true)}
        className='w-full rounded-full p-2 bg-black text-white'
      >
        Connect Manually
      </button>
    </Box>
  );
}

export default ConnectWallet;
