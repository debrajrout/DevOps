import pygame
import random
from button import Button
import sys
from pygame import mixer
import os
from pygame.locals import *
import tkinter

pygame.init()
mixer.init()

clock = pygame.time.Clock()

def initial():
    #initialisation
    
    pygame.init()
    mixer.init()
    
    infoObject = pygame.display.Info()
    print (infoObject.current_w, infoObject.current_h)
    
    dis_dim=dis_size()
    BG = pygame.image.load("./assets/menu bg.jpg")

    dis = pygame.display.set_mode((dis_dim[0], dis_dim[1]))

    Icon = pygame.image.load('./assets/icon.jpg')

    pygame.display.set_icon(Icon)
    
    

def dis_size():
    status=open("screensize.txt","r")
            
    size=status.read()
    
    status.close()
    infoObject = pygame.display.Info()
    
    if size == "FULLSCREEN":
        return ([infoObject.current_w, infoObject.current_h])
    elif size == "1280*720":
        return (1280,720)
    elif size == "1200*700":
        return (1200,700)

dis_dim=dis_size()

black = (48, 25, 52)
green = (50, 168, 117)
grey = (63, 63, 63)

BG = pygame.image.load("./assets/menu bg.jpg")

dis = pygame.display.set_mode((dis_dim[0], dis_dim[1]), HWSURFACE | DOUBLEBUF | RESIZABLE)

Icon = pygame.image.load('./assets/icon.jpg')


pygame.display.set_icon(Icon)

        

def get_font(size):  
    return pygame.font.Font("./assets/plagfont.otf", size)

def get_title(size):
    return pygame.font.Font("./assets/spacefont.otf", size)

def hover():
    pygame.mixer.Channel(0).play(pygame.mixer.Sound("./assets/button hover sound.wav"))
    
def tkloop():
    root = tkinter.Tk()
    root.title("DISPLAY INITIALISATION")
    root.geometry("300x120")      
    
    options_list = ["1280*720","FULLSCREEN","1200*700"]      
   
    value_inside = tkinter.StringVar(root)      
    
    value_inside.set("Select an Option")      
    
    question_menu = tkinter.OptionMenu(root, value_inside, *options_list)
    question_menu.pack()    
      
    def print_answers():
        print("Selected Option: {}".format(value_inside.get()))
        status=open("screensize.txt","w")
        status.write(value_inside.get())
        status.close()
        return None
      
    submit_button = tkinter.Button(root, text='Submit', command=print_answers)
    submit_button.pack()
    close_button=tkinter.Button(root, text= "Please restart the game", font=("Calibri",14,"bold"), command=root.destroy)
    close_button.pack(pady=20)
      
    root.mainloop()    
    
def menu():
    dis.fill(green)
    mixer.music.set_volume(0.7)
    MainTheme = pygame.mixer.music.load("./assets/Main Theme.mp3")
    pygame.mixer.music.play(-1)
    size=dis_size()
    #print("no error")
    while True:
        pygame.display.set_caption('MAIN MENU')
        dis.blit(BG, (0, 0))
        MENU_MOUSE_POS = pygame.mouse.get_pos()

        MENU_FONT = get_title(150).render("MAIN MENU", True, "#FFC000")
        MENU_RECT = MENU_FONT.get_rect(center=(size[0]/2, 100))

        PLAY_BUTTON = Button(image=pygame.image.load("./assets/Play Rect.png"),
                             pos=(size[0]/2, 250),
                             text_input="PLAY",
                             font=get_font(75),
                             base_color="#d7fcd4",
                             hovering_color="White")
        OPTIONS_BUTTON = Button(image=pygame.image.load("./assets/Options Rect.png"),
                                pos=(size[0]/2, 400),
                                text_input="Controls",
                                font=get_font(74),
                                base_color="#d7fcd4",
                                hovering_color="White")
        QUIT_BUTTON = Button(image=pygame.image.load("./assets/Quit Rect.png"),
                             pos=(size[0]/2, 550),
                             text_input="QUIT",
                             font=get_font(75),
                             base_color="#d7fcd4",
                             hovering_color="White")
        dis.blit(MENU_FONT, MENU_RECT)
        for button in [PLAY_BUTTON, OPTIONS_BUTTON, QUIT_BUTTON]:
            button.changeColor(MENU_MOUSE_POS)  
            hover()
            button.update(dis)
        for event in pygame.event.get():
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_ESCAPE:
                    pygame.quit()
                    sys.exit()
            
            if event.type == pygame.MOUSEBUTTONDOWN:
                if PLAY_BUTTON.checkForInput(MENU_MOUSE_POS):
                    hover()
                    play()
                if OPTIONS_BUTTON.checkForInput(MENU_MOUSE_POS):
                    hover()
                    options()
                if QUIT_BUTTON.checkForInput(MENU_MOUSE_POS):
                    pygame.quit()
                    sys.exit()

        pygame.display.update()

 
def options():
    global framerate
    DEFAULT_FRAMERATE = 10
    framerate = DEFAULT_FRAMERATE
    size=dis_size()
    while True:
        pygame.display.set_caption('CONTROLS')
        OPTIONS_MOUSE_POS = pygame.mouse.get_pos()

        dis.fill("blue violet")

        OPTIONS_TEXT = get_font(45).render("Controls", True, "Black")
        OPTIONS_RECT = OPTIONS_TEXT.get_rect(center=(340, 160))

        INSTRUCTIONS_TEXT_1 = get_font(45).render("USE ARROW KEYS OR WASD ", True,
                                                "Black")
        INSTRUCTIONS_RECT_1 = OPTIONS_TEXT.get_rect(center=(340, 360))

        INSTRUCTIONS_TEXT_2 = get_font(45).render("SPACE OR ESC TO PAUSE", True,
                                                "Black")
        INSTRUCTIONS_RECT_2 = OPTIONS_TEXT.get_rect(center=(340, 460))
        
        dis.blit(OPTIONS_TEXT, OPTIONS_RECT)
        dis.blit(INSTRUCTIONS_TEXT_1, INSTRUCTIONS_RECT_1)
        dis.blit(INSTRUCTIONS_TEXT_2, INSTRUCTIONS_RECT_2)

        OPTIONS_BACK = Button(image=None,
                              pos=(1100, 660),
                              text_input="BACK",
                              font=get_font(75),
                              base_color="Black",
                              hovering_color="Green")

        OPTIONS_BACK.changeColor(OPTIONS_MOUSE_POS)
        OPTIONS_BACK.update(dis)
        
        OPTIONS_DISP = Button(image=None,
                              pos=(440, 660),
                              text_input="DISPLAY SETTINGS",
                              font=get_font(75),
                              base_color="Black",
                              hovering_color="Green")

        OPTIONS_DISP.changeColor(OPTIONS_MOUSE_POS)
        OPTIONS_DISP.update(dis)
        
        
        
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
            if event.type == pygame.MOUSEBUTTONDOWN:
                if OPTIONS_BACK.checkForInput(OPTIONS_MOUSE_POS):
                    hover()
                    menu()
                if OPTIONS_DISP.checkForInput(OPTIONS_MOUSE_POS):
                    hover()
                    pygame.quit()                    
                    tkloop()
                    sys.exit()
        pygame.display.update()           
        

def restart(score):
    dis.fill(green)
    mixer.music.load("./assets/game over.wav")
    mixer.music.set_volume(0.8)
    mixer.music.play(1)
    score_text="YOUR SCORE :"+str(score)+" POINTS"
    while True:
        pygame.display.set_caption('RESTART')
        PLAY_MOUSE_POS = pygame.mouse.get_pos()

        dis.fill("black")

        RESTART_TEXT = get_font(80).render("GAME OVER", True, "White")
        RESTART_RECT = RESTART_TEXT.get_rect(center=(640, 160))
        SCORE_TEXT = get_font(50).render(score_text, True, "White")
        SCORE_RECT = SCORE_TEXT.get_rect(center=(640,360))
        dis.blit(SCORE_TEXT,SCORE_RECT)
        dis.blit(RESTART_TEXT, RESTART_RECT)

        RESTART = Button(image=None,
                         pos=(640, 560),
                         text_input="RESTART?",
                         font=get_font(75),
                         base_color="White",
                         hovering_color="Green")

        RESTART.changeColor(PLAY_MOUSE_POS)
        RESTART.update(dis)

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
            if event.type == pygame.MOUSEBUTTONDOWN:
                if RESTART.checkForInput(PLAY_MOUSE_POS):
                    hover()
                    menu()

        pygame.display.update()

def pause():  
    size=dis_size()
    loop = 1 
    shape_surf = pygame.Surface(pygame.Rect((0, 0, size[0], size[1])).size, pygame.SRCALPHA)
    pygame.draw.rect(shape_surf, (10, 10, 10, 127), shape_surf.get_rect())
    dis.blit(shape_surf, (0, 0, size[0], size[1]))
    
    PAUSE_TEXT = get_font(70).render("PAUSED", True, "White")
    PAUSE_RECT = PAUSE_TEXT.get_rect(center=(size[0]/2, 100))
    dis.blit(PAUSE_TEXT,PAUSE_RECT)    
    while loop:    
        pygame.display.set_caption('PAUSED')
        PAUSE_MOUSE_POS = pygame.mouse.get_pos()
        PAUSE_RESUME = Button(image=None,
                              pos=(int(size[0]/3.7), 600),
                              text_input="RESUME",
                              font=get_font(75),
                              base_color="Yellow",
                              hovering_color="Green")

        PAUSE_RESUME.changeColor(PAUSE_MOUSE_POS)
        PAUSE_RESUME.update(dis)    
        
        PAUSE_QUIT = Button(image=None,
                              pos=(int(size[0]/1.3), 600),
                              text_input="QUIT",
                              font=get_font(75),
                              base_color="Yellow",
                              hovering_color="Green")
        PAUSE_QUIT.changeColor(PAUSE_MOUSE_POS)
        PAUSE_QUIT.update(dis) 
        
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                loop = 0
            if event.type == pygame.MOUSEBUTTONDOWN:
                if PAUSE_RESUME.checkForInput(PAUSE_MOUSE_POS):
                    hover()
                    loop = 0
                if PAUSE_QUIT.checkForInput(PAUSE_MOUSE_POS):
                    pygame.quit()
                    sys.exit()
            if event.type == pygame.KEYDOWN:
                if (event.key == pygame.K_ESCAPE) or (event.key == pygame.K_SPACE):
                    hover()
                    loop = 0                   
                                   
        pygame.display.update()
        # screen.fill((0, 0, 0))
        clock.tick(60)

def play():
    pygame.mixer.Channel(0).stop()
    x1 = 400
    y1 = 400
    dir = [0, 0]
    snake_list = []
    snake_len = 1
    foodx = 300
    foody = 300
    count=0
    
    print("no error")
    GameTheme= pygame.mixer.music.load("./assets/in game theme.mp3")
    pygame.mixer.music.play(-1)
    mixer.music.set_volume(0.5)

    while True:
        pygame.display.set_caption('PLAY')
        PREV_KEY = ""
        dis.fill(black)
        c1 = random.randint(97, 193)
        c2 = random.randint(54, 151)
        c3 = random.randint(89, 210)
        size=dis_size()
        for event in pygame.event.get():
            if event.type == pygame.KEYDOWN:
                if (event.key == pygame.K_LEFT
                    ) or (event.key == pygame.K_a) and (PREV_KEY != "R"):
                    dir = [-10, 0]
                    PREV_KEY = "L"

                elif (event.key == pygame.K_RIGHT
                      ) or (event.key == pygame.K_d) and (PREV_KEY != "L"):
                    dir = [10, 0]
                    PREV_KEY = "R"

                elif (event.key
                      == pygame.K_UP) or (event.key
                                          == pygame.K_w) and (PREV_KEY != "D"):
                    dir = [0, -10]
                    PREV_KEY = "U"

                elif (event.key == pygame.K_DOWN
                      ) or (event.key == pygame.K_s) and (PREV_KEY != "U"):
                    dir = [0, 10]
                    PREV_KEY = "D"
                elif (event.key == pygame.K_ESCAPE) or (event.key == pygame.K_SPACE):
                    hover()
                    pause()

        x1 += dir[0]
        y1 += dir[1]
        pygame.draw.rect(dis, (255, 0, 0), [foodx, foody, 10, 10])

        snake_list.append([x1, y1])
        if len(snake_list) > snake_len:
            del snake_list[0]

        #if ([x1, y1] in snake_list[:-1]):
            #print("snake got headache")
         #   pygame.mixer.Channel(1).stop()
          #  restart(count)

        if (x1 >= size[0] or x1 < 0 or y1 >= size[1] or y1 < 0):
            #print("snake tried to noclip")
            pygame.mixer.Channel(1).stop()
            restart(count)

        for x in snake_list:
            pygame.draw.rect(dis, (c1, c2, c3), [x[0], x[1], 10, 10])

        if x1 == foodx and y1 == foody:
            foodx = int((random.randint(1, 12)) * 100)
            foody = int((random.randint(1, 7)) * 100)
            snake_len += 1
            count+=1
            pygame.mixer.Channel(1).play(pygame.mixer.Sound("./assets/eat beep.wav"))

        pygame.display.update()
        # sets game fps to 10
        clock.tick(10)


menu()
