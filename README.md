# Full-Stack FriendFinder
This FriendFinder app is a full-stack app that allows the user to take a quick survey to find their most compatible user in the database. This app uses Express and Node.

When a user submits their survey, the data is sent to the server which runs the logic for the app. This logic simply calculates the difference between users' responses in the database and the user-submitted responses based on the values entered. 

Once this logic is complete, the least different data set is sent back to the front end and is displayed within a modal. This modal shows the matched user's name and photo that was submitted via the survey.