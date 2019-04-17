import React from 'react';
import Particles from 'react-particles-js';


export default () => (
    <div
        style={{
            top: 0,
            left: 0,
            background:  'linear-gradient(180deg, #4298c9 0%, #428d 150%)',
            width: '100%',
            height: '153px',
        }}
    >
        <Particles
            // Add window resize logic if required

            height='153px'
            params={{
                particles: {
                    number: {
                        value: 10
                    },
                    size: {
                        value: 3
                    }
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse'
                        }
                    }
                }
            }}
        />
    </div>
);
