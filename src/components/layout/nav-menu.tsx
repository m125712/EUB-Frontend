'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { navLinks } from '@/config/nav-links';
import { ChevronsRight } from 'lucide-react';

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map((item, index) => {
          if (!item.children) {
            if (item.href) {
              return (
                <Link
                  target={item.newTab ? '_blank' : '_self'}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'bg-transparent  focus:bg-transparent'
                  )}
                  href={item.href}
                  key={index}
                >
                  {item.title}
                </Link>
              );
            } else {
              return (
                <NavigationMenuLink
                  key={index}
                  asChild
                  className={cn(navigationMenuTriggerStyle(), 'w-full')}
                >
                  <p className='text-sm font-bold text-primary w-full '>
                    {item.title}
                  </p>
                </NavigationMenuLink>
              );
            }
          } else {
            return (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger className='bg-transparent'>
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul
                    className={cn(
                      'gap-4 p-2 lg:p-6 md:w-[400px] lg:w-[400px] xl:w-[1000px] grid md:grid-cols-2 xl:grid-cols-3',
                      item.className
                    )}
                  >
                    {item.children &&
                      item.children.map((child, index) => (
                        <div key={index}>
                          {child.href ? (
                            <Link href={child.href}>
                              <NavigationMenuLink
                                asChild
                                className={cn(
                                  navigationMenuTriggerStyle(),
                                  'w-full',
                                  child.className
                                )}
                              >
                                <p className='text-sm font-bold text-primary'>
                                  {child.title}
                                </p>
                              </NavigationMenuLink>
                            </Link>
                          ) : (
                            <NavigationMenuLink
                              asChild
                              className={cn(
                                navigationMenuTriggerStyle(),
                                'w-full'
                              )}
                            >
                              <p className='text-sm font-bold text-primary w-full '>
                                {child.title}
                              </p>
                            </NavigationMenuLink>
                          )}

                          {child.children && (
                            <ul className='mt-1'>
                              {child.children.map((item, index) => (
                                <li key={index}>
                                  {item.newTab ? (
                                    <Link
                                      target='_blank'
                                      href={item.href!}
                                      legacyBehavior
                                      passHref
                                    >
                                      <NavigationMenuLink
                                        className={cn(
                                          navigationMenuTriggerStyle(),
                                          item.className
                                        )}
                                      >
                                        <ChevronsRight className='mr-1 size-3' />
                                        <p className='w-full text-wrap'>
                                          {item.title}
                                        </p>
                                      </NavigationMenuLink>
                                    </Link>
                                  ) : (
                                    <Link
                                      href={item.href!}
                                      legacyBehavior
                                      passHref
                                    >
                                      <NavigationMenuLink
                                        className={cn(
                                          navigationMenuTriggerStyle(),
                                          item.className
                                        )}
                                      >
                                        <ChevronsRight className='mr-1 size-3' />
                                        <p className='w-full text-wrap'>
                                          {item.title}
                                        </p>
                                      </NavigationMenuLink>
                                    </Link>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
