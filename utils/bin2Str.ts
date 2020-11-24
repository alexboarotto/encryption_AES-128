//converts binary string array(such as ["01100110", "01101111", "01101111"]) to text ("foo")
export function bin2Str(array: string[]) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result += String.fromCharCode(parseInt(array[i], 2));
  }
  return result;
}