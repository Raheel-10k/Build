#include <iostream>
using namespace std;

int main()
{
    int a;
    bool land=true;
    

    cout<<endl<<"Hello Captain";
    cout<<endl<<endl<<"Please Enter Your Altitude in Feet - ";
    cin>>a;
    cout<<endl<<"You are "<<a<<" feet above sea level";
    if(a>=10000)
    {
        cout<<endl<<"GO TO SPACE NIG.";
    }
    else if (10000>=a && a>=5000)
    {
        cout<<endl<<"Captain, please fly around";
    }
    else if (5000>=a && a>=2000)
    {
        cout<<endl<<"Captain, please open landing gears.";
    }
    else if (a<=2000 && a>=1000)
    {
        cout<<endl<<"Captain, open Flaps";
    }
    else if(a<1000)
    {
         cout<<endl<<"Captain, prepare for landing and apply reverse thrust after touchdown.";
    }

    cout
    
    return 0;

}