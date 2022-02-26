import useEmblaCarousel from 'embla-carousel-react';
import { useState, useCallback, useEffect } from 'react';
import styles from './Carousel.module.css';
import Autoplay from 'embla-carousel-autoplay';

export default  function Carousel(props){
  const [emblaRef, embla] = useEmblaCarousel({ loop: true },[Autoplay({stopOnInteraction:false, delay:3500})]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div className={`embla ${styles.embla}`} ref={emblaRef}>
      <div className={`embla__container ${styles.embla__container}`}>
        {props.slides.map((slide,index)=> <div key={index} className={`embla__slide ${styles.embla__slide}`}>{slide}</div>)}
      </div>
      <a className={`btn-floating waves-effect waves-light ${styles.button} ${process.env.primaryColor} ${styles.left}`} onClick={scrollPrev}><i className="material-icons">keyboard_arrow_left</i></a>
      <a className={`btn-floating waves-effect waves-light ${process.env.primaryColor} ${styles.button} ${styles.right}`} onClick={scrollNext}><i className="material-icons">keyboard_arrow_right</i></a>
      <div className= {styles.dotContainer}>
        {props.slides.map((_,index)=> <button key = {index} className={`${index === selectedIndex ? process.env.primaryColor : ""} ${styles.dot}`} type="button" onClick={()=>scrollTo(index)}/>)}
      </div>
    </div>
  )
}