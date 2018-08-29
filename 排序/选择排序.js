
    var array = [8,27,34,2,4,1,89];
    function selectSort(arr) {
        for (let i = 0;i<arr.length;i++){
            minIndex = i;
            for (let j = i+1;j<arr.length;j++){
                if (arr[j] < arr[minIndex]){
                    minIndex = j;
                }
            }
            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        return arr;
    }
    let newArr = selectSort(array)
    console.log(newArr)