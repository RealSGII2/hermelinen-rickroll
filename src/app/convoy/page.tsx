import styles from './styles.module.scss'
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
    title: "Hermelinen Convoy",
    description: "Read up on how to download and sort the mods required to join Quantum Science's ATS convoy."
}

export const viewport: Viewport = {
    themeColor: '#4b93fd'
}

export default function ConvoyDetails() {
    return <main className={styles.main}>
        <article>
            <p>
                <a href='https://realsgii2.dev' target={"_blank"} rel={"noreferrer"} className={styles.realsgHeader}>RealSGII2/</a>
            </p>
            <h1>Hermelinen Convoy</h1>

            <div className={styles.infoRow}>
                <div>
                    <h2>Server ID</h2>
                    <p>85568392935210120</p>
                </div>
                <div>
                    <h2>Server Password</h2>
                    <p>jamesisgay</p>
                </div>
            </div>

            <div className={styles.infoCallout}>
                <p><b>The current Megapack version is <code className={styles.megapackVersion}>4</code>. Changes are listed below.</b></p>
                <ul>
                    <li>Fix a cache bug causing users to be unable to join the server.</li>
                </ul>
            </div>

            <h2>Download Mods</h2>
            <p>First, subscribe to the steam collection:</p>
            <a href='https://steamcommunity.com/sharedfiles/filedetails/?id=3577280676' rel={"noreferrer"} target={"_blank"} className={styles.modItem}>
                <span>Latest Hermelinen Convoy Pack</span>
                <span>https://steamcommunity.com/sharedfiles/filedetails/?id=3577280676</span>
            </a>

            <p style={{ marginTop: 16 }}>Next, download the Edison BDE:</p>
            <a href='https://serve.realsgii2.dev/u/Edison_BDE.scs' rel={"noreferrer"} target={"_blank"} className={styles.modItem}>
                <span>Edison BDE</span>
                <span>https://serve.realsgii2.dev/u/Edison_BDE.scs</span>
            </a>

            <p style={{ marginTop: 16 }}>Then, download the Megapack:</p>
            <a href='https://serve.realsgii2.dev/u/RSG_Megapack.scs' rel={"noreferrer"} target={"_blank"} className={styles.modItem}>
                <span>RealSGII2 Megapack</span>
                <span>https://serve.realsgii2.dev/u/RSG_Megapack.scs</span>
            </a>

            <p style={{ marginTop: 16 }}>Finally, move these into your mods folder:</p>
            <ul>
                <li>On Windows: <code>%USERPROFILE%\Documents\American Truck Simulator\Mods</code></li>
                <li>On Mac: <code>~/Library/Application Support/American Truck Simulator/mods</code></li>
            </ul>

            <h2>Mod Order</h2>
            <p>Make sure these mods are in the order listed below. If you want to include your own mods, put them above or below this list. These mods <b>must</b> be next to each other in this order.</p>

            <ol>
                <li>Real companies, gas stations & billboards</li>
                <li>Driveable AI</li>
                <li>Equal Day / Night length</li>
                <li>Advanced SCS Traffic (1.56 UPDATE)</li>
                <li>Realistic AI traffic behavior</li>
                <li>Edison BDE</li>
                <li>Hermelinen Branding</li>
                <li>IRL Trailer Skin Pack</li>
                <li>Realistic Vehicle Lights Mod v7.4 (by Frkn64)</li>
                <li>Real Tires Mod</li>
                <li>SiSL&apos;s Mega Pack</li>
                <li>Volvo VNL 2018 Improved Dashboard</li>
                <li>(Closed) Google Maps Navigation Night Version</li>
                <li>RealSGII2 Megapack</li>
            </ol>

            <h2>Joining the Server</h2>
            <ol>
                <li>Make sure you are at least <b>Level 1</b>. If you aren&apos;t, do jobs until you reach it.</li>
                <li>Hover over <strong>Convoys</strong> in the garage menu.</li>
                <li>Click <strong>Convoy lobby</strong>.</li>
                <li>Search the server ID (&quot;<code>85568392935210120</code>&quot;).</li>
                <li>Join the server named <strong>Hermelinen Convoy</strong>.</li>
                <li>Enter the password (&quot;<code>jamesisgay</code>&quot;).</li>
            </ol>

            <h2>Additional Notes</h2>
            <ul>
                <li>The server will report a player limit of 8 players. This is incorrect; it is actually 16.</li>
                <li>The only rule is to not troll other users unless both parties agree to it.</li>
                <li>Forward complains and suggestions (like mods) to <strong>@SGII2</strong> in QSP.</li>
                <li>We have a thread in corp-random called <strong>Commercial Vehicle Fan Club</strong>, come join us!</li>
            </ul>

            <p className={styles.copyright}>&copy; {new Date().getFullYear()} &mdash; Website built and server maintained by <a className={styles.alink}
                href='https://realsgii2.dev/'
                target={"_blank"}
                rel={"noreferrer"}
            >RealSGII2</a> &mdash; <a className={styles.alink}
                href='https://github.com/RealSGII2/hermelinen-rickroll'
                target={"_blank"}
                rel={"noreferrer"}
            >View website source</a></p>
        </article>
    </main>
}
