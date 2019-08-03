import Link from 'next/link';

import Layout from '../layouts/MyLayout';

const Index = () => (
    <div>
        <Layout>

            <br /><br />

            <Link href="/about">
                <a style={{ fontSize: 20 }}>About Page with a-Tag</a>
            </Link>

            <br /><br />

            <Link href="/about">
                <button>About Page with button element</button>
            </Link>

            <br /><br />

            <Link prefetch href="/about">
                <button>About Page with prefetch</button>
            </Link>

            <br /><br />

            <Link href={{ pathname: '/about', query: { name: 'Zeit' } }}>
                <button>About Page with URL object</button>
            </Link>
            <p>Hello Next.js</p>
        </Layout>
    </div>
);

export default Index;