'use client';

import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';

export default function SlidingBannerHome() {
    const [api, setApi] = useState<any>(null);
    const [current, setCurrent] = useState(0);
    const slides = [
        {
            id: 0,
            label: 'Tab 1',
            image: 'https://tiki.vn/blog/wp-content/uploads/2023/11/top-10-dien-thoai-chup-anh-dep-thumb.jpg',
        },
        {
            id: 1,
            label: 'Tab 2',
            image: 'https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Knms/di-dong/1-top-10-dien-thoai-co-camera-tot-nhat-chup-anh-dep-nhat-hien-nay.jpg',
        },
        { id: 2, label: 'Tab 3', image: 'https://cdn-images.vtv.vn/2019/10/10/photo-1-15706463929181755249740.jpg' },
    ];

    useEffect(() => {
        if (!api) return;

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap());
        };

        api.on('select', onSelect);
        return () => api.off('select', onSelect);
    }, [api]);

    const goTo = (index: number) => {
        api?.scrollTo(index);
    };

    return (
        <div className="space-y-4">
            <div className="flex gap-2">
                {slides.map((s, i) => (
                    <button
                        key={s.id}
                        onClick={() => goTo(i)}
                        className={`px-3 py-1 rounded-lg text-sm transition
              ${current === i ? 'bg-primary text-white' : 'bg-muted'} 
            `}
                    >
                        {s.label}
                    </button>
                ))}
            </div>

            <Carousel setApi={setApi} className="w-full max-w-md">
                <CarouselContent>
                    {slides.map((s) => (
                        <CarouselItem key={s.id}>
                            <div className="rounded-lg text-center text-lg font-medium h-full">
                                <Image
                                    className="object-cover h-full"
                                    src={s.image}
                                    alt={s.label}
                                    width={800}
                                    height={800}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
