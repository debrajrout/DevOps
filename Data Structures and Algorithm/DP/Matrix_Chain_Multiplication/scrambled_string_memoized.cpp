 #include <bits/stdc++.h>
 using namespace std;

 unordered_map<string, bool> mp;

 bool solve(string a, string b)
 {
    string key = a + " " + b;
    if(a.compare(b) == 0)
    {
        return true;
    }
    if(a.length() <= 1)
    {
        return false;
    }
    if(mp.find(key) != mp.end())
    {
        return mp[key];
    }
    int n = a.length();
    bool flag = false;
    for(int i = 1; i < n; i++)
    {
        if ((solve(a.substr(0, i), b.substr(n - i, i)) && solve(a.substr(i), b.substr(0, n - i))) || (solve(a.substr(0, i), b.substr(0, i)) && solve(a.substr(i), b.substr(i))))
        {
            flag = true;
            break;
        }        
    }

    return mp[key] = flag;
 }
 
 int main()
 {
     string a, b;
     cout << "Enter first string: ";
     cin >> a;
     cout << "Enter secon string: ";
     cin >> b;
     if(a.length() != b.length())
     {
        cout << "NO" << endl;
     }
     else
     {
        solve(a, b) ? cout << "YES" << endl : cout << "NO" << endl;
     }
     return 0;
 }
