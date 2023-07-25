import React, { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { Data } from '../shared/ListOfFilms';

const SearchFilms = () => {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState(Data);

    const handleSearch = () => {
        const filteredFilms = Data.filter(film =>
            film.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredData(filteredFilms);
    };

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="50px" textAlign="center">
                Awesome Films You <br /> Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px'
                        },
                        width: { lg: '800px', xs: '250px' },
                        backgroundColor: '#fff',
                        borderRadius: '40px'
                    }}
                    height="76px"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Films..."
                    type="text"
                />
                <Button
                    className="search-btn"
                    sx={{
                        bgcolor: "#000000",
                        color: "#fff",
                        textTransform: 'none',
                        width: { lg: '175px', xs: '80px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        height: '56px',
                        position: 'absolute',
                        right: '0'
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>

            <Stack>
                {filteredData.map(film => (
                    <Box key={film.title} sx={{ marginBottom: '20px' }}>


                    </Box>
                ))}
            </Stack>
        </Stack >
    );
};

export default SearchFilms;
