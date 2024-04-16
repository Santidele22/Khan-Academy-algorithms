Completa la función doSearch de modo que implemente una búsqueda binaria, siguiendo el pseudocódigo a continuación (este pseudocódigo se describió en el artículo anterior):
1. Sea min = 0 y max = n-1.
2. Si max < min, entonces detente: target no está presente en array. Regresa -1.
3. Calcula guess como el promedio de max y min, redondeado hacia abajo (para que sea un entero).
4. Si array[guess] es igual a target, entonces detente. ¡Ya lo encontraste! Regresa guess.
5. Si el intento fue muy bajo, es decir, array[guess] < target, entonces haz min = guess + 1.
6. De lo contrario, el intento fue muy alto. Haz max = guess - 1.
7. Regresa al paso 2.