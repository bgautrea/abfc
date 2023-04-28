import React from 'react';
import { Container } from '@mui/material';
import { Typography } from '@mui/material/';

class Footer extends React.Component {

    render() {
        return(
            <Container component="main" sx={{ mt: 8, mb: 2, fontWeight: 'bold' }} maxWidth="sm">
            <Typography variant="h3" gutterBottom>
            BF Perentage: {this.props.score.bf}%
            </Typography>
            </Container>
        )
    }
}

export default Footer;