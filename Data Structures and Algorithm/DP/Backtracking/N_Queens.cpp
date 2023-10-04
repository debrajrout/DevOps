#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
	void placeQueens(vector<vector<string>>& ans, vector<string> board, int col, vector<int>& leftRow,
	                 vector<int>& lowerDiagonal, vector<int>& upperDiagonal, int n)
	{
		if (col == n)
		{
			ans.push_back(board);
			return;
		}

		for (int row = 0; row < n; row++)
		{
			if (leftRow[row] == 0 && lowerDiagonal[row + col] == 0 && upperDiagonal[n - 1 + col - row] == 0)
			{
				leftRow[row] = 1;
				lowerDiagonal[row + col] = 1;
				upperDiagonal[n - 1 + col - row] = 1;
				board[row][col] = 'Q';
				placeQueens(ans, board, col + 1, leftRow, lowerDiagonal, upperDiagonal, n);
				leftRow[row] = 0;
				lowerDiagonal[row + col] = 0;
				upperDiagonal[n - 1 + col - row] = 0;
				board[row][col] = '.';
			}
		}
	}

	vector<vector<string>> solveNQueens(int n) {

		string str(n, '.');
		vector<string> board(n);
		vector<vector<string>> ans;

		for (int i = 0; i < n; i++)
		{
			board[i] = str;
		}

		vector<int> leftRow(n, 0);
		vector<int> lowerDiagonal(2 * n - 1, 0);
		vector<int> upperDiagonal(2 * n - 1, 0);

		placeQueens(ans, board, 0, leftRow, lowerDiagonal, upperDiagonal, n);

		return ans;
	}
};

int main() {
#ifndef ONLINE_JUDGE
	freopen("input.txt", "r", stdin);
	freopen("output.txt", "w", stdout);
#endif
	Solution solution;
	int n = 8;
	vector<vector<string>> result = solution.solveNQueens(n);

	for (const vector<string>& solution : result) {
		for (const string& row : solution) {
			cout << row << endl;
		}
		cout << "=====================" << endl;
	}

	return 0;
}
