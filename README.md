https://github.com/SHLURPSHLURP/ScrapBot

individual group member contributions is at the bottom

# ScrapBot

NOTE: To follow the order from the start, prologue.html should be the starting page. index.html is the home page.

ScrapBot is a website developed by Scrim Scram Scrum Studios. It is inspired by story-based RPG games, and following the given theme of "Gamer Crazy". The story follows a robot named ScrapBot who wakes up near a warehouse and leaves the warehouse on adventures to gather scraps to fix/build his friends and find friends along the way. By going through the stories, players can "earn" scraps (not functional in website) to exchange in the workshop for figurines or decor for their warehouse (aka Diorama or the home screen). In the shelf, players can see all their collected figurines and can see a 3D model view of their figurine. There is also music ambience, which can be muted if the player wishes to.

## Design Process

This website is for a younger target group (around 9 to 12 years old). They would want to achieve entertainment, which our website can provide.
For example, for children:
-they can play the game to collect decor and choose where to place them on the home screen to decorate things 
-play the episode stories to read 
-play the game to exchange for figurines to display and collect them

As for the design process, more childish references were used for the icons, as well as brighter colours.

FIGMA link (toggle low fidelity and high fidelity in pages): https://www.figma.com/design/HoP1Diygs6ldKEvVuyKEjd/IP_AD_We-Scrim-and-Together-We-Scrum?node-id=0-1&t=EeAl8NujaaCoIAYN-1

## Features
 
### Existing Features

-Prologue/Intro - Allows users to see the backstory and creators by simply clicking next. Also allows users to reach sign in/sign up page eventually by clicking next.

-Sign in - Allows users to sign in by filling in email and password. If email and password is found in database and password matches, they can log into the home page ("accounts" do not "save" game progress- the game "progress" is hard coded).

-Sign up - If email is not found in database, they will be prompted to sign up (or they can click "create an account instead" directly). Here, they can add their information to the database by filling in their email and password. (pls dont request so many times we are using restDB on a free plan T-T)

-forgot password - (NOT FUNCTIONAL) users can click on "forget password?" to get a code sent to their email to rest their password (no email will actually be sent)

-sign in as guest - if user does not wish to create an account or log in, they can simply click this button to go to the home page.

-home screen diorama - user can drag decor icons from the left panel onto the screen (warehouse background) and place it anywhere they want. This will be saved. 

-Episode select (warehouse door at homepage) - By clicking the warehouse door, users can go to the episode select page.

-Story (episode select) - users can enter the story (chapter 1) by clicking "read now"

-story (chapter 1) - user can read the story by clicking next

-navigation bar (home- fourth icon from the right) - users can go back to the home page by clicking this icon

-navigation bar (shelf- third icon from the right) - users can go back to the shelf by clicking this icon

-shelf - users can select which figurine they want to see the info for my clicking the 2d icon of it

-shelf (figurine info) - users can see the 360 3D model view by click-dragging it. users can also read the story which is beside it.

-navigation bar (workshop - second icon from the right) - users can go back to the workshop by clicking this icon

-workshop (figurines) - users can "buy" the figurine by pressing "buy" which would prompt them to confirm their decision and then alert them of the successful purchase (scraps will not deduct- scraps deduction/earning is not functional). users can also click on "diorama" at the top left to toggle to the diorama decor shop page

-workshop (figurines) - users can "buy" the decor by pressing "buy" which would prompt them to confirm their decision and then alert them of the successful purchase (scraps will not deduct- scraps deduction/earning is not functional).users can also click on "figurines" at the top left to toggle to the figurines shop page

-navigation bar (settings- first icon from the right) - users can go back to the settings by clicking this icon

-settings - users can press "contact us" to toggle to the contact us page 

-settings (sign out)- users can press "sign out" to go back to the sign in page

-settings (universal navigator) - users can press on any of the links to go to any page on the website

-Music - music plays across mostly all the pages, which players can mute by going to settings and clicking mute/unmute

### Features Left to Implement
- actual scrap counter that increases after the story and decreases whe spent
- more chapters stories
- trivia games in the stories

## Technologies Used

-[RestDB] (https://restdb.io)
    -the projects uses restDB for its API and its database (for sign in/sign up)

-[LottieFiles] (https://lottiefiles.com)
    -the project uses lottie files for its lottie (after sign in page)

## Testing

1. sign in page:
   -need to have signed up before to sign in

2. sign up page:
    -needs to be an email to sign up

3. music mutes across all pages when pressed mute and vice versa (except chapter select)

Responsiveness: 

-On normal desktop screens it is at its best, however, it has been noted that if the monitor to display has weird dimensions (eg. a TV), the objects are not at their proper place (eg. warehouse door goes out of place).

-little to no responsiveness was coded for this project due to poor time management: when the display screen is made smaller, the navigation bar and its icons become partially concealed. however, certain pages like the workshop, settings and story are passable.

Bugs:

-while the diorama set up does save, sometimes it only saves the initial one, after that, it no longer saves and always loads back the inital one.

-at chapter select, even if the music is muted from settings, the music here does not mute.

## Credits

### Content
- The code for editing the diorama was taken from and then edited/modified from ChatGPT
- The API code for sign in/sign up was taken and then modified from class CA week 13
- The lottie code was taken and then modified from class CA week 14
- The JS code for the story was taken from and then edited/modified from ChatGPT
- Chatgpt helped to debug and identify certain syntax errors 
  
### Media
- The background images in this site was taken from google
- The plants decor (3) were taken from google
- The icons and all 3D assets (other than abovementioned) were self made but the references were taken from google

### Acknowledgements
- I received inspiration for the:
- 1. workshop layout from Animal Restaurant (mobile game)
- 2. story from RPG story games
- 3. the layout of the homepage from PostKnight (loosely- a lot was edited along the way and postknight does not have the decor editing feature but that it where the inspiration was taken)

## GROUP MEMBER INDIVIDUAL CONTRIBUTIONS

ARAI MIO ASHLEY (Back end and front end developer)
-HTML for workshop prompt, chapter select (partially), chapter 1
-CSS for navigation bar (partially), workshop prompt, chapter select, chapter 1, prologue, intro, sign in, sign up, forgot password
-JS for workshop prompt, chapter 1, guest sign in


GRACIE ARIANNE PEH (Back end and front end developer)
-HTML for intro, prologue, sign in/sign up, homepage, shelf (including figurine info), workshop (including diorama, not including prompt), settings (including contact us), chapter select (partially), lottie, navigation bar (partially)
-CSS for homepage, shelf (including figurine info), workshop (including diorama, not including prompt), settings (including contact us), lottie, navigation bar (partially)
-JS for music, edit diorama, lottie, API (sign in/sign up)


