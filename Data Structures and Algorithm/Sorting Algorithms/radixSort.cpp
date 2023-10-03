#include <iostream>
using namespace std;

int getMax(int arr[], int n)
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

int countSort(int arr[], int n, int exp)
{
    int output[n];
    int i, count[10] = {0};

    for (i = 0; i < n; i++)
    {
        count[(arr[i]/exp) % 10]++;
    }
    for (i = 1; i < 10; i++)
    {
        count[i] += count[i - 1];
    }
    for (i = n - 1; i >= 0; i--)
    {
        output[count[(arr[i] / exp) % 10] - 1] = arr[i];
        count[(arr[i] / exp) % 10]--;
    }
    for (i = 0; i < n; i++)
    {
        arr[i] = output[i];
    }
}

int radixSort(int arr[], int n)
{
    int max = getMax(arr, n);

    for (int exp = 1; max/exp > 0; exp *= 10)
    {
        countSort(arr, n, exp);
    }
}

int main()
{
    int a[] = {1, 19, 5, 2, 34, 67, 12, 56};
    int n = sizeof(a)/sizeof(a[0]);
    radixSort(a, n);
    for (int i = 0; i < n; i++)
    {
        cout << a[i] << " ";
    }
    cout << endl;
    
    return 0;
}