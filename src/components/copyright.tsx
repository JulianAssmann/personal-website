import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core';

// Theme-dependent styles
const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    footer: {
      left: 0,
      bottom: 0,
      width: '100%',
      color: 'white',
      textAlign: 'center',
      height: '40px'
    },
  });

interface CopyrightProps extends WithStyles<typeof styles> {}

class Copyright extends React.Component<CopyrightProps, {}> {
  constructor(props: CopyrightProps) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.footer}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <MuiLink color="inherit" href="https://julianassmann.de/">
            julianassmann.de
          </MuiLink>{' '}
          {new Date().getFullYear()}
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Copyright);
