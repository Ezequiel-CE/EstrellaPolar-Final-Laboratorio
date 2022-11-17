import { Paper } from '@mui/material';
import React from 'react'; import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const ComoPaga = ({ handleChange, value }) => (
  <Paper elevation={0} sx={{ p: 6 }}>
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="credito" control={<Radio />} label="Tarjeta de credito" />
        <FormControlLabel value="debito" control={<Radio />} label="Tarjeta de debito" />
      </RadioGroup>
    </FormControl>

  </Paper>
);

export default ComoPaga;
