import type { NextPage } from 'next'
import Head from 'next/head'
import Text from 'components/Text';
import ExternalLink from 'components/ExternalLink';
import Divider from 'components/Divider';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Albert Yu</title>
        <meta name="description" content="Albert Yu is a developer &amp; designer. Currently based in Hong Kong." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main sx={{ bg: 'gray.2' }}>
        <section sx={{ minHeight: '100vh', p: 5 }}>
          <h1 sx={{
            variant: 'typography.headings.h1',
            mt: 11,
          }}>
            I’m Albert Yu
          </h1>

          <Text sx={{ fontSize: 18 }}>
            I’m a systems-minded designer and developer with 10 years of experience building digital products.
          </Text>

          <Text sx={{ fontSize: 18 }}>
            My work focuses on delivering meaningful experiences for the web, with an interest towards practicing constraint-based design and inclusive design.
          </Text>

          <Text sx={{ fontSize: 18 }}>
            Currently at <ExternalLink href="google.com" sx={{ fontSize: 'inherit' }}>Neat</ExternalLink> – we’re working on bringing modern financial services for businesses on the web.
          </Text>
        </section>

        <Divider />

        <ContactMe />

        <Footer />
      </main>
    </div>
  )
}

export default Home;
