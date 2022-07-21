import React from 'react';
import { SxProp } from 'theme-ui';
import generateHash from 'utils/generateHash';
import Flex from 'components/Flex';
import List from 'components/List';

type Props = {
  title: string;
  from: string;
  to: string;
  children: string[];
} & SxProp;

const Position = ({ title, from, to, children, ...rest }: Props) => {
  return (
    <li
      sx={{
        mb: 8,
      }}
      {...rest}
    >
      <section>
        <Flex
          as="header"
          sx={{
            flexFlow: ['column nowrap'],
            mb: 4,
          }}
        >
          <h4
            sx={{
              variant: 'typography.headings.h4',
              mb: 2,
            }}
          >
            {title}
          </h4>
          <time
            sx={{
              fontFamily: 'monospace',
              fontSize: '13px',
              lineHeight: 'heading',
              fontWeight: 400,
              color: 'fg.subtle',
            }}
          >
            {from}–{to}
          </time>
        </Flex>

        <List>
          {React.Children.map(children, (v) => {
            return (
              <li
                key={generateHash(v)}
                sx={{
                  listStyle: 'none',
                  fontSize: [2, 1],
                  '&:not(:last-of-type)': {
                    mb: 2,
                  },
                  '&::before': {
                    content: '"\u2022"',
                    fontWeight: 900,
                    ml: -4,
                    mr: '5px',
                  },
                  '@media screen': {
                    maxWidth: '80ch',
                  },
                  '@media print': {
                    fontSize: '9pt',
                    lineHeight: 1.4,
                  },
                }}
              >
                {v}
              </li>
            );
          })}
        </List>
      </section>
    </li>
  );
};

export default Position;
