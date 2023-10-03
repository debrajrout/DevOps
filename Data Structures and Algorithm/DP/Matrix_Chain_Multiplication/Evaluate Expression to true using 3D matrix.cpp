#include <bits/stdc++.h>
using namespace std;

int static t[2][1001][1001];

int solve(string s, int i, int j, bool isTrue)
{
    if(i >= j)
    {
        if(isTrue)
        {
            return s[i] == 'T';
        }
        else
        {
            return s[i] == 'F';
        }
        return t[isTrue][i][j];
    }

    if(t[isTrue][i][j] != -1)
    {
        return t[isTrue][i][j];
    }
    int ans = 0;
    for(int k = i + 1; k < j; k += 2)
    {
        int lT = solve(s, i, k - 1, true);
        int lF = solve(s, i, k - 1, false);
        int rT = solve(s, k + 1, j, true);
        int rF = solve(s, k + 1, j, false);

        if(s[k] == '&')
        {
            if(isTrue)
            {
                ans += lT * rT;
            }
            else
            {
                ans += lF * rT + lT * rF + lF * rF;
            }
        }
        else if(s[k] == '|')
        {
            if(isTrue)
            {
                ans += lT * rT + lT * rF + lF * rT;
            }
            else 
            {
                ans += lF * rF;
            }
        }
        else if(s[k] == '^')
        {
            if(isTrue)
            {
                ans += lF * rT + lT * rF;
            }
            else 
            {
                ans += lT * rT + lF * rF;
            }
        }
    }
    return t[isTrue][i][j] = ans;
}

int main()
{
    string s;
    memset(t[0], -1, sizeof(t[0]));
    memset(t[1], -1, sizeof(t[1]));
    cout << "Enter String: ";
    cin >> s;
    cout << solve(s, 0, s.length() - 1, true);
    return 0;
}
