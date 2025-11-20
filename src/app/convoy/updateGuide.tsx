'use client';

import styles from './styles.module.scss'
import { useState } from 'react';

export default function UpdateGuide() {
    const [shown, setShown] = useState(false);

    return <>
        <div className={`${styles.updateGuide}${shown ? ' ' + styles.shown : ''}`}>
            <button onClick={() => setShown(!shown)}>
                <p><b>Need to update mods?</b></p>
                <div>{shown ? 'Close' : 'View update guide'}</div>
            </button>

            {shown && <div>
                <h2>Updated Mods</h2>
                <p>Download these and replace the old ones in your mods folder.</p>

                <a href='https://cdn.realsgii2.dev/ats/Dom379.scs' rel={"noreferrer"} target={"_blank"} className={styles.modItem}>
                    <span>Dom 379</span>
                    <span>https://cdn.realsgii2.dev/ats/Dom379.scs</span>
                    <ul>
                        <li>Update to support 1.57.x.</li>
                        <li>Merge with Dom lighting mod.</li>
                    </ul>
                </a>
                <a href='https://cdn.realsgii2.dev/ats/RSG_Megapack.scs' rel={"noreferrer"} target={"_blank"} className={styles.modItem}>
                    <span>RealSGII2 Megapack</span>
                    <span>https://cdn.realsgii2.dev/ats/RSG_Megapack.scs</span>
                    <ul>
                        <li>Remove buggy physics mod.</li>
                        <li>Make mudflaps opaque.</li>
                    </ul>
                </a>

                <h2>Notes</h2>
                <ul>
                    <li>The mod order did not change this update.</li>
                    <li>dom_379_156.scs was renamed to Dom379.scs; you&apos;d want to delete the old file.</li>
                </ul>
            </div>}
        </div>
    </>
}
