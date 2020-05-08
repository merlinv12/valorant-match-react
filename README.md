# Valorant Match Summary in React
I've been enjoying Riot's new game, Valorant, and was really impressed with the UI/UX for the match summary screen that is available in-game.  My favorite is the Timeline section that  gives a round-by-round summary of the whole match.
The game is still in development and there is no official public API to access data yet, so for now I have just created an a Match object to represent all the data on the score screen. 



## To Do:
- [x] Create Sample JSON object that would be recieved from unique match ID
  - [ ] Create database schema and functions to generate seed data
- [x] Create layout for main page featuring final score with outcome, 4 tabs, and area for data
  - [ ] Background image based on Map
- [x] Create Timeline component and subcomponents
  - [x] Create rounds timeline economy graphs
  - [x] Create round layout for player stats and events
  - [x] Create table for round stats
- [ ] Finish other 3 components ?
