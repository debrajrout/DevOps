#include <iostream>
using namespace std;

void insertionSort(int a[], int n)
{
    int i, j, x;
    for (i = 1; i < n; i++)
    {
        j = i - 1;
        x = a[i];

        while (j > -1 && a[j] > x)
        {
            a[j + 1] = a[j];
            j--;
        }
        
        a[j + 1] = x;
    }
}

int main()
{
    int a[] = {1, 19, 5, 2, 34, 67, 12, 56};
    int n = sizeof(a)/sizeof(a[0]);

    insertionSort(a, n);

    for (int i = 0; i < n; i++)
    {
        cout << a[i] << " ";
    }
    cout << endl;

    return 0;
}