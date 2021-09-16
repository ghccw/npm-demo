// import "@babel/polyfill";
export const loadScript = (url: string) => {
  return new Promise<void>((resolve, reject) => {
    const script: any = document.createElement("script");
    const load = () => {
      if (/loaded|complete/.test(script.readyState)) {
        script.onreadystatechange = null;
      }
      resolve();
    };
    script.async = true;
    script.onload = load;
    script.onreadystatechange = load;
    script.src = url;
    if (document.body) {
      document.body.appendChild(script);
    } else {
      reject();
    }
  });
};
