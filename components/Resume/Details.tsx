import React from 'react';
import Flex from 'components/Flex';
import Icon from 'assets/svg/chevron-down.svg';

type Props = {
  label: string;
  children: string[];
};

const Details = ({ label, children = [], ...rest }: Props) => {
  const content = React.Children.map(children, (val: string, i) => {
    return `${val}${i >= children.length - 1 ? '' : `, `}`;
  })
    .reduce((acc, curr) => {
      return `${acc}${curr}`;
    }, '')
    .replace(/-/g, '‑');

  return (
    <li
      sx={{
        breakInside: 'avoid',
        '&:not(:last-of-type)': {
          mb: 3,
        },
      }}
      {...rest}
    >
      <details
        open
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          '&[open] svg': {
            transform: 'translate(-4px, 0) scale(-1)',
          },
        }}
      >
        <Flex
          as="summary"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            height: [32, 'auto'],
            lineHeight: 1,
            cursor: 'pointer',
            '&:is(:hover, :active, :focus-visible)': {
              color: 'accent.fg',
            },
            '@media print': {
              height: 'auto',
            },
          }}
        >
          <p
            sx={{
              fontSize: 1,
              fontWeight: 500,
              m: 0,
              '@media print': {
                fontSize: '9pt',
              },
            }}
          >
            {label}
          </p>
          <Icon
            sx={{
              width: 20,
              height: 20,
              transform: 'translate(-4px, 1px) scale(1)',
              '@media print': {
                display: 'none',
              },
            }}
          />
        </Flex>

        <pre
          sx={{
            mt: 1,
            whiteSpace: 'pre-wrap',
            wordBreak: 'keep-all',
            hyphens: 'none',
            maxWidth: '90ch',
            fontSize: 0,
            color: 'fg.subtle',
            '@media print': {
              fontSize: '8pt',
            },
          }}
        >
          {content}
        </pre>
      </details>
    </li>
  );
};

export default Details;
