export const FORMAT_DATETIME = "YYYY-MM-DD hh:mm:ss";
export const FORMAT_DATE = "YYYY-MM-DD";
export const FORMAT_TIME = "hh:mm:ss";

// 비동기 지연을 주고 싶을때 사용
export function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }