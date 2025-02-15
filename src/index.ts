function add(string: String) {
  try {
    let sum = 0;
    if (string) {
      let strArr = normalizeString(string).split(",");

      strArr.map((elem) => {
        if (elem && elem !== "") {
          if (Number(elem) >= 0) {
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
    // throw new Error(err.message);
  }
}

function normalizeString(string: String) {
  return string.replace(/\s+|[;,\/]/g, ",");
}
module.exports = add;
