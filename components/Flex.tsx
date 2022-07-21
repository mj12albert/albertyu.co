import type * as CSS from 'csstype';
import { Flex as BaseFlex, StylePropertyValue, SxProp } from 'theme-ui';

type Props = {
  as?: React.ElementType<Record<string, unknown>> | undefined;
  flexFlow?: string;
  flexDirection?: StylePropertyValue<CSS.Property.FlexDirection | undefined>;
  flexWrap?: StylePropertyValue<CSS.Property.FlexWrap | undefined>;
  justifyContent?: StylePropertyValue<CSS.Property.JustifyContent | undefined>;
  alignItems?: StylePropertyValue<CSS.Property.AlignItems | undefined>;
  children: React.ReactNode;
  display?: StylePropertyValue<CSS.Property.Display | undefined>;
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
    display = undefined,
    ...rest
  } = props;
  return (
    <BaseFlex
      as={as}
      sx={{
        display: display || (inline ? 'inline-flex' : 'flex'),
        ...(flexFlow ? { flexFlow } : { flexDirection, flexWrap }),
        justifyContent,
        alignItems,
      }}
      {...rest}
    />
  );
};

export default Flex;
