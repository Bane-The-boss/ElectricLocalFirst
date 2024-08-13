export const isSupportedBrowser = () => {
    // only chrome browser supported at the moment
    return (navigator.userAgent.toLowerCase().indexOf('chrome') > -1);
};