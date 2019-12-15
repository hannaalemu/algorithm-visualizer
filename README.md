# algorithm-visualizer

## This project is inspired by the Sorting Visualizer(done for merge sort) Tutorial by Clément Mihailescu.

### It is made using React, with the purpose of helping users understand how common algorithms work by using animations! 

## Part One : Merge Sort

### Merge Sort is one of the most common sorting algorithms. It uses the concept of divide and conquer to sort a list of elements. Meaning, it will divide the bigger problem into smaller problems and then solve each of the small problems in order to solve the bigger problem that we started out with.

### What merge sort does is it splits the unsorted array into two parts and then recursively applies merge sort to these sub-arrays to further split the arrays until you are left with a bunch of single-element arrays. Then, you compare single-element arrays to one another before recombining them into a two-element, sorted array (and so on). If you do this repeatedly, eventually you end up with a single, sorted array of length n. 

## Quick Sort

### Quick sort follows Divide and Conquer algorithm. It is dividing elements in to smaller parts based on some condition and performing the sort operations on those divided smaller parts. Hence, it works well for large datasets. So, here are the steps how Quick sort works in simple words.

### First select an element which is to be called as pivot element.
### Next, compare all array elements with the selected pivot element and arrange them in such a way that, elements less than the pivot element are to it's left and greater than pivot is to it's right.
### Finally, perform the same operations on left and right side elements to the pivot element. And concat the results with the pivot
