#include <bits/stdc++.h>
using namespace std;

// Top up method:-       O(n ^ 2)

int memoTopUpCutRod(vector<int> p, int n, vector<int> r)
{
    int q;
    if(r[n] >= 0)
    {
        return r[n];
    }
    if(n == 0)
    {
        q = 0;
    }
    else
    {
        q = INT_MIN;
    }
    for (int i = 1; i <= n; ++i)
    {
        q = max(q, p[i - 1] + memoTopUpCutRod(p, n - i, r));
    }
    r[n] = q;
    return q;
}

int topUpCutRod(vector<int> p, int n)
{
    vector<int> r(n + 1, INT_MIN);
    return memoTopUpCutRod(p, n, r);
}

// Bottom up method:-      O(n ^ 2)

int bottomUpCutRod(vector<int> p, int n)
{
    vector<int> r(n + 1, INT_MIN);
    r[0] = 0;
    for (int i = 1; i <= n; ++i)
    {
        int q = -1;
        for (int j = 1; j <= i; ++j)
        {
            q = max(q, p[j - 1] + r[i - j]);
        }
        r[i] = q;
    }
    return r[n];
}

// Optimal Bottom up solution:-

// int printOptimalSol(vector<int> p, int n)
// {
//     auto [r, s] = OptimalBottomUp(p, n);
//     while(n > 0)
//     {
//         cout << s[n] << " ";
//         n -= s[n];
//     }
// }

// OptimalBottomUp(vector<int> p, int n)
// {
//     vector<int> r(n + 1);
//     vector<int> s(n);
//     r[0] = 0;
//     for (int j = 1; j <= n; ++j)
//     {
//         int q = INT_MIN;
//         for (int i = 1; i <= j; ++i)
//         {
//             if(q < p[i - 1] + r[j - i])
//             {
//                 q = p[i - 1] + r[j - i];
//                 s[j - 1] = i;
//             }
//         }
//         r[j] = q;
//     }
//     return {move(r), move(s)};
// }

int main()
{
    vector<int> p{1, 5, 8, 9, 10, 17, 17, 20, 24, 30};
    // vector<int> p{1,3,4,5};
    int n = 4;
    // int n = p.size();
    cout << bottomUpCutRod(p, n) << endl;
    cout << topUpCutRod(p, n) << endl;
    // cout << printOptimalSol(p, n) << endl;
    return 0;
}
