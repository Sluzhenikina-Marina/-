// BEGIN
const getDomainInfo = (siteName) => {
    let splitSite = siteName.split('://');

    let information = {
        "scheme": splitSite.length == 1 ? "http" : splitSite[0],
        "name": splitSite.length == 1 ? siteName : splitSite[1]
    }
    return information;
}


export default getDomainInfo;
// END