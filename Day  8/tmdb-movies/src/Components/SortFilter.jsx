import React, { useContext, useEffect, useState } from 'react'
// import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import "../Css/SortFilter.css"
import { Moviescontext } from '../index';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


function getStyles(name, personName, theme) {
    return {
        fontWeight: personName.includes(name)
            ? theme.typography.fontWeightMedium
            : theme.typography.fontWeightRegular,
    };
}

const SortFilter = ({type}) => {
    const { genres, handleSort, handleFilter } = useContext(Moviescontext)
    const theme = useTheme();
    const [personName, setPersonName] = useState([]);
    const [sort, setsort] = useState('');
    const [title,setTitle]=useState("")

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
        handleFilter(value)
    };

    function onChangeSort(e) {
        setsort(e.target.value)
        handleSort(e.target.value)
    }

    useEffect(()=>{
        if(type=="movie"){

            setTitle("Movies")
        }
        if(type=="tvshow"){
            setTitle("Tv Show")
        }
    },[type])

    return (
        <div className='sort-filter' style={{}}>
            {title &&<p>Explore {title}</p>}
            {!title && <p>Search results of {type}</p>}
            <div>

                <FormControl sx={{ m: 1, maxHeight: "60px", boxSizing: "border-box", width: 300, background: "#fff" }}>
                    <InputLabel id="demo-multiple-chip-label" >select genre</InputLabel>
                    <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                    >
                        {genres.map((name) => (
                            <MenuItem
                                key={name.id}
                                value={name.name}
                                style={getStyles(name, personName, theme)}
                            >
                                {name.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 200, background: "#fff" }}>
                    <InputLabel id="demo-simple-select-autowidth-label">sort by</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={sort}
                        onChange={onChangeSort}
                        autoWidth
                        label="sort"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"asc"}>Popularity Ascending</MenuItem>
                        <MenuItem value={"desc"}>Popularity Descending</MenuItem>
                    </Select>
                </FormControl>
            </div>

        </div>
    )
}

export default SortFilter