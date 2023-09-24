#include<iostream>
using namespace std;
int main()
{
    int a,prod;
    int i=1;
    cout<<"Please enter a number - ";
    cin>>a;

    for(i=1;i<11;i++)
    {
        prod=a*i;
        cout<<a<<" X "<<i<<" = "<<prod<< endl;    
    }
    
}