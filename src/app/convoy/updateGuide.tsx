'use client';

import styles from './styles.module.scss';
import { useState } from 'react';

export default function UpdateGuide() {
    const [shown, setShown] = useState(false);

    return <>
        <div className={`${styles.updateGuide}${shown ? ' ' + styles.shown : ''}`}>
            <button onClick={() => setShown(!shown)}>
                <p>
                    <b>Need to update mods?</b>
                </p>
                <div>{shown ? 'Close' : 'View update guide'}</div>
            </button>

            {shown && <div>
                <h2>Removed Mods</h2>
                <p>The following mods were <b>removed</b> and cannot be used on the server anymore:</p>
                <ul>
                    <li>Google Maps Navigation Night Theme</li>
                    <li>Volvo VNL Improved Dashboard</li>
                </ul>

                <p style={{ marginTop: 16 }}>These mods introduced client only changes and were required by the server.
                    To continue the philosophy of not requiring client mods, they were removed.</p>

                <p style={{ marginTop: 16 }}>If you wish to continue using the Google Maps mod, you can download the
                    optional version:</p>

                <a href='https://cdn.realsgii2.dev/ats/GoogleMaps.scs' target={'_blank'} className={styles.modItem}>
                    <span>Google Maps (Dark Theme) (Opt.)</span>
                    <span>https://cdn.realsgii2.dev/ats/GoogleMaps.scs</span>
                    <ul>
                        <li>Mark as optional</li>
                    </ul>
                </a>

                <h2>Notes</h2>
                <ul>
                    <li>The mod order did not change this update.</li>
                    <li>The total mod count is now 15.</li>
                </ul>
            </div>}
        </div>
    </>;
}
