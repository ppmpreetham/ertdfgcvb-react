import React, { useEffect } from 'react';
import { run } from './assets/ertdfgcvb/src/run.js';
import * as program from './assets/ertdfgcvb/src/programs/basics/time_milliseconds.js';
import './assets/ertdfgcvb/style.css';

const ErtdfgcvbBG = () => {
    useEffect(() => {
        const settings = {
            element: document.querySelector('pre')
        };

        run(program, settings).then(function(e) {
            console.log(e);
        }).catch(function(e) {
            console.warn(e.message);
            console.log(e.error);
        });
    }, []);

    const text_col = 'black';
    return (
        <div>
            <pre data-selection-enabled="false" style={{ userSelect: 'none' }} className='w-screen h-screen'></pre>
        </div>
    );
};

export default ErtdfgcvbBG;