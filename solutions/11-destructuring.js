// BEGIN
const getSortedNames = (usersArray) => {
    let sortedUserNames = [];
    for (let user of usersArray) {
        let {name} = user;
        sortedUserNames.push(name)
    }
    return sortedUserNames.sort();
}


export default getSortedNames;
// END