'use client';

import Categories from '@/components/shared/categories';
import SlidingBannerHome from '@/components/shared/sliding-banner-home';

export default function Home() {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="flex items-stretch">
                <Categories />
                <SlidingBannerHome />
            </div>
        </div>
    );
}
