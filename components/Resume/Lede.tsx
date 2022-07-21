export default function Lede({
  children,
  ...rest
}: {
  children: React.ReactNode;
}) {
  return (
    <p
      sx={{
        fontSize: 2,
        lineHeight: 'body',
        '@media screen': {
          maxWidth: '70ch',
          mb: 9,
          mt: -6,
        },
        '@media print': {
          fontSize: '10pt',
          mt: 4,
          mb: 9,
        },
      }}
      {...rest}
    >
      I’m a systems-minded designer and developer with 10 years of experience
      building things for the web. Experienced at scaling up CSS architecture,
      and building design systems in React.
    </p>
  );
}
