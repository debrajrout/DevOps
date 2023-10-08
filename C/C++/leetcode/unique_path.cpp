class Solution {
public:

    int solve(vector<vector<int>> &dp,int m , int n ){
        if(m==1 && n==1){
            return 1;
        }

        if(m==0 || n==0){
            return 0;
        }

        if(dp[m][n]!=-1){
            return dp[m][n];
        }

        dp[m][n]=solve(dp,m-1,n)+solve(dp,m,n-1);

        return dp[m][n];
    }

    int uniquePaths(int m, int n) {
        vector<vector<int>> dp(m+1, vector<int>(n+1, -1));

        int ans = solve(dp,m,n);
        return ans;
    }
};
