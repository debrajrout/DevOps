question link: https://leetcode.com/problems/zigzag-conversion/

class Solution {
public:
    string convert(string s, int numRows) {
        if (numRows == 1 || s.size() <= numRows) return s;
        int tmp((numRows - 1) * 2);
        int start(tmp), pos(0), count(0);
        string ans;
        while (start >= 0){
            ans += s[pos];
            while (pos < s.size()){
                if (start != tmp && start != 0 && pos + start < s.size()) ans += s[pos + start];
                if (pos + tmp < s.size()) ans += s[pos + tmp];
                pos += tmp;
            }
            start -= 2;
            count++;
            pos = count;
        }
        return ans;
    }
};
