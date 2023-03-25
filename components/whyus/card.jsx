import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, Draggable } from 'gsap/all';

const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Draggable);

    let iteration = 0;

    gsap.set('.cards li', { xPercent: 400, opacity: 0, scale: 0 });

    const spacing = 0.1;
    const cardWidth = 14 * 16; // 14rem * 16px per rem
    const galleryWidth = cardWidth + spacing * cardWidth * 29;

    const dragProxyRef = document.querySelector('.drag-proxy');

    const scrubTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: galleryRef.current,
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    scrubTimeline.fromTo(
      '.cards',
      {
        x: -cardWidth - (iteration % 2 === 0 ? spacing * cardWidth : 0),
      },
      {
        x: -cardWidth * 2 - (iteration % 2 === 0 ? spacing * cardWidth : 0),
        ease: 'none',
        onUpdate: () => {
          if (scrubTimeline.time() === scrubTimeline.endTime()) {
            iteration++;
          } else if (scrubTimeline.time() === 0) {
            iteration--;
          }
        },
      }
    );

    gsap.to('.cards li', {
      opacity: 1,
      scale: 1,
      xPercent: 0,
      stagger: {
        each: 0.05,
        from: 'random',
        ease: 'none',
      },
      scrollTrigger: {
        trigger: galleryRef.current,
        start: 'top bottom',
        end: '+=100%',
        scrub: true,
        snap: 1 / (30 - 1),
        invalidateOnRefresh: true,
      },
    });

    gsap.to(dragProxyRef, {
      width: galleryWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: galleryRef.current,
        start: 'top top',
        end: 'bottom bottom',
        invalidateOnRefresh: true,
      },
    });

    Draggable.create(dragProxyRef, {
      type: 'x',
      trigger: galleryRef.current,
      animation: scrubTimeline,
      dragClickables: true,
      cursor: 'move',
      dragResistance: 0,
    });
  }, []);

  return (
    <div className="gallery" ref={galleryRef}>
      <ul className="cards">
        {Array.from({ length: 31 }).map((_, index) => (
          <li key={index}>{index}</li>
        ))}
      </ul>
      <div className="actions">
        <button className="prev">Prev</button>
        <button className="next">Next</button>
      </div>
      <div className="drag-proxy"></div>
    </div>
  );
};

export default Gallery;
