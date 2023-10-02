// Write a C++ program to count the number of vowels in a given string.
#include <bits/stdc++.h>
using namespace std;

int main() {
    string input;
    cout << "Enter a string: ";
    cin >> input;
    
    int vowelCount = 0;
    for (char ch : input) {
        if (tolower(ch) == 'a' || tolower(ch) == 'e' || tolower(ch) == 'i' || tolower(ch) == 'o' || tolower(ch) == 'u') {
            vowelCount++;
        }
    }
    
    cout << "Number of vowels: " << vowelCount << endl;
    return 0;
}
