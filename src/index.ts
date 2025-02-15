function add(string: String) {
  try {
    let sum = 0;
    if (string) {
      let strArr = normalizeString(string).split(",");

      //throwing in case of multiple negatives
      checkMultipleNegatives(strArr);
      strArr.map((elem) => {
        if (elem && elem !== "") {
          if (Number(elem) >= 0 && Number(elem) <= 1000) {
            sum += Number(elem);
          } else if (Number(elem) < 0) {
            throw new Error(`negative numbers not allowed ${elem}`);
          }
        }
      });
    }
    return sum;
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
}

function normalizeString(string: String) {
  return string.replace(/\s+|[;,\/]/g, ",");
}

function checkMultipleNegatives(arr: String[]) {
  let newArr = arr.filter((elem) => {
    if (Number(elem) < 0) {
      return elem;
    }
  });
  if (newArr.length > 1) {
    throw new Error(
      `negative numbers not allowed, multiple negative numbers found ${newArr.join(
        ","
      )}`
    );
  }
}
module.exports = add;
