#include <iostream>
using namespace std;

void shellSort(int arr[], int n)
{
    int gap, i, j, temp;
    for (gap = n/2; gap >= 1; gap /= 2)
    {
        for (i = gap; i < n; i++)
        {
            temp = arr[i];
            j = i - gap;

            while (j > 0 && arr[j] > temp)
            {
                arr[j + gap] = arr[j];
                j = j - gap;
            }
            arr[j + gap] = temp;
        }
        
    }
    
}

int main()
{
    int a[] = {1, 19, 5, 2, 34, 67, 12, 56};
    int n = sizeof(a)/sizeof(a[0]);
    shellSort(a, n);
    for (int i = 0; i < n; i++)
    {
        cout << a[i] << " ";
    }
    cout << endl;
    
    return 0;
}