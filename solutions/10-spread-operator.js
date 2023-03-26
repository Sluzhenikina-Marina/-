// BEGIN
const make = (name, svoistva = {}) => {

    if (!svoistva.state) {
        svoistva.state = 'moderating'
    }
    
    if (!svoistva.createdAt) {
        svoistva.createdAt = Date.now();
    }

    let company = {
        'name': name,
        ...svoistva,
    }
    return company;
}

export default make;
// END