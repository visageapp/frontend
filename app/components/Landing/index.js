import React from 'react';
import { StaggeredMotion, spring} from 'react-motion';

/**
 * The initial Landing Page for Visage.
 */
export default class Landing extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
      var arr = [
        <img alt='Logo' src='assets/brand/logo.svg' />,
        <img alt='Visage' src='assets/brand/logotype.svg' />,
        <h2 style={{fontFamily: '"estilo-script",sans-serif'}}>An Intelligent Chat Assistant</h2>
      ];
      var a = {x: 1};
        return (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
              <StaggeredMotion defaultStyles={[a, a, a]} styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {return i === 0 ? {x: spring(0, {stiffness: 120})} : {x: spring(prevInterpolatedStyles[i - 1]['x'], {stiffness: 120})} })}>
              { interpolatingStyles =>
                <div>
                  {
                    interpolatingStyles.map((style, i) =>
                    <div key={i} style={{opacity: (1-style.x), transform: `translateX(${-128 * style.x}px)`}} >
                      {arr[i]}
                    </div>)
                  }
                </div>
              }
              </StaggeredMotion>
            </div>
        );
    }
}
