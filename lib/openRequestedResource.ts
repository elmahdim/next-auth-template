export const openRequestedResource = (url: string, title: string) => {
  const dualScreenLeft = window.screenLeft ?? window.screenX;
  const dualScreenTop = window.screenTop ?? window.screenY;

  const width =
    window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;

  const height =
    window.innerHeight ??
    document.documentElement.clientHeight ??
    screen.height;

  const systemZoom = width / window.screen.availWidth;

  const left = (width - 500) / 2 / systemZoom + dualScreenLeft;
  const top = (height - 550) / 2 / systemZoom + dualScreenTop;
  const windowWidth = `width=${500 / systemZoom}`;
  const windowHeight = `height=${550 / systemZoom}`;
  const windowTop = `top=${top}`;
  const windowLeft = `left=${left}`;

  const windowFeatures = `${windowWidth},${windowHeight},${windowTop},${windowLeft}`;
  const newWindow = window.open(url, title, windowFeatures);

  newWindow?.focus();
};
