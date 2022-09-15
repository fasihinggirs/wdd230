"""This is the Tic-Tac-Toe game in which two players seek
in alternate turns to complete a row, a column, or a 
diagonal with either three x's or three o's drawn in 
the spaces of a grid of nine squares.
Author: Immanuel Nggiku"""
# Define the main function to print the lists and
# request user inputs.


def main():
    player = next_player("")
    board = create_board()
    while not (has_winner(board) or is_a_draw(board)):
        display_board(board)
        game_turn(player, board)
        player = next_player(player)
    if (has_winner(board)) == True:
        display_board(board)
        print("We have a winner! Thanks for playing!")
    elif (is_a_draw(board)) == True:
        display_board(board)
        print("It's a draw. Thanks for playing!")
# Define a function to create the board


def create_board():
    # Create an empty list and add a for loop
    # to populate the list.
    board = []
    for i in range(9):
        board.append(i + 1)
    return board

# Define a function to display the board in
# lines and columns.


def display_board(board):
    print(f'\n{board[0]}|{board[1]}|{board[2]}')
    print('-----')
    print(f'{board[3]}|{board[4]}|{board[5]}')
    print('-----')
    print(f'{board[6]}|{board[7]}|{board[8]}\n')


def is_a_draw(board):
    for i in range(9):
        if board[i] != "x" and board[i] != "o":
            return False
        return True
# Function to define the winner.


def has_winner(board):
    return (board[0] == board[1] == board[2] or
            board[3] == board[4] == board[5] or
            board[6] == board[7] == board[8] or
            board[0] == board[3] == board[6] or
            board[1] == board[4] == board[7] or
            board[2] == board[5] == board[8] or
            board[0] == board[4] == board[8] or
            board[2] == board[4] == board[6])

    # Function to define the game's turns.


def game_turn(player, board):
    square = int(input(f"{player}'s turn to choose a square (1-9): "))
    board[square - 1] = player
# Define the current player to chose a square.


def next_player(current):
    if current == "" or current == "o":
        return "x"
    elif current == "x":
        return "o"


if __name__ == "__main__":
    main()
