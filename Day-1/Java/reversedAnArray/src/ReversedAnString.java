public class ReversedAnString {
    public static void  main(String[] args){
        String originalString = "Hello, World";
        StringBuilder reversedString = new StringBuilder(originalString).reverse();
        System.out.print(reversedString.toString());
    }
}
