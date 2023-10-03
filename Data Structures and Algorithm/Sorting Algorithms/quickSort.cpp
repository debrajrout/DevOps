#include <iostream>
using namespace std;

void swap(int *x, int *y)
{
    int temp = *x;
    *x = *y;
    *y = temp;
}

int partition(int a[], int l, int h)
{
    int pivot = a[l];
    int i = l, j = h;

    do
    {
        do
        {
            i++;
        } while (a[i] <= pivot);

        do
        {
            j--;
        } while (a[j] > pivot);
        if (i < j)
        {
            swap(&a[i], &a[j]);
        }
    } while (i < j);
    swap(&a[l], &a[j]);
    return j;
}

void quickSort(int a[], int l, int h)
{
    int j;
    if (l < h)
    {
        j = partition(a, l, h);
        quickSort(a, l, j);
        quickSort(a, j + 1, h);
    }
    
}

int main()
{
    int a[] = {1, 19, 5, 2, 34, 67, 12, 56, INT32_MAX};
    int n = sizeof(a)/sizeof(a[0]);
    quickSort(a, 0, n - 1);
    for (int i = 0; i < n - 1; i++)
    {
        cout << a[i] << " ";
    }
    cout << endl;
    return 0;
}