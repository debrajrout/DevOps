/*
Given array is :-
12 11 13 5 6 7 
Sorted array is :-
5 6 7 11 12 13 
*/

/*
Time Complexity:- O(nlogn)
Space Complexity:- O(n)
*/


// C++ program for Merge Sort
#include <iostream>
using namespace std;

void merge(int array[], int const left, int const mid, int const right)
{
    auto const subArrayOne = mid - left + 1;
    auto const subArrayTwo = right - mid;
  
    // Create temp arrays
    auto *leftArray = new int[subArrayOne], *rightArray = new int[subArrayTwo];
  
    // Copy data to temp arrays leftArray[] 
    // and rightArray[]
    for (auto i = 0; i < subArrayOne; i++)
        leftArray[i] = array[left + i];
    for (auto j = 0; j < subArrayTwo; j++)
        rightArray[j] = array[mid + 1 + j];
  
    // Initial index of first sub-array
    // Initial index of second sub-array
    auto indexOfSubArrayOne = 0, 
         indexOfSubArrayTwo = 0; 
  
    // Initial index of merged array
    int indexOfMergedArray = left; 
  
    // Merge the temp arrays back into 
    // array[left..right]
    while (indexOfSubArrayOne < subArrayOne && 
           indexOfSubArrayTwo < subArrayTwo) 
    {
        if (leftArray[indexOfSubArrayOne] <= 
            rightArray[indexOfSubArrayTwo]) 
        {
            array[indexOfMergedArray] = 
            leftArray[indexOfSubArrayOne];
            indexOfSubArrayOne++;
        }
        else 
        {
            array[indexOfMergedArray] = 
            rightArray[indexOfSubArrayTwo];
            indexOfSubArrayTwo++;
        }
        indexOfMergedArray++;
    }
      
    // Copy the remaining elements of
    // left[], if there are any
    while (indexOfSubArrayOne < subArrayOne) 
    {
        array[indexOfMergedArray] = 
        leftArray[indexOfSubArrayOne];
        indexOfSubArrayOne++;
        indexOfMergedArray++;
    }
  
    // Copy the remaining elements of
    // right[], if there are any
    while (indexOfSubArrayTwo < subArrayTwo) 
    {
        array[indexOfMergedArray] = 
        rightArray[indexOfSubArrayTwo];
        indexOfSubArrayTwo++;
        indexOfMergedArray++;
    }
}

void mergeSort(int array[], int const begin, int const end)
{
    // Returns recursively
    if (begin >= end)
        return; 
  
    auto mid = begin + (end - begin) / 2;
    mergeSort(array, begin, mid);
    mergeSort(array, mid + 1, end);
    merge(array, begin, mid, end);
}

// Function to print an array
void printArray(int A[], int size)
{
    for (auto i = 0; i < size; i++)
        cout << A[i] << " ";
    cout<<endl;
}

int main()
{
    int arr[] = { 12, 11, 13, 5, 6, 7 };
    auto arr_size = sizeof(arr) / sizeof(arr[0]);
  
    cout << "Given array is "<<endl;
    printArray(arr, arr_size);
  
    mergeSort(arr, 0, arr_size - 1);
  
    cout << "Sorted array is "<<endl;
    printArray(arr, arr_size);
    return 0;
}