// BEGIN
const pick = (data, massiv) => {
    let newData = {};

    for (let key in data) {

        if (massiv.indexOf(key) != -1 && data[key] !== undefined) {

            newData[key] = data[key];
        }
    }

    return newData;
}

export default pick;
// END