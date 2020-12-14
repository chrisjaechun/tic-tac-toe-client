### List of technologies used

- Git Bash
- HTML5
- CSS
-- Bootstrap
- JavaScript
- jQuery
-- AJAX

### User Stories

* As a user, I would like to play tic-tac-toe with a friend, locally so I can exert my intellectual dominance.
* As a user, I would like to restart the game after its result, so I can go on a nice streak.
* As a user, I'd like to see how many games I've played.
* As a user, I want users to sign-up or sign-in before being able to play.

### Wireframes

![Original wireframe](https://i.imgur.com/sKcMeEn.png)

Things are different. I wanted to display how many games were played but realize
the requirements ask for a button instead. I also removed the restart game button
so it may only appear after a completed game - no rage quits!

### Planning

## navbar-branch

I wanted to get started on the framework first by placing my navbar to hold the
authorization features, such as sign-up, sign-in, change password & sign-out.

After placing those buttons in my HTML (with Bootstrap code lines), I styled
them in CSS and decided to go for a very simple and clean design. The main colors
will be black and white with blue and red buttons. The blue buttons will signify
certain progressive actions while the red was primarily used for the 'Sign Out'
button, as a warning.

This was all day 1 and 2 and went as planned, for the most part. The biggest
hurdle was getting the 'Change Password' modal to appear as intended but it would
only populate after selecting the 'Sign-Up' modal button and even then on top of
the 'Sign-Up Modal'. I realized I didn't have proper closing div tags for each
so it worked like a charm after placing those closing tags properly. After
setting up the navbar, I worked towards the functionality of the authorization
features.

## authorization-branch

Following the trainings we were given in our first few weeks, the authorization
feature implementation was seamless as the code was nearly identical (save for
the unique URL paths).

## get-game-branch

On this branch, I didn't focus on creating a board in HTML just yet but on the
ability to POST a new game. This was tricky at first but after some sleuthing
with colleagues, we found that my data attribute for the API call was missing
a few double-quotes. The call was working properly after the placement of the
double-quotes.

## game-ui-branch

Ah, the trickiest branch yet! I thought it would have been wise to make a board
with toggle buttons. However, I was having an issue of being able to select which
color the button would be after clicking them and couldn't figure out how to
disable clicking the button after being pressed. I then realized that you can
give <div> elements a click listener as well, so I changed the toggle buttons to
<div> elements so I wouldn't have to worry about the toggle color.

I aimed to keep my page as minimal and clean as possible, to make sure the user
knew where to pay attention to. With that, I had the following user flow for
this project in mind:

Landing-page ---> sign-up modal ---> success ---> sign-in ---> success/start game
.. ---> game board ---> result modals/restart games

After laying this groundwork I attempted to move towards this at a nice pace but
kept getting stuck on a click populating a value. I did A LOT of back and forth
with a few colleagues and with sensei Mike and ultimately found that I was not
targeting correctly. Instead of event.target, I was targeting event.target.id so
I was only targeting the custom id attribute as opposed to the actual element.

Once I got this working, I decided to work on switching turns and determining a
winner. The switch turns was tricky at first but it was a simple if else
statement. With declaring the player as 'X' as a global constant, the switch
turns function would note if the value 'X' was in the array. If not, 'X' moves,
but if 'X' has moved, the player variable will be 'O' and so on and so forth.

Determining a winner was certainly tricky. My inclination here was to declare
another variable with the winning combinations as an object with arrays that
note a winning combinations of indices. This... was a task to run through each
time so after discussing with colleagues, it was agreed upon that if else
statements can also note for a win condition. I set this up by declaring a
variable of gameArray (initially with a few 'X' values included but Mike showed
this was not necessary for this) - I then set the matching combinations with if
else statements - example below:

```js
const gameArray = ['','','','','','','','','']
const onWin = function() {
  if (gameArray[0] !== '' && gameArray[0] === gameArray[1] && gameArray[0] === gameArray[2]) {

  } else if (gameArray[3] !== '' && gameArray[3] === gameArray[4] && gameArray[3] === gameArray[5]) {

 } ...
}
```

I couldn't store the game's array for the longest time and wasn't sure if I was
even calling the onWin function correctly. So I stayed after class with Mike and
he walked me through why. I never declared gameArray within my selection function
(notes whenever a move is made) so I was never actually storing any of the moves.
To mitigate this, I declared the player's position with the following:

```js
gameArray[position] = player
```

I initially had the winning success message override the player's turn message
but had a tough time making sure buttons were disabled after a completed game.
As a workaround, I decided to make success modals on both win and draw. On these
modals, I removed any manual close features and made them static. These modals
now only allow a restart or new game function as the next step and will close
only upon the selection of the respective buttons. Neat.

One of the bigger troubles I had was determining a draw result. I initially
thought of having a moves counter. Whenever moves === 9 (the total number of
moves), the draw result modal would pop-up. However, there were 2 issues with
this:

1. 9 moves does not necessarily denote a draw result.
2. I couldn't get my move counter to reset.

After talking with a colleague, I realized my if else statements for a winning
condition can also check for draws as an else statement. It's a long one but, I
ultimately made a condition that if every index in the gameArray was not blank
but none of the winning combinations were met, it has to be a tie. I'm thinking
this line of code is pretty verbose - can a forEach loop work here?

Another issue I kept running into was clearing the board and the
gameArray for a new game. Clearing the board was easy - simply make the <div>
elements a blank value but resetting the gameArray to its original declaration
took some time. After some sleuthing, I realize a forEach loop was ideal here so
I used one to revert the gameArray indices back to a blank value.

My last substantial issue was getting the turn to reset to 'X' after an
'O' win. This was working properly with an 'X' win or draw so I tried to declare
player as 'X' in my onRestart function. Logging player in this function would
return 'X', but for some reason an 'O' would populate on my next click. I also
tried to declare player as 'X' within my onWin function but same thing.
Ultimately, I created a new function (turnReset) that would declare player as
'X' if the player value was 'O' and it did the trick! I'm thinking there's an
extra line of code I could add in the turnSwitch function - is there?

Finally, I added a footer for the Get Games button - which will only appear once
a user has signed in. I thought this one was going to be tricky but I was able
to get this surprisingly quick. I wasn't sure what attribute to target for the
total number of games, so I console logged the API response and noticed the
'length' attribute. I'm calling with responseData.games.length - neato.

"""Whoa. This a big branch." -George of the Jungle" -Christopher J Chun (jk)

### What's left to do

Gotta optimize for mobile. :(

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
