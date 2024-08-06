import styled from 'styled-components';


export const SwiperContainer = styled.div`
  display: flex;
  width: 100%;

  .swiper-slide {
    height: 100% !important;
    margin: 10px 0;
    width: 100%;
  } 
  .swiper-button-prev,
  .swiper-button-next {
    scale: 1.2;
    font-weight: 900;    
    background-image: linear-gradient(to bottom, #127890, #eaecc6);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
`;
