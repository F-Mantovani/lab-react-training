import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';

export default function BasicRating({children, className}) {
  const [value] = React.useState(children);

  return (
    <Box className="margin"
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      {/* <Typography component="legend">Controlled</Typography> */}
      {/* <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /> */}
      {/* <Typography component="legend">Read only</Typography> */}
      <Rating style={{color: "white"}} className={className} name="read-only" value={value} readOnly />
      {/* <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} /> */}
    </Box>
  );
}