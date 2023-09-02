


#include <iostream>
using namespace std;

int main() {
    string originalString = "somesh";
    string reversedString = "";

    // Reverse the string using a loop
    for (int i = originalString.length() - 1; i >= 0; i--) {
        reversedString += originalString[i];
    }

    // Print the reversed string
    cout << reversedString << endl;

    return 0;
}
