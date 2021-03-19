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

interface AboutProps extends WithStyles<typeof styles> {}

interface AboutState {}

class About extends Component<AboutProps, AboutState> {
  constructor(props: AboutProps) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Navbar title="Über mich" />
        <div className={classes.content}>
          <Typography variant="h4" component="h1" gutterBottom>
            Über mich
          </Typography>
          <Copyright />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(About);
