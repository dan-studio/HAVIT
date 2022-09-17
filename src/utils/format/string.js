// 3째 자리수 마다 ,찍기 (ex : 1,000,000)
export const numberEnterComma = ({ string = "" }) => {
    return string.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
