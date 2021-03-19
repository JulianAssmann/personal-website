import React, { Component } from 'react';
import Navbar from '../components/navbar/navbar';
import Copyright from '../components/copyright';
import {
  Typography,
  Theme,
  createStyles,
  withStyles,
  WithStyles,
  Card,
  Link,
} from '@material-ui/core';
import { LinkedIn, GitHub } from '@material-ui/icons';
import Typewriter from 'typewriter-effect';
import StarBackground from '../components/star_background/star_background';

const styles = ({ palette, spacing }: Theme) => createStyles({
  introductionBackground: {
    background: 'linear-gradient(149deg, rgba(7,8,15,1) 0%, rgba(23,23,37,1) 25%, rgba(42,42,56,1) 100%)',
    height: 'calc(100vh - 65px)',
  },
  introduction: {
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    msTtransform: 'translate(-50%,-50%)',
  },
  introductionText: {
    minHeight: '4.5em',
    lineHeight: '1.5em'
  },
  introductionIconContainer: {
    justifyContent: 'center',
    display: 'flex',
    marginTop: '24px'
  }
});

interface HomeProps extends WithStyles<typeof styles> { }

interface HomeState { }

class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Navbar title="Home" />
        <div className={classes.introductionBackground}>
          <StarBackground></StarBackground>
          <div className={classes.introduction}>
            <div >
              <Typography variant="h2" component="h1" gutterBottom style={{ textAlign: 'center', color: 'white' }}>
                Hi there, I am Julian Aßmann
              </Typography>
              <Typography variant="h5" component="h1" className={classes.introductionText} gutterBottom style={{ textAlign: 'center', color: 'white' }}>
                <Typewriter
                  options={{
                    delay: 60,
                    deleteSpeed: 20,
                    autoStart: true,
                    loop: true,
                    strings: [
                      'Computer Science Student @ Uni Heidelberg',
                      'YouTuber for Programming Tutorials',
                      'C++ Tutor @ Uni Heidelberg',
                      'Flutter Enthusiast'
                    ],
                  }}
                  onInit={() => { }}
                />
              </Typography>
              <div className={classes.introductionIconContainer}>
                <Link style={{marginRight: '16px'}} href="https://www.linkedin.com/in/julian-a%C3%9Fmann-195798156/">
                  <LinkedIn fontSize="large" color="action"></LinkedIn>
                </Link>
                <Link href="https://github.com/JulianAssmann">
                  <GitHub fontSize="large" color="action"></GitHub>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Card>

          </Card>
        </div>
        <Copyright />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Home);