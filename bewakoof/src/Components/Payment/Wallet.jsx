import { Box ,Stack,Radio, RadioGroup} from '@chakra-ui/react'
import React from 'react'

export const Wallet = () => {
  return (
    <Box>
        <RadioGroup defaultValue='1'>
            <Stack>
                <Radio value='1'  >
                paytm
                </Radio>
                <Radio value='2'>PhonePe</Radio>
                <Radio value='3'>Mobikwik</Radio>
                <Radio value='4'>Freecharge</Radio>
            </Stack>
        </RadioGroup>
    </Box>
  )
}
