function swap(array,firstIndex,secondIndex) {
 let temp = array[firstIndex]
 array[firstIndex] = array[secondIndex]
 array[secondIndex] = temp
}
function indexOfMinimum (array,startIndex){
    let minIndex=  startIndex
    let minValue = array[startIndex]
    const arrSize = array.length
    for(let i = minIndex + 1; i < arrSize; i++){
        if(array[i] < array[minIndex]){
            minValue = array[i]
            minIndex = i
        }
    }
    return minIndex
}
function selectionSort (array){
    let minIndex = 0
    let arrSize = array.length
    for(let i = 0; i < arrSize; i++){
        minIndex = indexOfMinimum(array,i)
        swap(array,minIndex,i) 
    }
    
}