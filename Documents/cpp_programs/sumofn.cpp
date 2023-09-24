#include<iostream>
using namespace std;

int main()
{
    int a,sum;
    cout<<"Please enter a number - ";
    cin>>a;

    for(int i=0; i<a+1; i++)
    {
        sum=sum+i;
    }
    cout<<sum;

    return 0;
}