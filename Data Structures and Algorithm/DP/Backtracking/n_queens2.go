package main

import (
	"fmt"
)

func placeQueens(ans *[][]string, board []string, col int, leftRow, lowerDiagonal, upperDiagonal []int, n int) {
	if col == n {
		temp := make([]string, n)
		copy(temp, board)
		*ans = append(*ans, temp)
		return
	}

	for row := 0; row < n; row++ {
		if leftRow[row] == 0 && lowerDiagonal[row+col] == 0 && upperDiagonal[n-1+col-row] == 0 {
			leftRow[row] = 1
			lowerDiagonal[row+col] = 1
			upperDiagonal[n-1+col-row] = 1
			board[row] = board[row][:col] + "Q" + board[row][col+1:]
			placeQueens(ans, board, col+1, leftRow, lowerDiagonal, upperDiagonal, n)
			leftRow[row] = 0
			lowerDiagonal[row+col] = 0
			upperDiagonal[n-1+col-row] = 0
			board[row] = board[row][:col] + "." + board[row][col+1:]
		}
	}
}

func solveNQueens(n int) [][]string {
	str := ""
	for i := 0; i < n; i++ {
		str += "."
	}
	board := make([]string, n)
	for i := 0; i < n; i++ {
		board[i] = str
	}
	var ans [][]string
	leftRow := make([]int, n)
	lowerDiagonal := make([]int, 2*n-1)
	upperDiagonal := make([]int, 2*n-1)
	placeQueens(&ans, board, 0, leftRow, lowerDiagonal, upperDiagonal, n)
	return ans
}

func main() {
	n := 8
	result := solveNQueens(n)

	for _, solution := range result {
		for _, row := range solution {
			fmt.Println(row)
		}
		fmt.Println("=====================")
	}
}
