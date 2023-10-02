#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
    srand(time(NULL));                   // Seed for random number generation
    int randomNumber = rand() % 100 + 1; // Generate random number between 1 and 100
    int userGuess, attempts = 0;
    char playAgain;

    printf("Welcome to the Number Guessing Game!\n");
    printf("I have selected a random number between 1 and 100. Can you guess it?\n");

    do
    {
        printf("Enter your guess: ");
        scanf("%d", &userGuess);
        attempts++;

        if (userGuess < 1 || userGuess > 100)
        {
            printf("Please enter a number between 1 and 100.\n");
        }
        else if (userGuess < randomNumber)
        {
            printf("Too low! Try again.\n");
        }
        else if (userGuess > randomNumber)
        {
            printf("Too high! Try again.\n");
        }
        else
        {
            printf("Congratulations! You guessed the number %d in %d attempts.\n", randomNumber, attempts);
        }

        // Flush the input buffer to prevent infinite loop on invalid input
        while ((getchar()) != '\n')
            ;

    } while (userGuess != randomNumber);

    printf("Do you want to play again? (y/n): ");
    scanf(" %c", &playAgain);

    if (playAgain == 'y' || playAgain == 'Y')
    {
        // Generate a new random number for the next round
        randomNumber = rand() % 100 + 1;
        attempts = 0;
        main(); // Restart the game
    }
    else
    {
        printf("Thank you for playing! Goodbye!\n");
    }

    return 0;
}
