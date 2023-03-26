import _, { first } from 'lodash';

// BEGIN
const fill = (firstObject, massivSvoistv, secondObject) => {

    if (massivSvoistv.length == 0) {
        for (let key in secondObject) {

            firstObject[key] = secondObject[key];

        }

        return firstObject;
    }

    let pick = _.pick(secondObject, massivSvoistv);

    for (let key of massivSvoistv) {
        firstObject[key] = pick[key]
    }

    return firstObject;
}

export default fill;
// END