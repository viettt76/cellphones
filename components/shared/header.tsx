import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ChevronDown, Search } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import Marquee from 'react-fast-marquee';
import Categories from './categories';

export default function Header() {
    const [show, setShow] = useState(false);

    return (
        <div className="overflow-hidden p-2 max-w-screen-xl mx-auto bg-primary">
            <Marquee autoFill>
                <span className="mx-1 text-white text-xs">Flash sale 50%</span>
            </Marquee>
            <div className="flex justify-between items-center gap-x-3">
                <Image className="w-10 h-10" src="/images/logo.png" alt="Logo" width={800} height={800} />
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="text-white bg-input/30">
                            Danh mục <ChevronDown />
                        </Button>
                    </DialogTrigger>
                    <DialogContent
                        className="border-none outline-none left-[clamp(0px,calc((100vw-1200px)/2),9999px)] translate-x-0 top-36 w-fit p-0"
                        showCloseButton={false}
                    >
                        <DialogTitle className="hidden"></DialogTitle>
                        <Categories />
                    </DialogContent>
                </Dialog>
                <div className="flex-1 flex items-center bg-background rounded-lg px-2 gap-x-2">
                    <Search />
                    <Input
                        className="p-0 pe-2 border-none outline-none focus-visible:ring-0 !bg-transparent placeholder:text-ring/60"
                        placeholder="Bạn muốn mua gì hôm nay?"
                    />
                </div>
                <div className="w-96"></div>
            </div>
        </div>
    );
}
