#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
  srand(time(NULL)); // Seed for random number generation
  int randomNumber, userGuess, attempts;
  char playAgain;

  do {
    randomNumber = rand() % 100 + 1; // Generate random number between 1 and 100
    attempts = 0;

    // Display welcome message
    printf("Welcome to the Number Guessing Game!\n");
    printf("I have selected a random number between 1 and 100. Can you guess "
           "it?\n");

    do {
      // Get user's guess
      printf("Enter your guess: ");
      scanf("%d", &userGuess);
      attempts++;

      // Check if the guess is out of bounds
      if (userGuess < 1 || userGuess > 100) {
        printf("Please enter a number between 1 and 100.\n");
      }
      // Provide hints based on the user's guess
      else if (userGuess < randomNumber) {
        printf("Too low! Try again.\n");
      } else if (userGuess > randomNumber) {
        printf("Too high! Try again.\n");
      }
      // Congratulate the user on a correct guess
      else {
        printf("Congratulations! You guessed the number %d in %d attempts.\n",
               randomNumber, attempts);
      }

      // Flush the input buffer to prevent infinite loop on invalid input
      while ((getchar()) != '\n')
        ;

    } while (
        userGuess !=
        randomNumber); // Continue the loop until the correct number is guessed

    // Ask the user if they want to play again
    printf("Do you want to play again? (y/n): ");
    scanf(" %c", &playAgain);

  } while (playAgain == 'y' ||
           playAgain ==
               'Y'); // Continue the outer loop if the user wants to play again

  // Display a goodbye message
  printf("Thank you for playing! Goodbye!\n");

  return 0;
}
