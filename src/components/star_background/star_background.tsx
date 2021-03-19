import { Component } from 'react';
import css from './star_background.module.scss';

class StarBackground extends Component {
    render() {
        return (
            <div className={css.animationWrapper}>
                <div className={css.particle1}></div>
                <div className={css.particle2}></div>
                <div className={css.particle3}></div>
            </div>
        );
    }
}

export default StarBackground;