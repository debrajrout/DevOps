import random
print("********************WELCOME TO HAND CRICKET TOURNAMENT***********************")
print("~~~~~~~~~~~~~~~~~~~~~~NOW THE TOSS BEGINS!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~")



user_dicission= input("ENTER YOUR CHOICE B/W ODD OR EVEN:").upper()                   #CHOOSE ODD OR EVEN
user_choice= int(input("ENTER A NUMBER BETWEEN(1-6):"))
comp_choice= random.choice([1,2,3,4,5,6])

print('YOUR CHOICE IS:',user_choice,'COMPUTERS CHOICE IS:',comp_choice)               #BOTH CHOICES ARE PRINTED
                                           

if user_dicission in ["ODD","EVEN"] and 0< user_choice <7:
  toss_decission= user_choice + comp_choice
  if toss_decission %2 ==0:                                                            
    choice= "EVEN"
    if user_dicission== choice:                                                       #WHEN USER HAS CHOOSEN EVEN AND TOSS DECISSION ALSO CAME EVEN
      print("YOU HAVE WON THE TOSS!!.")
      user_option= input("CHOOSE BAT OR BALL:").upper()                               #USER CHOOSES BAT OR BALL
      print("USER HAS CHOOSEN TO",user_option) 
      if user_option=="BAT":                                                         
        comp_option="BALL"
      elif user_option=="BALL":
        comp_option="BAT"
      else:
        print("PLEASE CHOOSE BETWEEN BAT OR BALL!!")                                 #WRONG CHOICE IS OPTED
    else:
      print("YOU HAVE LOST THE TOSS!!. COMPUTER WILL CHOOSE BAT OR BALL.")           #WHEN USER HAS CHOOSEN EVEN BUT TOSS DECISSION  CAME ODD
      comp_option= random.choice(['BAT','BALL'])                                     #COMPUTER CHOOSES BAT OR BALL
      print("COMPUTER HAS CHOOSEN TO",comp_option)
      if comp_option=="BAT":                                                         
        user_option="BALL"
      elif comp_option=="BALL":
        user_option="BAT"


  else:
    choice= "ODD"
    if user_dicission== choice:                                                      #WHEN USER HAS CHOOSEN ODD AND TOSS DECISSION ALSO CAME ODD
      print("YOU HAVE WON THE TOSS!!.")
      user_option= input("CHOOSE BAT OR BALL:").upper()                              #USER CHOOSES BAT OR BALL
      print("USER HAS CHOOSE TO",user_option)
      if user_option=="BAT":                                                         
        comp_option="BALL"
      elif user_option=="BALL":
        comp_option="BAT"
      else:
        print("PLEASE CHOOSE BETWEEN BAT OR BALL!!") 
       
    else:
      print("YOU HAVE LOST THE TOSS!!. COMPUTER WILL CHOOSE BAT OR BALL.")           #WHEN USER HAS CHOOSEN ODD BUT TOSS DECISSION CAME EVEN
      comp_option= random.choice(['BAT','BALL'])                                     #COMPUTER CHOOSES BAT OR BALL
      print("COMPUTER HAS CHOOSE TO",comp_option)
      if comp_option=="BAT":                                                         
        user_option="BALL"
      elif comp_option=="BALL":
        user_option="BAT"
  print("THE TOSS IS OVER MOVE FORWARD TO THE MATCH!!")

else:                                                                                #WHEN USER HAS PUT WRONG OUTPUT FOR CHOICE
  print("PLZ CHOOSE CORRECT CHOICE!!")

print("<<<<<<<<<<<THE MATCH IS GOING TO BEGIN>>>>>>>>>>>")
user_score=0
comp_score=0
times_play=int(input("ENTER THE NUMBER OF TIMES YOU WANT TO PLAY:"))

if user_option =="BAT":                                                                        # USER IS BATTING
  print("YOU ARE BATTING!!")
  for plays in range(times_play):
    user_run= int(input("ENTER YOUR RUN(1-6):"))
    comp_run= random.choice([1,2,3,4,5,6])
    print("COMPUTER RUN:",comp_run)
    if user_run<1 or user_run>6:
      print("PLEASE ENTER A NUMBER BETWEEN 1-6!") 
    else:
      if user_run != comp_run :                                                              # USER IS PLAYING
        user_score += user_run
      else:
        print("YOU ARE OUT!!. TOTAL RUN NEEDED FOR COMPUTER TO WIN IS",user_score+1)        #USER IS OUT
        break
    
    
  print("\nYOU ARE BALLING!!")
  for plays in range(times_play):  
    user_run= int(input("ENTER YOUR RUN(1-6):"))
    comp_run= random.choice([1,2,3,4,5,6])                                                 #COMPUTER IS BATTING
    print("COMPUTER RUN:",comp_run)
    if user_run<1 or user_run>6:
      print("PLEASE ENTER A NUMBER BETWEEN 1-6!")
    else:
      if comp_run != user_run :
        comp_score += comp_run
      else:
        print("COMPUTER IS OUT")                                                         #COMPUTER IS OUT
        break
    

else:
  print("YOU ARE BALLING!!")
  for plays in range(times_play): 
    user_run= int(input("ENTER YOUR RUN(1-6):"))                                                       # COMPUTER IS BATTING
    comp_run= random.choice([1,2,3,4,5,6])
    print("COMPUTER RUN:",comp_run)
    if user_run<1 or user_run>6:
      print("PLEASE ENTER A NUMBER BETWEEN 1-6!")  
    else:
      if user_run != comp_run :
        comp_score += comp_run
      else:
        print("COMPUTER IS OUT!!. TOTAL RUN NEEDED FOR YOU TO WIN IS",user_score+1)     # COMPUTER IS OUT
        break

  print("\nYOU ARE BATTING!!")
  for plays in range(times_play):  
    user_run= int(input("ENTER YOUR RUN(1-6):"))                                       #USER IS BATTING
    comp_run= random.choice([1,2,3,4,5,6])
    print("COMPUTER RUN:",comp_run)
    if user_run<1 or user_run>6:
      print("PLEASE ENTER A NUMBER BETWEEN 1-6!")
    else:
      if comp_run != user_run :
        user_score += user_run
      else:
        print("YOU ARE OUT!!")                                                       #USER IS OUT
        break

print('\nFINAL MATCH SCORE:-\n')
print(f'''          ===========================================================================
              YOUR SCORE          |               COMPUTER SCORE             
                  {user_score}              |                 {comp_score}
          ===========================================================================''')

if user_score> comp_score:
  print("YOU HAVE WON THE MATCH")
elif user_score< comp_score:
  print("COMPUTER HAS WON THE MATCH")
else:
  print("THE MATCH IS DRAW")