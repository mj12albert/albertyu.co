export default function VersionTag(props: Record<string, unknown>) {
  return (
    <code
      sx={{
        position: 'fixed',
        bottom: 2,
        right: 2,
        fontSize: [0, '11px'],
        color: 'gray.3',
      }}
      {...props}
    >
      {process.env.IMAGE_TAG}
    </code>
  );
}
