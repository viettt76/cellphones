export type Category = {
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    categoryLinks: { label: string; href: string }[];
    subCategories: SubCategory[];
};

export type SubCategory = {
    label: string;
    items: SubCategoryItem[];
};

export type SubCategoryItem = {
    label?: string;
    href: string;
    image?: string;
};
