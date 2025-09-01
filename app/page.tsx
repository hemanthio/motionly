import Link from 'next/link';
import React from 'react';
import XIcon from '@/components/website/icons/x';
import GitHubIcon from '@/components/website/icons/github';
import ThemeSwitch from '@/components/website/theme-switch';
import { ChevronRight } from 'lucide-react';
import { MPLogo } from '@/components/website/icons/motion-primitives-logo';
import LaunchBanner from '@/components/website/launch-banner';


function Header() {
  return (
    <header className='relative top-0 z-10 bg-white px-6 py-5 lg:z-10 lg:flex lg:h-16 lg:items-center lg:px-8 lg:py-0 dark:border-white/10 dark:bg-zinc-950'>
      <div className='mx-auto flex w-full items-center justify-between md:max-w-7xl'>
        <a href='/' className='relative flex items-center space-x-2'>
          <MPLogo className='h-6 w-auto' />
          <div className='text-sm font-medium text-zinc-950 dark:text-white'>
            motion-primitives
          </div>
          <span className='mb-4 ml-0 rounded-sm bg-zinc-800 px-1.5 py-0.5 text-[10px] font-medium text-zinc-50 select-none'>
            beta
          </span>
        </a>

        <div className='flex items-center space-x-6'>
          <nav className='hidden items-center space-x-6 sm:flex'>
            <Link
              href='/docs/button'
              className='text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white'
            >
              Components
            </Link>
          </nav>
          <div className='hidden h-8 w-[0.5px] bg-zinc-200 sm:flex dark:bg-zinc-800' />
          <nav className='flex items-center space-x-2'>
            <a
              href='https://twitter.com/Ibelick'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex h-9 w-9 items-center justify-center'
            >
              <XIcon className='h-4 w-4 fill-zinc-950 dark:fill-white' />
            </a>
            <a
              href='https://github.com/ibelick/motion-primitives'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex h-9 w-9 items-center justify-center'
            >
              <GitHubIcon className='h-4 w-4 fill-zinc-950 dark:fill-white' />
            </a>
            <ThemeSwitch />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default function Motion() {
  return (
    <>
      <LaunchBanner />
      <Header />
      <div className='px-6 py-4 pb-20'>
        <section className='flex h-full flex-col items-center justify-center pt-20'>
          <div className='flex w-full max-w-lg flex-col items-center justify-center text-center'>
            <h1 className='relative mb-4 text-4xl font-medium text-zinc-950 dark:text-zinc-50'>
              UI kit to make beautiful, animated interfaces, faster.
            </h1>
            <p className='text-center text-zinc-600 dark:text-zinc-200'>
              Beautifully designed motion components. Easy copy-paste.
              Customizable. Open Source. Built for engineers and designers.
            </p>
          </div>
          <div className='flex items-center space-x-4 py-6'>
            <Link href='/docs'>
              <button className='inline-flex items-center rounded-md border border-zinc-100 bg-zinc-50 px-2.5 py-1.5 text-sm text-zinc-950 hover:bg-zinc-100 dark:border-zinc-900 dark:bg-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-600'>
                Explore Docs
                <ChevronRight className='ml-1.5 h-4 w-4' />
              </button>
            </Link>
            <a
              href='https://github.com/ibelick/motion-primitives'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='inline-flex items-center rounded-md bg-zinc-900 px-2.5 py-1.5 text-sm text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-300'>
                <GitHubIcon className='mr-1.5 h-4 w-4 fill-white dark:fill-zinc-950' />
                Star on GitHub
              </button>
            </a>
          </div>
          <span className='mt-2 text-center text-sm text-zinc-500 dark:text-zinc-400'>
            Free updates and new components released regularly.
          </span>
        </section>

        {/* <section className='mx-auto max-w-3xl py-32'>
          <div className='flex flex-col items-center justify-center space-y-8'>
            <h2 className='text-2xl font-semibold text-zinc-950 dark:text-zinc-50'>
              Button Component Demo
            </h2>
            <div className='flex flex-col items-center space-y-4'>
              <Button text='Solid Button' variant='solid' />
              <Button text='Border Button' variant='border' />
            </div>
            <p className='max-w-md text-center text-zinc-600 dark:text-zinc-200'>
              Experience our animated button component with smooth hover effects
              and text animations.
            </p>
          </div>
        </section> */}

        <div className='text-center text-sm text-zinc-500 dark:text-zinc-400'>
          <Link href='/docs'>and more...</Link>
        </div>
      </div>
    </>
  );
}
