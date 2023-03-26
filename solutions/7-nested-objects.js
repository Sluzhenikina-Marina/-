// BEGIN
const get = (data, massiv) => { 
    for (let key of massiv) {

        if (Object.hasOwn(data, key)) {

            data = data[key];
        } 
        else {

            return null;
        }
    }

    return data;
}

export default get;
// END