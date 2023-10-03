//comparing two strings

#include<iostream>
#include<string>
using namespace std;

int main()
{
    string str1="Thanks";
    string str2="Thenks";
    if(str1.length()!=str2.length())
    {
        cout<<"The given strings are not identical!";
    }
    else{
        int flag=0;
        for(int i=0;i<str1.length();i++)
        {
            if(str1[i]!=str2[i])
            {
               flag=1;
            }
        }
        if(flag==1)
        {
           cout<<"The given strings are not identical!";
        }
        else{
           cout<<"The given strings are identical!";
        } 
    }
}