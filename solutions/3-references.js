// BEGIN
const compareObj = (firstObject, secondObject) => {
    let check = true;
    for (let key in firstObject) {
        if (firstObject[key] != secondObject[key]) {
            check = false;
        }
    }
    return check;
}

export default compareObj;
// END