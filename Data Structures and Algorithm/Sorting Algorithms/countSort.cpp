#include <iostream>
using namespace std;

int findMax(int arr[], int n)
{
    int max = INT32_MIN;
    for (int i = 0; i < n; i++)
    {
        if (arr[i] > max)
        {
            max = arr[i];
        }
    }
    return max;
}

void countSort(int arr[], int n)
{
    int max, i, j, *c;
    max = findMax(arr, n);
    c = new int[max + 1];
    for (i = 0; i < max + 1; i++)
    {
        c[i] = 0;
    }
    for (i = 0; i < n; i++)
    {
        c[arr[i]]++;
    }
    i = 0, j = 0;
    while (i < max + 1)
    {
        if (c[i] > 0)
        {
            arr[j++] = i;
            c[i]--;
        }
        else
        {
            i++;
        }
    }
}

int main()
{
    int a[] = {1, 19, 5, 2, 34, 67, 12, 56, 76, 12, 99, 67, 101, 43};
    int n = sizeof(a)/sizeof(a[0]);
    countSort(a, n);
    for (int i = 0; i < n; i++)
    {
        cout << a[i] << " ";
    }
    cout << endl;
    
    return 0;
}