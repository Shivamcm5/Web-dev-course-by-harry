public class Index {
    public static void main(String[] args) {
        int primeSum = 0;
        for (int x = 1; x <= 100; x++) {
            if (isPrime(x)) {
                primeSum += x;
            }
        }
        System.out.println(primeSum);
    }

    public static boolean isPrime(int n) {
        if (n <= 1) {
            return false;
        }
        if (n == 2) {
            return true;
        }
        if (n % 2 == 0) {
            return false;
        }
        for (int i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}
