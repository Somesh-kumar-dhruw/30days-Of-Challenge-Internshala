

#include <iostream>
#include <algorithm> // Include the algorithm header for std::reverse
using namespace std;

int main() {
    int originalArray[] = {1, 2, 3, 4, 5};
    int length = sizeof(originalArray) / sizeof(originalArray[0]);

    // Use std::reverse to reverse the array
    std::reverse(originalArray, originalArray + length);

    // Print the reversed array
    for (int i = 0; i < length; i++) {
        cout << originalArray[i] << " ";
    }

    return 0;
}
