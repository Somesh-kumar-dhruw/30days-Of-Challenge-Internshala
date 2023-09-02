#include <iostream>
#include <algorithm> // Include the algorithm header for std::reverse
using namespace std;

int main() {
    string originalString = "Hello, World!";
    
    // Use std::reverse to reverse the string
    reverse(originalString.begin(), originalString.end());

    // Print the reversed string
    cout << originalString << endl;

    return 0;
}
