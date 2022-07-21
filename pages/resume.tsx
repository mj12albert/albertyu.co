import Head from 'next/head';
import { SxProp } from 'theme-ui';
import Layout, { NextPageWithLayout } from 'components/Layout';
import Flex from 'components/Flex';
import BaseList from 'components/List';
import { Organization, Position, Details, Heading } from 'components/Resume';

const List = (props: React.ComponentProps<typeof BaseList>) => {
  return (
    <BaseList
      sx={{
        listStyle: 'none',
        padding: 0,
      }}
      {...props}
    />
  );
};

const Small = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
} & SxProp) => {
  return (
    <small
      sx={{
        display: 'block',
        fontFamily: 'monospace',
        fontWeight: 400,
        fontSize: 0,
        lineHeight: 1.2,
      }}
      {...rest}
    >
      {children}
    </small>
  );
};

const ResumePage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Resume | Albert Yu</title>
      </Head>

      <main
        itemScope
        itemType="http://schema.org/Person"
        sx={{
          mx: 'auto',
          maxWidth: '21cm',
          minHeight: '29.7cm',
          p: 5,
          '@media screen': {
            my: ['5vh', '10vh', '15vh'],
          },
          '@page': {
            mt: '2.5cm',
          },
          '@page:first': {
            mt: 'auto',
          },
        }}
      >
        <Flex
          flexDirection={['column', 'row']}
          alignItems={['flex-start', 'center']}
          sx={{
            mb: 7,
            pb: 3,
            '@media print': {
              flexDirection: 'row',
              alignItems: 'center',
            },
          }}
        >
          <h1
            sx={{
              variant: 'typography.headings.h1',
              ml: -1,
              mr: 'auto',
              lineHeight: 1,
              '@media print': {
                my: 0,
                transform: 'translateY(2px)',
              },
            }}
          >
            Albert Yu
          </h1>

          <div>
            <Small sx={{ mb: 1 }}>hello@albertyu.co</Small>
            <Small>github.com/mj12albert</Small>
          </div>
        </Flex>

        <Heading>Experience</Heading>

        <List>
          <Organization>
            <Organization.Header href="https://www.rapyd.net">
              Rapyd / Neat, A Rapyd Company
            </Organization.Header>

            <List>
              <Position title="Product Designer" from="2022" to="Now">
                {[
                  'Worked closely with engineers to build out Rapyd’s design system, worked on fundamentals such as layout patterns, grid systems and typography, to complex components such as data tables. I made a lot of prototypes in CodeSandbox with documentation in Figma.',
                  'Built a POC using Next.js and Markdoc to prototype key user flows for Rapyd’s documentation and API reference sites. This was a pilot project for a larger redesign initiative.',
                  'Collaborated with product managers and engineers on design system governance: clarifying requirements, maintaining and grooming the backlog.',
                ]}
              </Position>
            </List>
          </Organization>

          <Organization>
            <Organization.Header href="https://www.neatcommerce.com">
              Neat
            </Organization.Header>

            <List>
              <Position
                title="Principal Software Engineer (Front-End)"
                from="2020"
                to="2022"
              >
                {[
                  'Partnered with design team to maintain and evolve the design system, and promote it within the product organization. Major initiatives included migration from Sketch/Zeplin to Figma, and publishing the library using Storybook.js.',
                  'Partnered with product to evolve the design, quality and capabilities of Neat’s core payment features. During this time our coverage expanded to over 30 countries and currencies, with annualized payment volumes in the tens of millions.',
                  'Worked on technical and cross-functional initiatives in areas such as user management and security, and integrating Neat with Visa to become a PCI-compliant card issuer.',
                  'Conducted talks/knowledge sharing on our design system methodology (external), and the technical design around our payment system (internal).',
                ]}
              </Position>

              <Position title="Team Lead (Front-End)" from="2018" to="2020">
                {[
                  'Led the creation of and formalization of Neat’s product language into a design system, focusing on documentation, operations, and front-end development (React + emotion) while our design team led the visual design direction.',
                  'Partnered with product and design in discovery, research, problem/solution definition, requirements gathering, design workshops & reviews. Advocated for closer collaboration between all disciplines at each stage of product development instead of working via a series of handoffs.',
                  'Code owner/maintainer for several webapps and services. Performed code reviews, promoted and maintained common standards, best practices and patterns across the team.',
                ]}
              </Position>

              <Position title="Software Engineer" from="2017" to="2018">
                {[
                  'Led development of multiple web applications from application design and architecture through delivery using React.js, Redux and Node.js. (A little bit of GraphQL as well)',
                  'Implemented multicurrency account and bank payment features, integrating Neat’s applications with banking APIs and various payment rails (e.g. SWIFT).',
                  'Worked closely with product and design on refining product specs, requirements, design reviews, and other planning activities.',
                ]}
              </Position>
            </List>
          </Organization>

          <Organization>
            <Organization.Header href="https://www.hellotoby.com/en">
              HelloToby
            </Organization.Header>

            <List>
              <Position
                title="Full-stack Software Engineer"
                from="2016"
                to="2017"
              >
                {[
                  'Developed product features that integrated a React+Redux SSR webapp with a Node/Express server, consuming a Java (Spring MVC) RESTful API server.',
                  'Redesigned and implemented a new (S)CSS architecture using design tokens and CSS modules.',
                  'Led the transition of key interfaces away from an “M-dot” approach to fully responsive designs.',
                  'Participated in design and planning activities with product managers and designers.',
                  'Introduce static type checking with Flow.',
                  'Developed a companion mobile app using React-Native.',
                ]}
              </Position>
            </List>
          </Organization>

          <Organization>
            <Organization.Header>Independent Consultant</Organization.Header>

            <List>
              <Position
                title="Web Developer &amp; Designer"
                from="2012"
                to="2017"
              >
                {[
                  'Provided web design and development for businesses, agencies, and startups in Hong Kong. Worked solo, and as part of a larger team of up to 5-10 developers & designers.',
                  'Built websites and webapps using frameworks like Wordpress, AngularJS, MeteorJS. Early adopter of React.js in 2015.',
                  'Implemented style guides and scss systems based on methodologies like BEMCSS and Atomic Design, handed off code and Sketch files.',
                ]}
              </Position>
            </List>
          </Organization>
        </List>

        <Heading sx={{ mb: 3 }}>Skills</Heading>

        <List sx={{ mb: 8 }}>
          <Details label="Web">
            {[
              'JavaScript (ES2015+)',
              'TypeScript',
              'all kinds of CSS (e.g. vanilla, Sass, PostCSS, Tailwind etc)',
              'css-in-js (e.g. styled-components, emotion)',
              'Semantic HTML',
              'markup templating engines (e.g. ejs, pug, mjml)',
            ]}
          </Details>

          <Details label="Frameworks">
            {[
              'React.js',
              'Redux',
              'Next.js',
              'Storybook.js',
              'Nest.js',
              'Node.js',
              'Express',
              'Koa',
              'Svelte+Sveltekit',
              'jest',
              'Cypress',
              'Apollo GraphQL',
            ]}
          </Details>

          <Details label="Tools &amp; Services">
            {[
              'git',
              'Docker',
              'webpack',
              'Vite',
              'Figma',
              'Sketch',
              'AWS',
              'CircleCI',
              'GitHub Actions',
            ]}
          </Details>
        </List>

        <Heading sx={{ mb: 3 }}>Education</Heading>
        <p
          sx={{
            m: 0,
            pl: 4,
            fontSize: 2,
            '&::before': {
              content: '"\u2022"',
              fontWeight: 900,
              ml: -4,
              mr: '5px',
            },
            '@media print': {
              fontSize: 1,
            },
          }}
        >
          <strong>University of Southern California</strong>, Los Angeles CA
        </p>
      </main>
    </>
  );
};

ResumePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ResumePage;
