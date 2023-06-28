import Head from 'next/head';
import Layout, { NextPageWithLayout } from 'components/Layout';
import Text from 'components/Text';
import ExternalLink from 'components/ExternalLink';
import Divider from 'components/Divider';
import List, { TextItem, ContactItem, WorkItem } from 'components/List';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albert Yu</title>
      </Head>

      <main
        sx={{
          variant: 'grids.containers.12col',
          gridTemplateRows: 'minmax(90vh, max-content)',
          mx: [5, 6, 0],
        }}
      >
        <section
          sx={{
            variant: 'grids.items.content',
            mt: [128, 8, 0],
            mb: [10, null, 0],
          }}
        >
          <h1
            sx={{
              variant: 'typography.headings.h1',
              ml: -1,
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
            Currently at{' '}
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
            ) – a modern fintech platform for businesses on the&nbsp;web.
          </Text>

          <Text sx={{ variant: 'typography.text.lede', mb: 0 }}>
            I’m not looking for new opportunities at this time 🙂
          </Text>
        </section>

        <section
          sx={{
            variant: 'grids.items.content',
            mb: 0,
          }}
        >
          <h2
            sx={{
              variant: 'typography.headings.h3',
              my: 5,
            }}
          >
            Work Experience
          </h2>

          <List sx={{ mb: 7 }}>
            <WorkItem
              title="Software Engineer"
              org="MUI"
              href="https://www.mui.com"
              period="2023+"
            />
            <WorkItem
              title="Product Designer"
              org="Rapyd"
              href="https://www.rapyd.net"
              period="2022–2023"
            />
            <WorkItem
              title="Principal Software Engineer (Front-End)"
              org="Neat"
              href="https://www.neatcommerce.com"
              period="2020–2022"
            />
            <WorkItem
              title="Software Engineer / Team Lead (Front-End)"
              org="Neat"
              href="https://www.neatcommerce.com"
              period="2017-2020"
            />
            <WorkItem
              title="Software Engineer"
              org="HelloToby"
              href="https://www.hellotoby.com/en"
              period="2016-2017"
            />
            <WorkItem
              title="Web Designer / Developer"
              org="Self-employed"
              period="2011-2016"
            />
          </List>

          <Text sx={{ variant: 'typography.text.body', mt: 4, mb: 6 }}>
            I love designing with code, and thrive at the intersection of design
            &amp;&nbsp;engineering. Here’s some tools and tech I use on a
            daily&nbsp;basis:
          </Text>

          <List>
            <TextItem>React / Node.js</TextItem>
            <TextItem>JavaScript / TypeScript</TextItem>
            <TextItem>styled-components / Emotion / Tailwind / Sass</TextItem>
            <TextItem>
              <ExternalLink href="https://konigi.com/tools/graph-paper/">
                Konigi graph paper
              </ExternalLink>{' '}
              &amp;{' '}
              <ExternalLink
                href="https://artline.com.au/products/fineliners/fineline-pens/artline-220/"
                rel="noopener noreferrer nofollow"
              >
                Artline 220
              </ExternalLink>
            </TextItem>
            <TextItem>Sublime Text / Figma / Miro</TextItem>
            <TextItem>git / GitHub / Docker</TextItem>
            <TextItem>Slack / Jira / Confluence</TextItem>
          </List>
        </section>

        <Divider
          sx={{
            variant: 'grids.items.content',
            maxWidth: 128,
            mx: 'auto',
            my: 10,
          }}
        />

        <section
          sx={{
            variant: 'grids.items.content',
            mb: 11,
          }}
        >
          <h2
            sx={{
              variant: 'typography.headings.h3',
              my: 5,
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
            deploy a&nbsp;website.
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

        <section
          sx={{
            variant: 'grids.items.content',
            mb: 7,
          }}
        >
          <h3
            sx={{
              variant: 'typography.headings.h4',
              mt: 0,
              mb: 3,
            }}
          >
            Contact
          </h3>

          <List
            sx={{
              m: 0,
              px: 0,
            }}
          >
            <ContactItem>
              <button
                type="button"
                onClick={() => {
                  window.location.href = atob(
                    'bWFpbHRvOmluYm94QGFsYmVydHl1LmNv',
                  );
                }}
                sx={{
                  appearance: 'none',
                  bg: 'transparent',
                  border: 0,
                  p: 0,
                  fontSize: 'inherit',
                  lineHeight: 'body',
                  color: 'accent.fg',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  '&:is(:hover, :focus, :focus-visible)': {
                    color: 'accent.active',
                  },
                }}
              >
                Email
              </button>
            </ContactItem>

            <ContactItem>
              <ExternalLink href="https://github.com/mj12albert">
                Github
              </ExternalLink>
            </ContactItem>

            <ContactItem>
              <ExternalLink
                href="https://www.linkedin.com/in/mj12albert/"
                rel="noopener noreferrer nofollow"
              >
                LinkedIn
              </ExternalLink>
            </ContactItem>
          </List>
        </section>
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
