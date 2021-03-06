const setCookie = function (
  sName: string,
  sValue: string,
  oExpires?: number,
  sPath?: string | undefined,
  sDomain?: string | undefined,
  bSecure?: boolean | undefined
) {
  let cookies: string;
  let name: string;
  let value: string | number | boolean;
  let expires: any;
  let path: string | undefined;
  let domain: string | undefined;
  let secure: boolean | undefined;
  if (typeof arguments[0] === "object") {
    name = arguments[0].name;
    value = arguments[0].value;
    expires = arguments[0].expires;
    path = arguments[0].path;
    domain = arguments[0].domain;
    secure = arguments[0].secure;
  } else {
    name = sName;
    value = sValue;
    expires = oExpires;
    path = sPath;
    domain = sDomain;
    secure = bSecure;
  }
  cookies = `${name}=${encodeURIComponent(value)}`;
  if (expires) {
    const date = new Date();
    date.setTime(date.getTime() + (oExpires || 0) * 60 * 60 * 1000);
    cookies += `; expires=${date.toUTCString()}`;
  }
  if (path) {
    cookies += `; path=${path}`;
  }
  if (domain) {
    cookies += `; domain=${domain}`;
  }
  if (secure) {
    cookies += `; secure${secure}`;
  }
  document.cookie = cookies;
  return value;
};
const getCookie = (sName: string) => {
  const sRE = `(?:; )?${sName}=([^;]*)`;
  const oRE = new RegExp(sRE);
  let result = null;
  if (oRE.test(document.cookie)) {
    result = decodeURIComponent(RegExp.$1);
  }
  return result;
};

export { getCookie, setCookie };
export default { getCookie, setCookie };
