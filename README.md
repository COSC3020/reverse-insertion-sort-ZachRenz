[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/Bi-S25fM)
# Reverse Insertion Sort

Consider the code for insertion sort we covered in class:

```javascript
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
  }
  return arr;
}
```

Change this function such that it works from the end of the array rather than
the beginning, `insertionSortReverse()` -- only the direction of
iterating over the elements is reversed, the array is still sorted the same way
(ascending). Add your code in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Average-Case Time Complexity of Insertion Sort

In the lectures, we covered that insertion sort has best-case time complexity of
$\Theta(n)$ and worst-case time complexity of $\Theta(n^2)$. What is the
average-case time complexity ($\Theta$)?

Hint: Think about what happens in each iteration of the loop, and how often the
loop is executed. Keep in mind that for asymptotic analysis we don't care about
constant factors.

Describe your reasoning and the conclusion you've come to. Your reasoning is
most important -- you can easily find the answer, but you need to demonstrate
that you've understood the concept. Add your answer to this markdown file.

## Average-Case Time Complexity Answer

### Looking deeper at best and worst case

Looking deeper at the best and worst case I can get a good idea of what is between, or our average case here. </br>

The best possible case would be if the list is already sorted in ascending order. The function would run through only the first `for` block and would therfore have a complextity of $\theta(n)$. 
In the worse case, where it's sorted in descending order, we have to run through both blocks the entire way through the array, doing the same amount of work each time. So the complexity would be $\theta(n^2)$. 

### The Average case

So now, our best and worst case can be our bounds for the average case. Critically thinking, if there is ever a number in the wrong place, we have to run both `for` blocks and immediatly get out of the $\theta(n)$ complexity. Likewise, the only time we have a complexity of $\theta(n^2)$ is in the worst possible case, if we have any number that is not in descending order, the nested `for` loop would not work as hard in that case as it would with the other numbers and not be truly be $n * n$. So the average case would have to be $\theta(n\log n)$.
