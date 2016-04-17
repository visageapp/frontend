import React from 'react';
import {Motion, StaggeredMotion, spring} from 'react-motion';
import {Link} from 'react-router';

/**
 * The initial Landing Page for Visage.
 * Features the logotype drawing itself.
 */
export default class Landing extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
      // LogoType
      var arr = [
          <path ref="p0" d="M17.932,13.962c0,0,10.586-10.117,16.844,16.014c0.249,1.041,1.729,1.034,1.949-0.014c1.085-5.17,3.585-13.688,9.207-14"/>,
          <line ref="p1" x1="51.932" y1="17.962" x2="51.932" y2="29.962"/>,
          <path ref="p2" d="M71.932,17.962l-8.804,0c-1.639,0-3.121,1.227-3.193,2.864c-0.076,1.719,1.295,3.136,2.997,3.136l7.83,0c1.624,0,3.081,1.216,3.166,2.839c0.091,1.73-1.285,3.161-2.996,3.161h-9"/>,
          <circle ref="p3" cx="85.932" cy="23.962" r="6"/>,
          <path ref="p4" d="M99.932,27.962c0,0-7.833,8-8-10"/>,
          <circle ref="p5" cx="111.932" cy="23.962" r="6"/>,
          <path ref="p6" d="M117.932,23.962c0,0,4.25,26.25-10,26c-3.313-0.058-6-2.686-6-6s2.686-6,6-6h30"/>,
          <path ref="p7" d="M139.932,32.892c-1.177,0.681-2.543,1.07-4,1.07c-4.418,0-8-3.582-8-8s3.582-8,8-8c2.028,0,3.88,0.755,5.29,1.998l-7.29,8.002"/>
        ];
      var a = {x: 1};
      var subtitle = "The Inteligent Finance Messenger";
        return (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column'}}>
              <Motion defaultStyle={{x: 1}} style={{x: spring(0, {stiffness: 30})}}>
                {i => {
                    return (
                      <img style={{opacity: (1-i.x), transform: `translateY(${-8 * i.x}px)`, width: 400}} alt="logo" src="../assets/brand/logo.svg"/>);

                  }
                }
              </Motion>
            <StaggeredMotion defaultStyles={[a, a, a, a, a, a, a, a]} styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {return i === 0 ? {x: spring(0, {stiffness: 120})} : {x: spring(prevInterpolatedStyles[i - 1]['x'], {stiffness: 120})} })}>
            {interpolatingStyles =>
            <svg viewBox="0 0 160 64" style={{width: 480}}>
            {
              interpolatingStyles.map((style, i) =>
              <g key={i} style={{opacity: (1-style.x), transform: `translateY(${-8 * style.x}px)`, strokeDasharray: 100, strokeDashoffset: 100*style.x, fill:'none', stroke:'#FFFFFF', strokeWidth:2, strokeLinecap:'round', strokeMiterlimit:10}} >
                {arr[i]}
              </g>)
            }
          </svg>
            }
            </StaggeredMotion>

            <Motion defaultStyle={{x: 1}} style={{x: spring(0, {stiffness: 30})}}>

              {i => {
                var s = subtitle.substring(0, parseInt((1-i.x)*subtitle.length));
                  return (
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <h2>{s}</h2>
                    <Link to='/signin'>
                    <svg viewBox="0 0 16 16" style={{width: 48, opacity: 1-i.x}}>
                          <polyline style={{fill:'none',stroke:'#FFFFFF', strokeMiterlimit:10}} points="14,5 8,11 2,5 "/>
                    </svg>
                    </Link>
                  </div>);

                }
              }
            </Motion>

            </div>
        );
    }
}
