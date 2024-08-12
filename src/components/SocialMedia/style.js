import styled from 'styled-components';

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 40px;
  height: 60px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
  }

  a:hover {
    transform: scale(1.05);
  }
  
  img {
    height: 40px;
    fill: #127890;
  }
`;

export { SocialMediaContainer };
