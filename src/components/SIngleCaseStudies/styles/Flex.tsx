import styled from 'styled-components';

interface FlexContainerProps {
  direction?: 'row' | 'column';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: string; // Default gap value
  mdDirection?: 'row' | 'column';
  mdJustify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  mdAlign?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  mdWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  mdGap?: string;
  lgDirection?: 'row' | 'column';
  lgJustify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  lgAlign?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  lgWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  lgGap?: string;
  xlDirection?: 'row' | 'column';
  xlJustify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  xlAlign?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  xlWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  xlGap?: string;
}

const Flex = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
  gap: ${({ gap }) => gap || '0'};

  @media (min-width: 768px) {
    /* md breakpoint */
    flex-direction: ${({ mdDirection, direction }) =>
      mdDirection || direction || 'row'};
    justify-content: ${({ mdJustify, justify }) =>
      mdJustify || justify || 'flex-start'};
    align-items: ${({ mdAlign, align }) => mdAlign || align || 'stretch'};
    flex-wrap: ${({ mdWrap, wrap }) => mdWrap || wrap || 'nowrap'};
    gap: ${({ mdGap, gap }) => mdGap || gap || '0'};
  }

  @media (min-width: 1024px) {
    /* lg breakpoint */
    flex-direction: ${({ lgDirection, mdDirection, direction }) =>
      lgDirection || mdDirection || direction || 'row'};
    justify-content: ${({ lgJustify, mdJustify, justify }) =>
      lgJustify || mdJustify || justify || 'flex-start'};
    align-items: ${({ lgAlign, mdAlign, align }) =>
      lgAlign || mdAlign || align || 'stretch'};
    flex-wrap: ${({ lgWrap, mdWrap, wrap }) =>
      lgWrap || mdWrap || wrap || 'nowrap'};
    gap: ${({ lgGap, mdGap, gap }) => lgGap || mdGap || gap || '0'};
  }

  @media (min-width: 1280px) {
    /* xl breakpoint */
    flex-direction: ${({ xlDirection, lgDirection, mdDirection, direction }) =>
      xlDirection || lgDirection || mdDirection || direction || 'row'};
    justify-content: ${({ xlJustify, lgJustify, mdJustify, justify }) =>
      xlJustify || lgJustify || mdJustify || justify || 'flex-start'};
    align-items: ${({ xlAlign, lgAlign, mdAlign, align }) =>
      xlAlign || lgAlign || mdAlign || align || 'stretch'};
    flex-wrap: ${({ xlWrap, lgWrap, mdWrap, wrap }) =>
      xlWrap || lgWrap || mdWrap || wrap || 'nowrap'};
    gap: ${({ xlGap, lgGap, mdGap, gap }) =>
      xlGap || lgGap || mdGap || gap || '0'};
  }
`;

export default Flex;
