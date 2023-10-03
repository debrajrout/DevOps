#include <iostream>
using namespace std;

bool isPalindrome(string s, int i, int j)
{
    while (i < j)
    {
        if(s[i] != s[j])
        {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

int solve(string s, int i, int j)
{
    if(i >= j)
    {
        return 0;
    }
    if(isPalindrome(s, i, j) == true)
    {
        return 0;
    }
    int mn = INT32_MAX;
    for(int k = i; k < j; k++)
    {
        int temp = 1 + solve(s, i, k) + solve(s, k + 1, j);
        if(temp < mn)
        {
            mn = temp;
        }
    }
    return mn;
}

int main()
{
    string s;
    cout << "Enter a string: ";
    cin >> s;
    cout << "Min. cuts needed for palindrome partitioning is: " << solve(s, 0, s.length() - 1) << endl;
    return 0;
}

// TC:- O(2^n)
// SC:- O(n)
