let obj = {
    name: 'marat',
    lastName: 'zhekov',
    age: 25,
    gender: 'male'
}

function clone(arg) {
    if (typeof (arg) !== 'object' || (arg) === 'null') return 'arg should be a Object';
    if (Object.keys(arg).length === 0) return Error;


    const result = {};

    for (let key in arg) {

        result[key] = arg[key];
        return typeof result === 'object' ? result : null;
    }
}






