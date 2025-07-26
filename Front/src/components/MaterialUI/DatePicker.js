// src/components/BasicDatePicker.jsx

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';

export default function BasicDatePicker({ date, setDate }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date de départ"
        value={date ? dayjs(date) : null}
        onChange={(newValue) =>
          setDate(newValue ? newValue.format('YYYY-MM-DD') : '')
        }
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
