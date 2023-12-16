import React, { memo } from 'react';
import { Link as NextLink } from 'next-url-prettifier';
import { nextRouter } from '../../routes';
/* import types */
import type { FC } from 'react';

export interface LinkProps {
  href?: string;
  page?: string;
  params?: { [props: string]: any; };
  children?: React.ReactNode;
}

export const Link: FC<LinkProps> = props => {
  const { href, page, params = null, children } = props;

  return (
    <NextLink
      href={href}
      route={ page ? nextRouter.linkPage(page, params!) : null}
    >
      { children }
    </NextLink>
  );
};

export default memo(Link);
