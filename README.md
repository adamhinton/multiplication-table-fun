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

<!-- Add url later -->

Reflection
What was the context for this project? (ie: was this a side project? was this for Turing? was this for an experiment?)
What did you set out to build?
Why was this project challenging and therefore a really good learning experience?
What were some unexpected obstacles?
What tools did you use to implement this project?
This might seem obvious because you are IN this codebase, but to all other humans now is the time to talk about why you chose webpack instead of create react app, or D3, or vanilla JS instead of a framework etc. Brag about your choices and justify them here.
Example:
This was a 3 week long project built during my third module at Turing School of Software and Design. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.

Originally I wanted to build an application that allowed users to pull data from the Twitter API based on what they were interested in, such as 'most tagged users'. I started this process by using the create-react-app boilerplate, then adding react-router-4.0 and redux.

One of the main challenges I ran into was Authentication. This lead me to spend a few days on a research spike into OAuth, Auth0, and two-factor authentication using Firebase or other third parties. Due to project time constraints, I had to table authentication and focus more on data visualization from parts of the API that weren't restricted to authenticated users.

At the end of the day, the technologies implemented in this project are React, React-Router 4.0, Redux, LoDash, D3, and a significant amount of VanillaJS, JSX, and CSS. I chose to use the create-react-app boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration I plan on handrolling a webpack.config.js file to more fully understand the build process.

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

Stretch goal components:
[]Login
[]Registration
[]Account management

[]Build React Router pages for:
-[]login
-[]registration
-[]account management (Private Route)
