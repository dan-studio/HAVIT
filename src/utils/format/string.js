// 3째 자리수 마다 ,찍기 (ex : 1,000,000)
export const numberEnterComma = ({ string = "" }) => {
    return string.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Dealing with Textarea Height
export const calcHeight = (value)=> {
    let numberOfLineBreaks = (value.match(/\n/g) || []).length;
    // min-height + lines x line-height + padding + border
    let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
    return newHeight;
  }