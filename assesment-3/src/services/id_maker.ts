

export const makeId = function (): string {
    const dataSet: string = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const random: string = dataSet[Math.floor(Math.random() * dataSet.length - 1)] + dataSet[Math.floor(Math.random() * dataSet.length - 1)];
    return "0"+random;
};