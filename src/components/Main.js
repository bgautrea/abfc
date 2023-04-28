import React from 'react';
import { FormControl } from '@mui/material';
import { Input } from '@mui/material';
import { InputLabel } from '@mui/material';
import { FormHelperText } from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1
import { Container } from '@mui/material';
import { CssBaseline } from '@mui/material/CssBaseline';


class Main extends React.Component {

    render() {
        return(

            <main className="Main">
                <Container maxWidth="sm">
                    <Grid container rowSpacing={8} spacing={4}>
                        <Grid item xs={12}>
                            <FormControl>
                                    <InputLabel htmlFor="abfc_hgt">Height</InputLabel>
                                    <Input id="abfc_hgt" aria-describedby="height"  onChange={this.props.handleChange} />
                                    <FormHelperText id="height">Soldier height in inches.</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                    <InputLabel htmlFor="abfc_nc">Neck Circumference</InputLabel>
                                    <Input id="abfc_nc" aria-describedby="neck"  onChange={this.props.handleChange} />
                                    <FormHelperText id="neck">Soldier neck circumference in inches.</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                    <InputLabel htmlFor="abfc_wc">Waist Circumference</InputLabel>
                                    <Input id="abfc_wc" aria-describedby="waist"  onChange={this.props.handleChange} />
                                    <FormHelperText id="waist">Soldier wasit circumference in inches.</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                    <InputLabel htmlFor="abfc_wc">Hip Circumference</InputLabel>
                                    <Input id="abfc_hc" aria-describedby="hip"  onChange={this.props.handleChange} />
                                    <FormHelperText id="hip">Soldier hip circumference in inches.</FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        )
    }
}

export default Main;
