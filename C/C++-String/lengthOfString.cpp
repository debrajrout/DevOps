//Find the length of the given string without using any in-built function.


#include <iostream>
#include <cstring>
using namespace std;

int main() {
    int i;
    char s[100];
    cin.getline(s, 100);
    for (i = 0; s[i] != '\0'; ++i);
    cout << "Length of the string: " << i << endl;
    return 0;
}