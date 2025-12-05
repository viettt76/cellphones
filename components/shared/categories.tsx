import { Category, SubCategory } from '@/types/category';
import { ChevronRight, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Categories() {
    const categories: Category[] = [
        {
            icon: Phone,
            categoryLinks: [
                {
                    label: 'Điện thoại',
                    href: '/mobile',
                },
                {
                    label: 'Tablet',
                    href: '/tablet',
                },
            ],
            subCategories: [
                {
                    label: 'Hãng',
                    items: [
                        { label: 'Samsung', href: '/mobile/samsung' },
                        { label: 'Apple', href: '/mobile/apple' },
                        { label: 'Xiaomiádfasdf', href: '/mobile/xiaomi' },
                        { label: 'Xiaomi', href: '/mobile/xiaomi' },
                        { label: 'X', href: '/mobile/xiaomi' },
                        { label: 'X', href: '/mobile/xiaomi' },
                        { label: 'Xádfsdf', href: '/mobile/xiaomi' },
                    ],
                },
                {
                    label: 'Điện thoại hot',
                    items: [
                        { label: 'S23 Ultra', href: '/mobile/s23-ultra' },
                        {
                            label: 'IPhone 17 pro',
                            href: '/mobile/iphone-15-pro',
                            image: 'https://cdn.tgdd.vn/Products/Images/42/329149/iphone-16-pro-max-sa-mac-thumb-1-600x600.jpg',
                        },
                    ],
                },
            ],
        },
        {
            categoryLinks: [
                {
                    label: 'Laptop',
                    href: '/laptop',
                },
            ],
            subCategories: [
                {
                    label: 'Thương hiệu',
                    items: [
                        { label: 'Lenovo', href: '/laptop/lenovo' },
                        { label: 'Asus', href: '/laptop/asus' },
                        { label: 'Dellsádf', href: '/laptop/dell' },
                    ],
                },
                {
                    label: 'Nhu cầu',
                    items: [
                        { label: 'Gaming', href: '/laptop/gaming' },
                        { label: 'Học tập', href: '/laptop/hoc-tap' },
                        { label: 'Văn phòng', href: '/laptop/van-phong' },
                    ],
                },
                {
                    label: 'Chip',
                    items: [
                        { label: 'Core i5', href: '/laptop/core-i5' },
                        { label: 'Core i7', href: '/laptop/core-i7' },
                        { label: 'Ryzen 5', href: '/laptop/ryzen-5' },
                    ],
                },
            ],
        },
    ];

    const [showSubCategories, setShowSubCategories] = useState<SubCategory[]>([]);

    return (
        <div className="relative w-fit shadow-[0_0_4px_rgba(0,0,0,0.1)]" onMouseLeave={() => setShowSubCategories([])}>
            <div className="min-w-60 max-w-80 py-2">
                {categories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                        <div
                            className="px-4 py-2 flex justify-between hover:bg-input/40"
                            onMouseEnter={() => setShowSubCategories(category.subCategories)}
                            key={`category-${index}`}
                        >
                            <div className="flex gap-x-2    ">
                                {Icon ? <Icon className="w-4 text-primary" /> : <div className="w-4"></div>}
                                {category.categoryLinks.map((link, index) => (
                                    <Link
                                        className="hover:text-primary"
                                        href={link.href}
                                        key={`category-link-${link.label}`}
                                    >
                                        {link.label}
                                        {index !== category.categoryLinks.length - 1 && ', '}
                                    </Link>
                                ))}
                            </div>
                            {category.subCategories.length > 0 && <ChevronRight className="text-ring" />}
                        </div>
                    );
                })}
            </div>
            {showSubCategories.length > 0 && (
                <div className="absolute w-[calc(1200px-100%-0.5rem)] left-[calc(100%+0.5rem)] top-0 bg-background shadow-[0_0_4px_rgba(0,0,0,0.1)] rounded-xl max-h-96 before:block before:w-2 before:h-full before:absolute before:right-full before:top-0">
                    <div className="flex space-x-4 px-4 py-2">
                        {showSubCategories.map((subCategory) => (
                            <div className="space-y-2 min-w-60" key={`sub-category-${subCategory.label}`}>
                                <div className="font-bold px-0 whitespace-nowrap">{subCategory.label}</div>

                                <div className="flex flex-wrap max-w-60 gap-2">
                                    {subCategory.items.map((item, index) => (
                                        <Link
                                            className="border rounded-md px-2 py-1 p-1 hover:bg-input/40 flex items-center gap-x-2"
                                            href={item.href}
                                            key={`sub-category-item-${item.label}-${index}`}
                                        >
                                            {item.image && (
                                                <Image
                                                    className="w-4 h-4 object-cover"
                                                    src={item.image}
                                                    alt={item.label || ''}
                                                    width={800}
                                                    height={800}
                                                />
                                            )}
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
