'use client';
import { EmblaOptionsType } from 'embla-carousel';
import styles from '@/styles/Carousel.module.css';

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react';
import { StarIcon } from '@heroicons/react/16/solid';

const reviews = [
    {
        id: 1,
        rating: 5,
        content: `
      <p>Probably some of my favorite people that I’ve ever worked with; they are focused on providing quality work in a professional manner I recommend them highly.</p>
    `,
        author: 'joe sena',
    },
    {
        id: 2,
        rating: 5,
        content: `
      <p>Very good quality work and efficient. Highly recommended.</p>
    `,
        author: 'Kalub Krieger',
    },
    {
        id: 3,
        rating: 5,
        content: `
      <p>Great company. Great people. Amazing work.</p>
    `,
        author: 'Hunter Borer',
    },
    {
        id: 4,
        rating: 5,
        content: `
      <p>Quick to get back to you... Detailed quotes.. Has a lot of handyman skills and both new construction skills as well as modifications... Respectable and local.. After talking to him I also found out the company is veteran owned and operated... Anything from flower beds to new decks these guys are willing to help and have great knowledge.. Will definitely being spreading the word for the great work he helped with</p>
    `,
        author: 'reconman84',
    },
    {
        id: 5,
        rating: 5,
        content: `
      <p>Did a great job on some interior trim on our house.</p>
    `,
        author: 'Shane Walker',
    },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

type PropType = {
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = () => {
    const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true, duration: 50 }

    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay({ delay: 6000, stopOnInteraction: false })])

    return (
        <section className={`${styles.embla} bg-gray-900 p-10 mx-auto mt-22 max-w-7xl px-6 sm:mt-26 lg:px-8 xl:rounded-3xl`}>
            <h2 className="py-10 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Customer Reviews
            </h2>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {reviews.map((review) => (
                        <div key={review.id} className={`${styles.embla__slide} flex space-x-4 text-sm text-white`}>
                            <div className={styles.embla__slide__number}>
                                <h3 className="font-medium text-white">{review.author}</h3>

                                <div className="mt-4 flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            aria-hidden="true"
                                            className={classNames(
                                                review.rating > rating ? 'text-yellow-400' : 'text-white',
                                                'size-5 shrink-0',
                                            )}
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">{review.rating} out of 5 stars</p>

                                <div dangerouslySetInnerHTML={{ __html: review.content }} className="mt-4 text-sm/6 text-white" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel