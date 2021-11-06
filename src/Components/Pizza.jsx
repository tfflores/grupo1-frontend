import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';


export default function Pizza () {

    return (
        <Card sx={{ width: '100%', height: '30vh', margin: '20px' }}>
            <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'Bold'}}>Pizzas listas:</Typography>
            </CardContent>
        </Card>
    )
}