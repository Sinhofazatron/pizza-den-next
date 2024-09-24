import React from "react";
import { cn } from '@/lib/utils'
import {Container} from "@/components/shared/container";
import Image from "next/image";
import { Button } from "../ui";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ( {className} ) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className='flex items-center justify-between py-8'>
        <div className="flex items-center gap-4">
          <Image src='/logo.png' alt='logo' width={35} height={35}></Image>
          <div>
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">Best of the best</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant='outline'>Войти</Button>
          <div>
            <Button className="group relative">
              <b>520p</b>
              <span className="h-full w-[1px] bg-white/30 mx-3"/>
              <b>3</b>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}