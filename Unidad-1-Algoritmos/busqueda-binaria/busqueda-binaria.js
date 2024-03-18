const primes = [
  43, 3, 61, 19, 73, 17, 29, 37, 7, 11, 83, 2, 59, 47, 97, 31, 71, 13, 89, 23,
  5, 53, 41, 67, 79,
];
console.log("primes antes quicksort", primes);

// Algoritmo de ordenamiento - menor a mayor
const QuickSort = (arr, start, end) => {
  if (arr.length === 0) {
    console.log("Terminó el quicksort");
    return;
  }
  let pi;
  if (start < end) {
    pi = Partition(arr, start, end);
    QuickSort(arr, start, pi - 1);
    QuickSort(arr, pi + 1, end);
  }
};

const Partition = (arr, start, end) => {
  const pivot = arr[end];
  let smaller = start - 1;
  let index = start;
  while (index < end) {
    if (arr[index] < pivot) {
      smaller++;
      swap(arr, smaller, index);
    }
    index++;
  }
  swap(arr, smaller + 1, end); // Colocar el pivote en su posición correcta
  return smaller + 1; // Devolver el índice del pivote
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

QuickSort(primes, 0, primes.length - 1);
console.log("Primes array", primes);

// Algoritmo de búsqueda binaria
const BinarySearch = (arr, firstElement, lastElement, target) => {
  let max = lastElement;
  let min = firstElement;
  let count = 0;
  while (true) {
    let half = Math.floor((min + max) / 2);
    if (half === 0) {
      console.log("El elemento buscado no se encuentra dentro del array");
      break;
    }
    if (arr[half] === target) {
      console.log("Elemento " + target + " encontrado en la posición: " + half);
      break; // Agregamos break aquí para salir del bucle cuando se encuentra el elemento
    }
    // Si half es menor que el número buscado aumentamos min = half + 1 y max lo dejamos como está
    if (arr[half] < target) {
      min = half + 1;
    }
    // Si half es mayor que el número buscado restamos max = half - 1 y a min lo dejamos como está
    if (arr[half] > target) {
      max = half - 1;
    }
    count++;
  }
  console.log("Tomo " + count + " intentos en encontrarlo");
};

BinarySearch(primes, 0, primes.length - 1, 83);
