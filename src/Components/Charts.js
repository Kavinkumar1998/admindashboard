import { Box, Rating, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React from 'react'
import Base from '../Base/Base'

const Charts = () => {

  const [value, setValue] = React.useState(2);
  return (
    <Base  title="Ratings"
    description="this is a rating page">
     
     <Box>
<Typography>Basic rating   </Typography>
<Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
      </Box>

      <Box>
<Typography><p>Rating precision</p> 
The rating can display any float number with the value prop. Use the precision prop to define the minimum increment value change allowed.  </Typography>
<Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack>
      </Box>

      <Box>
<Typography><p> Sizes</p>
For larger or smaller ratings use the size prop.  </Typography>
<Rating name="size-small" defaultValue={2} size="small" />
<Rating name="size-medium" defaultValue={2} />
<Rating name="size-large" defaultValue={2} size="large" />
      </Box>


    </Base>
  )
}

export default Charts
