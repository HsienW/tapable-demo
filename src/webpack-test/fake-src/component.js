const component = function (gender) {
    console.log('===== Component =====');
    if (gender === 'male') {
        return 'is Man';
    }

    if (gender === 'female') {
        return 'is Women';
    }
    return null;
}

export {
    component
}
