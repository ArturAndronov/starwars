import * as React from 'react';
import TextField from '@mui/material/TextField';

const Search = (props) => {
    const { onChange, value } = props;
    return (
        <TextField
            label="Search"
            variant="outlined"
            fullWidth
            onChange={onChange}
            sx={{
                mb:"1.5rem"
            }}
        />
    );
}

export default Search;