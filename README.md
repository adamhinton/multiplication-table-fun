# This is a Work In Progress
Update 5.15.2022:
##Readme will be updated with more details when project is fleshed out a little more.

Multiplication Table Fun
-An application to dynamically render multiplication tables based on user preferences

Project Status
-Work in progress

Installation and Setup Instructions:
Clone down this repository. You will need node and npm installed globally on your machine.

Installation:
npm install

To Run Test Suite:
npm test

To Start Server:
npm start

To Visit App:

MVP:
+Components:
[]Header
[]Main body
[]SingleTableQuiz
-Displays numbers to be multiplied, but
[]SingleTableDisplay
-This shows all the answers
[]NumberSelectForm
-User fills this out to select what numbers they want in the table

[]HTML:
-[]highly accessible and semantic

+Styling:
-Use Styled Components
[]Use similar header, colors and fonts to pokemon project
[]Make tables simple and sleek
[]Dark Mode
[]responsive design (flexbox)

+Features:
[]Two display options:
-[]One is quiz where the user has to fill in the answers.
-[]the other option simply statically displays the number in the selected mult table.
[]User can fill out which numbers to display

+Routing:
[] use React Router
-This will be more important when backend is built out, that will come later on

+Testing:
[X] Robust unit testing suite

+Stretch Goals:
[]User can make account
-use JWT
[]Backend remembers user tables saved in account
[]display facts under each number where possible: NumberAPI, PokeAPI
[]Relational databases store user info with SQL/Express/Node
-[]one table for users: userID, username, email, password(encrypted)
-[]one table for numbers: a column for base number, multiplier, and which userID it belongs to
[]front end calls on the database API when user logs in to find which numbers they saved
[]SEO

Stretch goal components:
[]Login
[]Registration
[]Account management

[]Build React Router pages for:
-[]login
-[]registration
-[]account management (Private Route)
