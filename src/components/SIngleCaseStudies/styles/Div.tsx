import styled from 'styled-components';

interface FlexContainerProps {
  display?:
    | 'block'
    | 'inline'
    | 'inline-block'
    | 'flex'
    | 'inline-flex'
    | 'grid'
    | 'inline-grid'
    | 'table'
    | 'table-row'
    | 'table-cell'
    | 'table-caption'
    | 'none'
    | 'run-in';
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
  basis?: string; // Default flex-basis value
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
  mdBasis?: string; // md flex-basis
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
  lgBasis?: string; // lg flex-basis
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
  xlBasis?: string; // xl flex-basis
}

const Div = styled.div<FlexContainerProps>`
  display: ${({ display }) => display || 'block'};
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
  gap: ${({ gap }) => gap || '0'};
  flex-basis: ${({ basis }) => basis || 'auto'};

  @media (min-width: 768px) {
    /* md breakpoint */
    flex-direction: ${({ mdDirection, direction }) =>
      mdDirection || direction || 'row'};
    justify-content: ${({ mdJustify, justify }) =>
      mdJustify || justify || 'flex-start'};
    align-items: ${({ mdAlign, align }) => mdAlign || align || 'stretch'};
    flex-wrap: ${({ mdWrap, wrap }) => mdWrap || wrap || 'nowrap'};
    gap: ${({ mdGap, gap }) => mdGap || gap || '0'};
    flex-basis: ${({ mdBasis, basis }) => mdBasis || basis || 'auto'};
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
    flex-basis: ${({ lgBasis, mdBasis, basis }) =>
      lgBasis || mdBasis || basis || 'auto'};
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
    flex-basis: ${({ xlBasis, lgBasis, mdBasis, basis }) =>
      xlBasis || lgBasis || mdBasis || basis || 'auto'};
  }
`;

export default Div;
