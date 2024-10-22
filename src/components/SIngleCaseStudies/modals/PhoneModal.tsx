import { FC } from 'react';
import Modal from './modal';
import PhoneFeatureSection from './PhoneFeature';

interface PhoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalImg1: { imgSrc: string; imgAlt?: string };
  modalImg2: { imgSrc: string; imgAlt?: string };
  listItem?: string[];
  description?: string;
  heading: string;
  title: string;
}

const PhoneModal: FC<PhoneModalProps> = ({
  isOpen,
  onClose,
  modalImg1,
  modalImg2,
  listItem,
  description,
  heading,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <PhoneFeatureSection
        heading=""
        title="Nazwa funkcjonalności"
        imageSrc1={modalImg1}
        imageSrc2={modalImg2}
        technologyItems={listItem}
        description={description}
      />
    </Modal>
  );
};

export default PhoneModal;
