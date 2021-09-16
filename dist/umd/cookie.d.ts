declare const setCookie: (sName: string, sValue: string, oExpires?: number | undefined, sPath?: string | undefined, sDomain?: string | undefined, bSecure?: boolean | undefined) => string | number | boolean;
declare const getCookie: (sName: string) => string | null;
export { getCookie, setCookie };
declare const _default: {
    getCookie: (sName: string) => string | null;
    setCookie: (sName: string, sValue: string, oExpires?: number | undefined, sPath?: string | undefined, sDomain?: string | undefined, bSecure?: boolean | undefined) => string | number | boolean;
};
export default _default;
