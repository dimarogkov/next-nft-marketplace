export const convertToSnakeCase = (text: string) => {
    return text
        .split(' ')
        .map((word) => word.toLowerCase())
        .join('_');
};
