import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { Head } from '../components/Head/Head';
import { Nav } from '../components/Nav/Nav';
import { Items } from '../components/Items/Items';
import { Chart } from '../components/ItemsBig/components/Chart';
import { Savings } from '../components/ItemsBig/components/Savings';
import { LatestTransaction } from '../components/LatestTransaction/LatestTransaction';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const Layout = () => {
    return (
        <Box sx={{ flexGrow: 1, height: '100vh' }} >
            {/* MAIN CONTAINER */}
            <Grid container sx={{ height: '100%' }} spacing={1}>

                {/* NAV CONTAINER */}
                <Grid item xs={2} sx={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '10px' }}>
                    <Item sx={{ flexGrow: 1 }}>
                        <Grid item xs={12} height={'100%'}>
                            <Nav />
                        </Grid>
                    </Item>
                </Grid>

                {/* BODY CONTAINER */}
                <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '10px' }}>
                    <Item sx={{ flexGrow: 1, bgcolor: 'lightgray' }}>
                        <Grid container spacing={2} sx={{ height: '100%' }}>

                            {/* HEAD */}
                            <Grid item xs={12}>
                                <Item>
                                    <Head />
                                </Item>
                            </Grid>

                            {/* ITEMS */}
                            <Grid item xs={3}>
                                <Items cardIcon={"fa-solid fa-dollar"} cardTitle={'Earnings'} cardAmount={928.41} cardChange={'+118.81'} />
                            </Grid>
                            <Grid item xs={3}>
                                <Items cardIcon={"fa-solid fa-shopping-cart"} cardTitle={'Spendings'} cardAmount={169.43} cardChange={'-5.2'} />
                            </Grid>
                            <Grid item xs={3}>
                                <Items cardIcon={"fa-solid fa-sack-dollar"} cardTitle={'Savings'} cardAmount={406.27} cardChange={'+33.3'} />
                            </Grid>
                            <Grid item xs={3}>
                                <Items cardIcon={"fa-solid fa-bar-chart"} cardTitle={'Investments'} cardAmount={1854.08} cardChange={'+78.5'} />
                            </Grid>

                            <Grid item xs={7}>
                                <Chart />
                            </Grid>
                            <Grid item xs={5}>
                                <Savings />
                            </Grid>

                            <Grid item xs={12}>
                                <LatestTransaction />
                            </Grid>

                        </Grid>
                    </Item>
                </Grid>
            </Grid >
        </Box >
    );
}
