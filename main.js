const AnsiValue = [' ','!','”','#','$','%','&',',','(',')','*','+',',','-','.','/','0','1','2','3','4','5','6','7','8','9',':',';','<','=','>','?',
'@','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','[','/',']','^','—',
'、','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','{','|','}','~'];

const AnsiNumber = [];
function stringToNumber(string){
    let stringArray = string.split('');
    let numberArray = [];
    for (let i =0;i<stringArray.length;i++){
        numberArray.push(AnsiValue.indexOf(stringArray[i]));
    }
    return numberArray;
}
function numberToString(arr){
    let result = [];
    for(let i=0;i<arr.length;i++){
        let word = AnsiValue[arr[i]];
        result.push(word);
    }
    let string = result.join('');
    return string;
}
function recursionSort(arr){
    let arr2 = [];
    function min(arr){
      if(arr.length<2 && arr.length>0){
        arr2.push(arr[0]);
        return;
      };
      let index = arr.indexOf(Math.min(...arr));
      arr2.push(arr[index]);
      arr.splice(index,1);
      return min(arr);
    }
    min(arr);
    return arr2;
};
function bubbleSort(arr){
    let len = arr.length;
    for(let i=0;i<len;i++){
      for(let j=i+1;j<len;j++){
        if(arr[i]>arr[j]){
          [arr[i],arr[j]] = [arr[j],arr[i]];
        }
      }
    }
    return arr;
};
output.innerText = '请输入并点击按钮进行排序！';
sort1.onclick = ()=>{
    let string = input.value;
    let numberArray = stringToNumber(string);
    let sortResult = recursionSort(numberArray);
    let result = numberToString(sortResult);
    output.innerText = '排序结果为'+ result;
    return;
}
sort2.onclick = ()=>{
    let string = input.value;
    let numberArray = stringToNumber(string);
    let sortResult = bubbleSort(numberArray);
    let result = numberToString(sortResult);
    output.innerText = '排序结果为'+ result;
}
