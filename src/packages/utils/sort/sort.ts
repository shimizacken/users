const compareFn = (a: string, b: string) => {
    const nameA = a.toUpperCase();
    const nameB = b.toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    return 0;
};

export const sortByText = (values: Array<string>) => values.sort(compareFn);
