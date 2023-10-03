#include <iostream>
using namespace std;

void merge(int arr[], int l, int mid, int h)
{
    int i = l, j = mid + 1, k = l;
    int b[100];
    while (i <= mid && j <= h)
    {
        if (arr[i] < arr[j])
        {
            b[k++] = arr[i++];
        }
        else
        {
            b[k++] = arr[j++];
        }
    }
    for ( ; i <= mid; i++)
    {
        b[k++] = arr[i];
    }
    for ( ; j <= h; j++)
    {
        b[k++] = arr[j];
    }
    for (i = l; i <= h; i++)
    {
        arr[i] = b[i];
    }
}

void mergeSort(int arr[], int l, int h)
{
    int mid;
    if(l < h)
    {
        mid = (l + h) / 2;
        mergeSort(arr, l, mid);
        mergeSort(arr, mid + 1, h);
        merge(arr, l, mid, h);
    }
}

void ImergeSort(int arr[], int n)
{
    int p, i, l, mid, h;
    for (p = 2; p <= n; p *= 2)
    {
        for ( i = 0; i + p - 1 < n; i += p)
        {
            l = i;
            h = i + p - 1;
            mid = (l + h) / 2;
            merge(arr, l, mid, h);
        }
        if (n - i > p / 2)
        {
            l = i;
            h = i + p - 1;
            mid = (l + h) / 2;
            merge(arr, l, mid, n - 1);
        }
    }
    if (p/2 < n)
    {
        merge(arr, 0, p/2 - 1, n - 1);
    }
}

void RecursiveMergeSort(int arr[], int l, int h)
{
    if (l < h)
    {
        int mid = (l + h) / 2;
        RecursiveMergeSort(arr, l, mid);
        RecursiveMergeSort(arr, mid + 1, h);
        merge(arr, l, mid, h);
    }
    
}

int main()
{
    int a[] = {1, 19, 5, 2, 34, 67, 12, 56, 78, 5, 9};
    int n = sizeof(a)/sizeof(a[0]);
    RecursiveMergeSort(a, 0, n - 1);
    for (int i = 0; i < n; i++)
    {
        cout << a[i] << " ";
    }
    cout << endl;

    return 0;
}
