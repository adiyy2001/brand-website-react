import { FC } from 'react';
import styled from 'styled-components';
import { Heading4 } from './styles/Heading';
import { StyledParagraph } from './styles/Peragraph';

interface ProductCardProp {
  item: {
    id: number | string;
    title: string;
    imgSrc: string;
    imgAlt?: string;
    description?: string;
  };
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: calc(20px);
`;

const CardImageContainer = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductCardItem: FC<ProductCardProp> = ({ item }) => {
  return (
    <CardWrapper>
      <CardImageContainer>
        <img src={item.imgSrc} alt={item.imgAlt} />
      </CardImageContainer>
      <Heading4>{item.title}</Heading4>
      <StyledParagraph>{item.description}</StyledParagraph>
    </CardWrapper>
  );
};

export default ProductCardItem;
