import React, { Component } from 'react';
import Navbar from '../components/navbar/navbar';
import Copyright from '../components/copyright';
import {
  Typography,
  Theme,
  createStyles,
  withStyles,
  WithStyles,
} from '@material-ui/core';

const styles = ({ palette, spacing }: Theme) => createStyles({
    content: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    }
});

interface HomeProps extends WithStyles<typeof styles> {}

interface HomeState {}

class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <Navbar title="Home" />
        <div className={classes.content}>
          <Typography variant="h4" component="h1" gutterBottom>
            Home
          </Typography>
          <Copyright />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Home);