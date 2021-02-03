import React from 'react';
import {
  AppBar,
  createStyles,
  Link,
  Theme,
  withStyles,
  WithStyles,
  Typography,
  Divider,
  SwipeableDrawer,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import theme from '@/styles/theme';
import Toolbar, { styles as toolbarStyles } from './toolbar';

// Theme-dependent styles
const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    pageTitle: {
      fontSize: 22,
      flex: 1,
      marginLeft: 8,
    },
    toolbar: {
      justifyContent: 'space-between',
    },
    left: {
      alignSelf: 'end',
    },
    indexLink: {
      color: theme.palette.common.white,
      fontSize: 28,
    },
    link: {
      fontSize: 16,
      color: theme.palette.common.white,
      marginLeft: theme.spacing(3),
    },
    drawerLink: {
      fontSize: 16,
      color: theme.palette.common.black,
      margin: 12,
    },
    divider: {
      marginLeft: 8,
      marginTop: 20,
      marginBottom: 20,
      backgroundColor: 'white',
      width: 2,
    },
    linkContainer: {
      display: 'flex',
    },
    linkContainerCollapsed: {
      width: 0,
    },
  });

interface AppBarProps extends WithStyles<typeof styles> {
  title: string;
}

interface AppBarState {
  /// Indicates whether or not the drawer is currently opened
  drawerActive: boolean;

  /// Indicates whether or not the drawer is enabled (size too small to show all links)
  drawerEnabled: boolean;
}

class LinkConfig {
  title: string;
  href: string;

  constructor(title: string, href: string) {
    this.title = title;
    this.href = href;
  }
}

class AppAppBar extends React.Component<AppBarProps, AppBarState> {
  breakpoint: number = 930;

  pages: LinkConfig[] = [
    new LinkConfig('YouTube', '/youtube'),
    new LinkConfig('Open Source', '/oss'),
    // new LinkConfig('Apps', '/apps'),
    new LinkConfig('Über mich', '/about'),
    new LinkConfig('Impressum & Datenschutz', '/impressum'),
  ];

  constructor(props: AppBarProps) {
    super(props);

    this.state = {
      drawerActive: false,
      drawerEnabled: false,
    };
  }

  componentDidMount() {
    if (window.innerWidth <= this.breakpoint) {
      this.setState({ drawerEnabled: true, drawerActive: false });
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth <= this.breakpoint) {
        this.setState({ drawerEnabled: true });
      } else {
        this.setState({ drawerEnabled: false, drawerActive: false });
      }
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar className={classes.toolbar}>
            <Link className={classes.indexLink} href="/" underline="none">
              Julian Aßmann
            </Link>
            <Divider
              orientation="vertical"
              className={classes.divider}
              flexItem
            ></Divider>
            <Typography variant="h5" className={classes.pageTitle}>
              {this.props.title}
            </Typography>

            {this.state.drawerEnabled ? (
              <Menu
                onClick={() => {
                  this.setState({ drawerActive: !this.state.drawerActive });
                }}
              />
            ) : (
              <div className={classes.linkContainer}>
                {this.pages.map((p) => (
                  <div key={p.href}>
                    <Link className={classes.link} href={p.href}>
                      {p.title}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
        <SwipeableDrawer
          anchor='right'
          open={this.state.drawerActive && this.state.drawerEnabled}
          onClose={() => this.setState({ drawerActive: false })}
          onOpen={() => this.setState({ drawerActive: true })}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => {
              this.setState({ drawerActive: false });
            }}
            onKeyDown={() => {
              this.setState({ drawerActive: false });
            }}
          >
            <div>
              {this.pages.map((p) => (
                <div key={p.href}>
                  <Link className={classes.drawerLink} href={p.href}>
                    {p.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

export default withStyles(styles)(AppAppBar);
