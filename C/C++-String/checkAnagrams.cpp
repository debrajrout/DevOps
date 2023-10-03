//checking anagram

#include<iostream>
#include<string>
using namespace std;

int main()
{
    string str1="Engineering";
    string str2="Majboori";
    int h[26]={0};
    for(int i=0;i<str1.length();i++)
    {
        h[str1[i]-97]++;
    }
    for(int i=0;i<str2.length();i++)
    {
        h[str2[i]-97]--;
    }
    int flag=0;
    for(int i=0;i<26;i++)
    {
        if(h[i]>0)
        {
            flag=1;
            break;
        }
    }
    if(flag==1)
    {
        cout<<"Not anagram!"<<endl;
    }
    else{
        cout<<"Anagram!"<<endl;
    }
}