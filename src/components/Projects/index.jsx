import { SwiperContainer } from './style'
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'

import PropTypes from 'prop-types'
import { WorkCard } from '../WorkCard'
import { HorizontalDivider } from '../Horizontal'
import { motion } from 'framer-motion'


Projects.propTypes = {
    content: PropTypes.object.isRequired
}

const workShownOrder = [0, 1, 2, 3, 4, 5];

export function Projects({content}) {

  return (
    <>
      <div
        className="flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.2 }} 
          className="text-3xl font-bold m-2 text-brand-1">
          {content.works}
        </motion.div>
        <SwiperContainer>
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={50}
            slidesPerGroup={1}
            navigation={true}
            mousewheel={true}
            grabCursor={true}
            loop={true}
          >            
            {workShownOrder.map((id) => (  
              <SwiperSlide key={id}>
                <WorkCard work={content.listOfWorks[id]} />
              </SwiperSlide>          
            ))}
          </Swiper>
        </SwiperContainer>
      </div>
      <HorizontalDivider />
    </>
  )
}