import paramsToQueryString from './paramsToQueryString';

export type MapCtxToProps = {
  page: string;
  query: string;
  path: string;
};

export function mapCtxToProps(ctx: any) {
  const { pathname, query, asPath } = ctx;
  return {
    page: (pathname.replace(/\//g, '') || 'home') as string,
    query: query as string,
    path:
      (asPath ||
        `${pathname}${paramsToQueryString(query)}`) as string
  };
}

export default mapCtxToProps;