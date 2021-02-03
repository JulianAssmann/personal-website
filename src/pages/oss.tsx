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

interface OSSProps extends WithStyles<typeof styles> {}

interface OSSState {}

class OSS extends Component<OSSProps, OSSState> {
  constructor(props: OSSProps) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <AppAppBar title="OSS" />
        <div className={classes.content}>
          <Typography variant="h4" component="h1" gutterBottom>
            Open Source Projekte
          </Typography>
          <Copyright />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(OSS);
