import styled from 'styled-components';

export const FlexItems = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  @media (min-width: 767px) {
    gap: 1.5rem;
  }
`;

export const FlexItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 14px;
`;

export const ItemImg = styled.div`
  img {
    width: 22.383px;
    height: 24px;
  }
`;

export const ItemTitle = styled.span`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 150% */
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.text} !important;
  font-family: 'lato', sans-serif;
  @media (min-width: 640px) {
    font-size: 24px;
  }
`;
