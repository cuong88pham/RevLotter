import React from 'react';
import { makeStyles, CssBaseline, Box, Container } from '@material-ui/core';
import AppBarComponent from '../components/AppBarComponent';
import VerticalBarComponent from '../components/VerticalBarComponent';
import CopyrightComponent from '../components/CopyrightComponent';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    minHeight: '100vh',
    backgroundColor: '#eaeaea',
    paddingTop: theme.spacing(13),
    paddingBottom: theme.spacing(3)
  }
}));

function PageLayout({ children }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBarComponent open={open} setOpen={setOpen} />
      <VerticalBarComponent open={open} setOpen={setOpen} />
      <main className={classes.content}>
        <Container maxWidth={false} className={classes.container}>
          {children}
        </Container>
        <Box pt={2} pb={2}>
          <CopyrightComponent>
            {`Copyright © ${new Date().getFullYear()} All rights reserved.`}
          </CopyrightComponent>
        </Box>
      </main>
    </div>
  );
}

export default PageLayout;
