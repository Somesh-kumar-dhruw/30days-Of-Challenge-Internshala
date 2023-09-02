#include <iostream>
using namespace std;

bool areArraysEqual(int arr1[], int arr2[], int size) {
    // Check if the sizes of the arrays are equal
    if (size != size) {
        return false;
    }

    // Compare each element of the arrays
    for (int i = 0; i < size; i++) {
        if (arr1[i] != arr2[i]) {
            return false; // If any element is different, the arrays are not equal
        }
    }

    // If all elements are the same, the arrays are equal
    return true;
}

int main() {
    int array1[] = {1, 2, 3, 4, 5};
    int array2[] = {1, 2, 3, 4, 5};
    int size = sizeof(array1) / sizeof(array1[0]);

    if (areArraysEqual(array1, array2, size)) {
        cout << "The arrays are equal" << endl;
    } else {
        cout << "The arrays are not equal" << endl;
    }

    return 0;
}
