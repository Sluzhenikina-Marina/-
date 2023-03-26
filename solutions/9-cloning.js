// BEGIN
const cloneShallow = (object) => {
    // let clonedObject = {};

    // for (let key in object) {

    //     clonedObject[key] = obj[key];
    // }
    let clonedObject = {...object}
    return clonedObject;
}


export default cloneShallow;
// END
