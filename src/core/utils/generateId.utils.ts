export const generateNextId = <T>(
    items: T[],
    getId: (item: T) => number
): number => {
    if (items.length === 0) return 1;

    const maxId = items.reduce((max, item) => {
        return Math.max(max, getId(item));
    }, 0);

    return maxId + 1;
};