//Best Time to Buy and Sell Stock
import java.util.*;
import java.lang.*;
import java.io.*;

public class Java {

  public static int fn(int n[]) {
    int x=n.length;
    int mp=0;
    int bp=Integer.MAX_VALUE;
    for(int i=0;i<x;i++){
      if(bp>n[i]){
        bp=n[i];
      }
      else{
      int p=n[i]-bp;
      if(p>mp){
        mp=p;
      }
    }
    }st
      return mp;
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n[] = {3,4,1,2,7,6};
    int x=fn(n);
    System.out.println(x);
  }
}
