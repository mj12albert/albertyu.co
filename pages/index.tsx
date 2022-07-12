import type { NextPage } from 'next';
import Head from 'next/head';
import Text from 'components/Text';
import ExternalLink from 'components/ExternalLink';
import Divider from 'components/Divider';
import WorkHistory from './components/WorkHistory';
import ToolsList from './components/ToolsList';
import ContactMe from './components/ContactMe';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Albert Yu</title>
        <meta
          name="description"
          content="Albert Yu is web developer &amp; designer. Currently based in Hong Kong."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        sx={{
          variant: 'grids.containers.12col',
          gridTemplateRows: 'minmax(93vh, max-content)',
          mx: [5, 6, 0],
        }}
      >
        <section
          sx={{
            variant: 'grids.items.content',
            mt: [128, 8, 0],
            mb: [6, null, 0],
          }}
        >
          <h1
            sx={{
              variant: 'typography.headings.h1',
            }}
          >
            I’m Albert Yu
          </h1>

          <Text sx={{ variant: 'typography.text.lede' }}>
            I’m a systems-minded designer and developer with 10&nbsp;years of
            experience building for the web.
          </Text>

          <Text sx={{ variant: 'typography.text.lede' }}>
            My work focuses on delivering memorable experiences for meaningful
            products, with an interest towards practicing constraint-based
            design and inclusive&nbsp;design.
          </Text>

          <Text sx={{ variant: 'typography.text.lede', mb: 8 }}>
            Currently working on design systems at{' '}
            <ExternalLink
              href="https://www.neatcommerce.com"
              rel="noopener noreferrer nofollow"
            >
              Neat
            </ExternalLink>{' '}
            (acq.{' '}
            <ExternalLink
              href="https://www.rapyd.net/company/news/press-releases/rapyd-completes-acquisition-of-neat/"
              rel="noopener noreferrer nofollow"
            >
              Rapyd
            </ExternalLink>
            ) – a modern financial services platform for all businesses on
            the&nbsp;web.
          </Text>

          <Text sx={{ variant: 'typography.text.lede', mb: 0 }}>
            I’m not looking for new opportunities at this time 🙂
          </Text>
        </section>

        <section
          sx={{
            variant: 'grids.items.content',
            mb: [8, null, 9],
          }}
        >
          <h2
            sx={{
              variant: 'typography.headings.h3',
              mb: 6,
            }}
          >
            Work Experience
          </h2>

          <WorkHistory sx={{ mb: 7 }} />

          <Text sx={{ variant: 'typography.text.body', mt: 4, mb: 6 }}>
            I love designing with code, and thrive at the intersection of design
            &amp;&nbsp;engineering. Here’s some tools and tech I use on a
            daily&nbsp;basis:
          </Text>

          <ToolsList />
        </section>

        <Divider
          sx={{
            variant: 'grids.items.content',
            maxWidth: 128,
            mx: 'auto',
            mb: [8, null, 10],
          }}
        />

        <section
          sx={{
            variant: 'grids.items.content',
            mb: 10,
          }}
        >
          <h2
            sx={{
              variant: 'typography.headings.h3',
              mb: 6,
            }}
          >
            About this site
          </h2>

          <Text sx={{ variant: 'typography.text.body' }}>
            I’m redesigning in the open. At the moment I’m using Next.js and{' '}
            <ExternalLink href="https://theme-ui.com/">theme-ui</ExternalLink>{' '}
            so I can quickly try out some ideas.
          </Text>

          <Text sx={{ variant: 'typography.text.body' }}>
            It deploys via GitHub Actions and runs on Docker on AWS,
            deliberately over-engineered so I can keep up with modern ways to
            deploy a&nbsp;website – Vercel is a bit too easy and where’s the fun
            in that?
          </Text>

          <Text sx={{ variant: 'typography.text.body', mb: 1 }}>
            I recently restored{' '}
            <ExternalLink href="https://v1.albertyu.co">
              the previous version
            </ExternalLink>{' '}
            of this site using SvelteKit to try&nbsp;out&nbsp;Svelte&nbsp;🧑‍💻.
          </Text>
        </section>

        <Divider
          sx={{
            variant: 'grids.items.content',
            mb: [6, null, 6],
          }}
        />

        <ContactMe
          sx={{
            variant: 'grids.items.content',
            mb: 7,
          }}
        />

        <code
          sx={{
            position: 'fixed',
            bottom: 2,
            right: 2,
            fontSize: [0, '11px'],
            color: 'gray.3',
          }}
        >
          {process.env.IMAGE_TAG}
        </code>
      </main>
    </div>
  );
};

export default Home;
