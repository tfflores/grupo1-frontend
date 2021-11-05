import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Kitchen() {
    const [stock, setStock] = useState("");

    return (
        <Card>
            <CardContent>
                <Typography>Cocina</Typography>
                {stock}
            </CardContent>
        </Card>

    )
}