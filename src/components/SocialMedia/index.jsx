import React from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { IoIosMail } from 'react-icons/io';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { SocialMediaContainer } from './style';

const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <a
        href="https://www.linkedin.com/in/italo-jean-araujo-de-souza/"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineLinkedin size={'4em'} />
      </a>
      <a
        href="mailto: italojsouza@gmail.com?subject=Contato pelo site de Desenvolvedor"
        target="_blank"
        rel="noreferrer"
      >
        <IoIosMail size={'4em'} />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5531995385299&text=Contato%20Pelo%20Site"
        target="_blank"
        rel="noreferrer"
      >
        <IoLogoWhatsapp size={'4em'} />
      </a>
    </SocialMediaContainer>
  );
};

export default SocialMedia;
