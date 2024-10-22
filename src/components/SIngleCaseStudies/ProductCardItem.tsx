import { FC, useState } from 'react';
import styled from 'styled-components';
import LaptopDetails from './modals/LaptopFeatureModal';
import Modal from './modals/modal';
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const CloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CardWrapper>
        <CardImageContainer>
          <img
            onClick={() => setIsModalOpen((prev) => !prev)}
            src={item.imgSrc}
            alt={item.imgAlt}
          />
        </CardImageContainer>
        <Heading4>{item.title}</Heading4>
        <StyledParagraph>{item.description}</StyledParagraph>
      </CardWrapper>

      <Modal onClose={CloseModal} isOpen={isModalOpen}>
        <LaptopDetails />
      </Modal>
    </>
  );
};

export default ProductCardItem;
