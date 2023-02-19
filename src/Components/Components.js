import { Button, ButtonGroup, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Base from '../Base/Base'

const Components = () => {
  return (
    <Base  title="COMPONENTS"
    description="it is a component page">
      <Box sx={{ overflow: 'auto' }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography className='typo'>Basic button group</Typography>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
<ButtonGroup variant="text" aria-label="text button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
        </Box>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography className='typo'>Button variants</Typography>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
        </Box>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography className='typo'></Typography>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
<ButtonGroup variant="text" aria-label="text button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
        </Box>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography className='typo'>Disabled elevation</Typography>
        <ButtonGroup
  disableElevation
  variant="contained"
  aria-label="Disabled elevation buttons"
>
  <Button>One</Button>
  <Button>Two</Button>
</ButtonGroup>
        </Box>
   
      </Box>
    </Base>
  )
}

export default Components
