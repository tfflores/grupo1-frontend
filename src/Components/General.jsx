import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function General() {
    const [stock, setStock] = useState("");

    return (
        <Card>
            <CardContent>
                <Typography>Bodega general</Typography>
                {stock}
            </CardContent>
        </Card>

    )
}