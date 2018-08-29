    var array = [8,27,34,2,4,1,89];
    function bubbleSort(arr) {
        for (let i = 0;i<arr.length-1;i++){
            for (let j = 0;j<arr.length-i-1;j++){
                if (arr[j]>arr[j+1]){
                    let temp;
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        return arr
    }
    let newArray = bubbleSort(array);
    newArray.forEach(item=>{
        console.log(item);
    })
