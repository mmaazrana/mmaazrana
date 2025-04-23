export const getPageSlug = (pathname: string) => {
  return pathname.toLowerCase().replace(/\s+/g, '-');
};
