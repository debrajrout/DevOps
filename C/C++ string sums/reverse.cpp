// Write a program to reverse a string.

#include <bits/stdc++.h>
using namespace std;

string reverseString(string str) {
    string reversed = "";
    for (int i = str.length() - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

int main() {
    string input;
    cout << "Enter a string: ";
    cin >> input;
    
    string reversed = reverseString(input);
    cout << "Reversed string: " << reversed << endl;
    
    return 0;
}
