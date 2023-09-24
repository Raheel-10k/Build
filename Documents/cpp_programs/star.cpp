#include<iostream>
using namespace std;
int main()
{
    int a,facn;
    int i=1;

    cout<<"Please enter a Number - ";
    cin>>a;

    while (i<=a)
        {
          facn=facn*i;
          i++;
        }

     cout<<"The facorial of "<< a <<" is "  << facn <<endl;
     return 0;
}


