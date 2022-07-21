import type * as CSS from 'csstype';
import { Flex as BaseFlex, StylePropertyValue, SxProp } from 'theme-ui';

type Props = {
  as?: React.ElementType<Record<string, unknown>> | undefined;
  flexFlow?: string;
  flexDirection?: StylePropertyValue<CSS.Property.FlexDirection | undefined>;
  flexWrap?: StylePropertyValue<CSS.Property.FlexWrap | undefined>;
  justifyContent?: string;
  alignItems?: string;
  children: React.ReactNode;
  inline?: boolean;
} & SxProp;

const Flex = (props: Props) => {
  const {
    as = 'div',
    flexFlow = undefined,
    flexDirection = 'row',
    flexWrap = 'nowrap',
    justifyContent = 'flex-start',
    alignItems = 'flex-start',
    inline = false,
    ...rest
  } = props;
  return (
    <BaseFlex
      as={as}
      sx={{
        display: inline ? 'inline-flex' : 'flex',
        ...(flexFlow ? { flexFlow } : { flexDirection, flexWrap }),
        justifyContent,
        alignItems,
      }}
      {...rest}
    />
  );
};

export default Flex;
