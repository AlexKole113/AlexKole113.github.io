const getPath = () => {
  const url = new URL(window.location.href);
  return url.pathname.split('/')[1];
};

export default getPath;
