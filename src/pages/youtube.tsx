import React, { Component } from 'react';
import AppAppBar from '../components/app_bar';
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
        marginRigth: 20
    }
});

interface YoutubeProps extends WithStyles<typeof styles> {}

interface YoutubeState {}

class Youtube extends Component<YoutubeProps, YoutubeState> {
  constructor(props: YoutubeProps) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <AppAppBar title="YouTube" />
        <div className={classes.content}>
          <Typography variant="h4" component="h1" gutterBottom>
            YouTube
          </Typography>
          <Copyright />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Youtube);
