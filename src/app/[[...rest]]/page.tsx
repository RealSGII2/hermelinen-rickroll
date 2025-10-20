import Link from 'next/link';

export default function Home() {
    return (<>
        <div className='convoyMessage'>
            <p>Looking for the Hermelinen convoy server? <Link href={'/convoy'}>Read how to join &rarr;</Link></p>
        </div>
        <div className='vWrapper'>
            <video autoPlay loop>
                <source src={'https://serve.realsgii2.dev/u/rickroll.webm'} type={'video/webm'} />
            </video>
        </div>
    </>);
}
