const compareFn = (a: {value: string}, b: {value: string}) => {
    const nameA = a.value.toUpperCase();
    const nameB = b.value.toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
};

export const sortByText = (values: Array<{value: string}>) =>
    values.sort(compareFn);
