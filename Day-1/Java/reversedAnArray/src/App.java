


public class App{
    public static void main(String[] args) {
        int[] originalArray = {1,2,3,4,5};

        reverseArray(originalArray);

        for (int i = 0; i < originalArray.length; i++) {
            System.out.print(originalArray[i] + " ");
        }
    }

    public static void reverseArray(int[] arr) {
        int start = 0;
        int end = arr.length -1;

        while (start < end){
            // Swap elements at start and end
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;

            // Move the pointers towards each other
            start++;
            end--;
        }
    }
}