import React, { useEffect } from 'react';
import { run } from './assets/ertdfgcvb/src/run.js';
import * as program from './ertdfgcvb program.js';
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

    return (
        <div>
            <pre data-selection-enabled="false" style={{ userSelect: 'none' }}>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>xy01═+:. BCxyz01═|+::. ABBCCxyyzz00111═══|||+++</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>z1</span>
                    <span style={{ color: 'white', background: 'royalblue', fontWeight: 'normal' }}>╭──────────────────────╮</span>
                    <span style={{ fontWeight: 100 }}>BCCxxxyyzzz00001111══</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>1|</span>
                    <span style={{ color: 'white', background: 'royalblue', fontWeight: 'normal' }}>│ </span>
                    <span style={{ color: 'white', background: 'royalblue' }}>FPS         30</span>
                    <span style={{ color: 'white', background: 'royalblue', fontWeight: 'normal' }}>       │</span>
                    <span style={{ color: 'dimgray', background: 'lightgray', fontWeight: 100 }}>AA</span>
                    <span style={{ fontWeight: 100 }}>BBBCCCxxxxyyyyzzzzz</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>|+</span>
                    <span style={{ color: 'white', background: 'royalblue', fontWeight: 'normal' }}>│ </span>
                    <span style={{ color: 'white', background: 'royalblue' }}>frame       281</span>
                    <span style={{ color: 'white', background: 'royalblue', fontWeight: 'normal' }}>      │</span>
                    <span style={{ color: 'dimgray', background: 'lightgray', fontWeight: 100 }}>. </span>
                    <span style={{ fontWeight: 100 }}>  AAAABBBBBCCCCCxxx</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>+:</span>
                    <span style={{ color: 'white', background: 'royalblue', fontWeight: 'normal' }}>│ </span>
                    <span style={{ color: 'white', background: 'royalblue' }}>time        9968</span>
                    <span style={{ color: 'white', background: 'royalblue', fontWeight: 'normal' }}>     │</span>
                    <span style={{ color: 'dimgray', background: 'lightgray', fontWeight: 100 }}>+:</span>
                    <span style={{ fontWeight: 100 }}>:::.....     AAAABB</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>+:</span>
                    <span style={{ color: 'white', background: 'royalblue', fontWeight: 'normal' }}>│ </span>
                    <span style={{ color: 'white', background: 'royalblue' }}>size        47×42</span>
                    <span style={{ color: 'white', background: 'royalblue', fontWeight: 'normal' }}>    │</span>
                    <span style={{ color: 'dimgray', background: 'lightgray', fontWeight: 100 }}>══</span>
                    <span style={{ fontWeight: 100 }}>|||||++++:::::.... </span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>+:</span>
                    <span style={{ color: 'white', background: 'royalblue', fontWeight: 'normal' }}>│ </span>
                    <span style={{ color: 'white', background: 'royalblue' }}>font aspect 0.46</span>
                    <span style={{ color: 'white', background: 'royalblue', fontWeight: 'normal' }}>     │</span>
                    <span style={{ color: 'dimgray', background: 'lightgray', fontWeight: 100 }}>00</span>
                    <span style={{ fontWeight: 100 }}>011111════||||+++::</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>|+</span>
                    <span style={{ color: 'white', background: 'royalblue', fontWeight: 'normal' }}>│ </span>
                    <span style={{ color: 'white', background: 'royalblue' }}>cursor      0,0</span>
                    <span style={{ color: 'white', background: 'royalblue', fontWeight: 'normal' }}>      │</span>
                    <span style={{ color: 'dimgray', background: 'lightgray', fontWeight: 100 }}>yy</span>
                    <span style={{ fontWeight: 100 }}>yyyzzzz000111═══||+</span>
                </span>
                <span style={{ fontWeight: 100 }}>═|</span>
                <span style={{ color: 'white', background: 'royalblue', fontWeight: 'normal' }}>╰──────────────────────╯</span>
                <span style={{ color: 'dimgray', background: 'lightgray', fontWeight: 100 }}>BB</span>
                <span style={{ fontWeight: 100 }}>CCCxxxxyyyzz0011══|</span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>11══</span>
                    <span style={{ color: 'dimgray', background: 'lightgray', fontWeight: 100 }}>══||||+++++:::::....    </span>
                    <span style={{ fontWeight: 100 }}>AAABBBCCxxxyzz001══</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>zz000001111═════|||||+++::::..   AABBCxxyzz01══</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>xxxyyyyyzzzzz00001111═══|||++::.. AABBCxyzz01═|</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>BBBBBCCCCCxxxxyyyzzz00011══||++:.. ABBCxyz01═|+</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>..     AAABBBBCCCxxyyzz0011═||+:.. ABCxyz01═+:.</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>+++::::...   AABBCCxxyyz001═||+:. ABCxyz1═|+. A</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>═══||||++:::..  ABBCxxyz001═|+:. ABCyz01|+: ACx</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>000111══||++:..  ABCxxyz01═|+:. BCxy01═+: ACxz0</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>yyzz0011══|++:.  ABCxyz01═|+. ABxyz1═+: ACxz1═+</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>xxyyzz011═|++:. ABCxyz0═|+:.ABxyz1═+: ACyz1|+.A</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>CCxyyz011═|+:. ABCxz01═+:.ABCyz1═+. BCy01|: ACy</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>BCxyyz01═|+:. ACxyz1═|:.ABCy01|+.ABxz0═+. Bxz0═</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>BCxyz01═|+: ABCyz0═|:.ABxy01|:.ACxz1|+.ACyz1|: </span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>Cxyz01═+:. BCxz0═|:.ABxz0═+: BCy0═|: Bxy0═+. Bx</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>xy01═|+. BCxz0═|:.ACxz1═+.ABxz1═+.ACxz1|:.ACyz1</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>z0═|+. ACxz0═+: ACyz1|:.ACy01|: ACy0═|: Bxy0═|:</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>1|+. ACyz1═+. Bxy0═+: Bxy0═+. Bxz1═+.ABxz0═+: B</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>+. BCyz1|+.ABxz1═+.ACxz1|:.ACy01|: ACyz1|+. BCy</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}> Bxy0═|: ACy01|: BCy0═+: Bxy0═+: BCy01|+.ABCyz1</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>xz0═+. Bxz0═+.ABxz1|+.ACxz1|+.ABxy0═|:.ABCyz0═|</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>1|+.ACyz1|:.ACy01|: BCy01|:.ACxz0═|:. BCyz01═+:</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>: BCy0═+: Bxz0═+. Bxy0═|: ACxz0═|:. BCxy01═|+:.</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>Bxz1|+.ACyz1|:.ACxz1═+: ACxz0═|+. ABxyz01═|+:. </span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>0═|: BCy0═|: ACyz1═+. ACxz01|+:.ABCxyz01═|++:. </span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>+.ABxz1═+. BCy01|+. ACxy01═|:. ABCxyz011═|++:..</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>ACyz1|+.ABxy01|+: ACxyz0═|+:. ABCxyyz011═||++::</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>y01|:.ABxy01|+: ABCyz01═|+:. ABBCxyyz0011══||++</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>═|:.ABxy01═+:. BCxyz01═|+::. ABBCCxyyzz00111═══</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>:.ABxyz1═|+. ABCxyz01══|+::.  ABBCCxxxyyzzzz000</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>ABCyz01|+:. ABCxyzz01══|++::..  AABBBCCCxxxxyyy</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>Cxy01═|+:. ABCCxyzz011══||++::...    AAAABBBBCC</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>yz01═|+:.  ABCCxyyzz0011═══|||+++::::.....     </span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>z01═||+:.  AABCCxxyyzzz0001111════|||||+++++:::</span>
                </span>
            </pre>
        </div>
    );
};

export default ErtdfgcvbBG;