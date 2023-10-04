## The Best Competitive Programming Setup! (Sublime Text)

If you're one of those VS Code users, then I can understand how tedious it is to copy-paste each test case onto your terminal and rerun your code every time. (_Unless you use THAT extension_) In this short tutorial, I will help you setup your competitive programming setup on Sublime Text which will enable to parse all test cases with a single click!

Anyways, enough the briefings, let me show you my setup for competitive programming. This is probably one of the most effective setups out there to _avoid wasting precious time on copying test-cases._

---

### Prerequisites ~

1.  Python3 installed. (DIY!)

---

### **Follow these underlying steps carefully ~**

1.  **Download and Install Sublime Text ~** Sublime Text is by far the most versatile text editor in the market. Although, it has a paid version, the unregistered version has NO downsides. It's lightweight, easily customizable (_unlike Vim)_ and vast number of packages and plugins can be used to effectively increase its functionality. Download it from [here](https://www.sublimetext.com/download).
2.  **Install Package Control ~** Any package in Sublime Text can be downloaded from Package Control. You can install Package Control from `Sublime Text > Tools > Install Package Control`. Let the process finish and restart Sublime Text.
3.  **Install CppFastOlympicCoding Plugin ~** Download CppFastOlympicCoding plugin from the Package Control. You can do so by `Sublime Text > Preferences > Package Control > Install Packages > CppFastOlympicCoding`.
4.  **Clone FastOlympicCodingHook ~** To parse the test cases on any site (_with the help of Competitive Companion which we will install in the next step_) you need to [download](https://github.com/DrSwad/FastOlympicCodingHook/archive/refs/heads/master.zip) and extract the folder. Now, copy the folder itself and navigate to `Sublime Text > Preferences > Browse Packages`. This should open a directory, paste the folder here.
5.  **Additional Step for Windows Users ~** Copy the following code `"tests_file_suffix": "__tests"` and paste this in the settings file of FastOlympicCoding. `Sublime Text > Tools > FastOlympicCoding > Settings > FastOlympicCoding.sublime-settings`. (_the file which is empty_)
6.  **Install Competitive Companion ~** Competitive Companion is amazing browser extension which parses test cases from webpages. Download it from the web store or you can [click here](https://chrome.google.com/webstore/detail/competitive-companion/cjnmckjndlpiamhfimnnjmnckgghkjbl). Pin this extension to make it easier to use.
7.  **Setting Up Custom Port ~** Now, to receive the parsed test cases, we need to specify the Port where the data will be sent. The custom port that we need to setup is Port `12345`. Add this Port to Competitive Companion by right-clicking on the extension then go to `Options > Custom ports`.

I hope there was nothing too fancy in the above mentioned steps, and you were able to follow them easily. Now, since we have our environment all setup, it's time to TEST!

---

### How to use?

1.  Navigate to the problem page on any competitive programming site. Let's take a random problem for the sake of it right now - [Watermelon (Codeforces)](https://codeforces.com/contest/4/problem/A).
2.  Copy-paste the following code in a new file in Sublime Text.

    ```
    #include<iostream>
    using namespace std;

    int main()
    {
    	int n;
    	cin>>n;

    	if(n >= 4 && n%2 == 0) cout<<"YES"<<endl;
    	else cout<<"NO"<<endl;
    	return 0;
    }
    ```

3.  Right-click anywhere on the file. Now, click on `Listen to Competitive Companion`.
4.  Switch tab to Codeforces problem page and click on the Competitive Companion extension (_green + button_).
5.  A small loading will appear under your address bar. (_The test cases have been parsed_)
6.  Go back to Sublime Text and press `ctrl + alt + b`. (for OSX use `ctrl + shift + p`)
7.  A new window will on the right side of your sublime workspace which will show the test cases and their result.

**That's All Folks!** This is Vanshaj (Kraizan) Bhatnagar signing off for now!
