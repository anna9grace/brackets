module.exports = function check(str, bracketsConfig) {
  const brArr = str.split('');
  const pairsCount = brArr.length / 2;
  let brOpeningIndex = null;
  const configOpeningBr = bracketsConfig.map((el) => el[0]);
  const configClosingBr = bracketsConfig.map((el) => el[1]);
   
  if (brArr.length%2 !== 0) {
    return false;
  }
  
   const deletePairedBr = () => {
        brOpeningIndex = brArr.findIndex((br, index) => {
            let r = configOpeningBr.indexOf(br);
            return r >= 0 && brArr[index + 1] === configClosingBr[r];
        })
        brArr.splice(brOpeningIndex, 2);
        brOpeningIndex = null;
   }

   for (let i = 0; i < pairsCount; i++) {
       deletePairedBr();
   }

  return brArr.length === 0;
}
