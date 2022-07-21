import { SxProp } from 'theme-ui';

export default function Heading({
  children,
  ...rest
}: {
  children: React.ReactNode;
} & SxProp) {
  return (
    <h2
      sx={{
        variant: 'typography.headings.h2',
        fontSize: 2,
        textTransform: 'uppercase',
        fontWeight: 700,
        color: 'fg.muted',
        mb: 6,
        breakAfter: 'avoid',
        '@media print': {
          fontSize: '10pt',
          mb: 4,
        },
      }}
      {...rest}
    >
      {children}
    </h2>
  );
}
