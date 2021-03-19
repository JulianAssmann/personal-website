import React from 'react';
import {
    AppBar,
    Container,
    Hidden,
    IconButton,
    List,
    Link,
    ListItem,
    ListItemText,
    Toolbar,
    Theme,
    Fab,
    WithStyles,
    createStyles,
    withStyles,
    Divider,
    Typography
} from "@material-ui/core";
import { Home, KeyboardArrowUp, Menu } from '@material-ui/icons';
import theme from '@/styles/theme';
import HideOnScroll from './hide_on_scroll';
import BackToTop from './back_to_top';
import SideDrawer from './side_drawer';

// Theme-dependent styles
const styles = ({ palette, spacing }: Theme) =>
    createStyles({
        navListDisplayFlex: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        divider: {
            marginLeft: 8,
            marginTop: 20,
            marginBottom: 20,
            backgroundColor: 'white',
            width: 2,
        },
        indexLink: {
            color: theme.palette.common.white,
            fontSize: 28,
        },
        navDisplayFlex: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        linkText: {
            textDecoration: 'none',
            textTransform: 'uppercase',
            color: 'white'
        },
        navbarDisplayFlex: {
            justifyContent: 'space-between'
        },
        pageTitle: {
            fontSize: 22,
            flex: 1,
            marginLeft: 8,
        },
        toolbar: {
            justifyContent: 'space-between',
        },
    });

interface NavbarProps extends WithStyles<typeof styles> {
    title: string;
}

interface NavbarState {
    /// Indicates whether or not the drawer is currently opened
    drawerActive: boolean;

    /// Indicates whether or not the drawer is enabled (size too small to show all links)
    drawerEnabled: boolean;
}

class NavBar extends React.Component<NavbarProps, NavbarState> {
    breakpoint: number = 930;

    navLinks = [
        { title: 'Home', path: '/' },
        { title: 'YouTube', path: '/youtube' },
        { title: 'Open Source', path: '/oss' },
        { title: 'Apps', path: '/apps' },
        { title: 'Impressum & Datenschutz', path: '/impressum' },
    ];

    render() {
        const { classes } = this.props;
        return (
            <div>
                <HideOnScroll>
                    <AppBar>
                        <Toolbar component="nav" className={classes.toolbar}>
                                <Link className={classes.indexLink} href="/" underline="none">
                                    Julian Aßmann
                                </Link>
                                <Divider
                                    orientation="vertical"
                                    className={classes.divider}
                                    flexItem
                                ></Divider>
                                <Typography variant="h5" noWrap className={classes.pageTitle}>
                                    {this.props.title}
                                </Typography>
                                <Hidden smDown>
                                    <List
                                        component="nav"
                                        aria-labelledby="main navigation"
                                        className={classes.navListDisplayFlex}>
                                        {this.navLinks.map(({ title, path }) => (
                                            <a href={path} key={title} className={classes.linkText}>
                                                <ListItem button>
                                                    <ListItemText primary={title} />
                                                </ListItem>
                                            </a>
                                        ))}
                                    </List>
                                </Hidden>
                                <Hidden mdUp>
                                    <SideDrawer navLinks={this.navLinks} />
                                </Hidden>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
                <Toolbar id="back-to-top-anchor" />
                <BackToTop>
                    <Fab color="primary" size="large" aria-label="scroll back to top">
                        <KeyboardArrowUp />
                    </Fab>
                </BackToTop>
            </div >
        );
    }
}

export default withStyles(styles)(NavBar);
