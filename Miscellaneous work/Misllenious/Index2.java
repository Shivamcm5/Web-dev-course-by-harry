package Misllenious;

public class Index2 {
    public static class HandshakeCalculator {
        public static void main(String[] args) {
            int numberOfStudents = 100;
            int totalHandshakes = calculateHandshakes(numberOfStudents);
            System.out.println("Total handshakes in a class of " + numberOfStudents + " students: " + totalHandshakes);
        }
    
        public static int calculateHandshakes(int numberOfStudents) {
            // Use the combination formula to calculate handshakes
            return numberOfStudents * (numberOfStudents - 1) / 2;
        }
    }
    
}
