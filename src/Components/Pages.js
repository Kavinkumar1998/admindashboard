import { Box, Pagination, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import Base from '../Base/Base'

const Pages = () => {
  return (
    <Base
      title="PAGINATION"
    description="this is a pagination page">
      <Box>
<Typography>  <p>Basic pagination</p> </Typography>
<Stack spacing={2}>
      <Pagination count={10} />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} disabled />
    </Stack>
      </Box>

      <Box>
<Typography> <p> Rounded pagination</p>  </Typography>
<Stack spacing={2}>
      <Pagination count={10} variant="outlined" />
      <Pagination count={10} variant="outlined" color="primary" />
      <Pagination count={10} variant="outlined" color="secondary" />
      <Pagination count={10} variant="outlined" disabled />
    </Stack>
      </Box>

      <Box>
<Typography> <p>Outlined pagination</p>  </Typography>
<Stack spacing={2}>
      <Pagination count={10} shape="rounded" />
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
      </Box>

    </Base>
  )
}

export default Pages
