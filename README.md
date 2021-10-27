### How to run the application?
1. Clone the repository to your computer
2. Change your directory using cmd and move to the project directory
3. run `npm install` to get required packages
4. run `npm run start`

### How to send request to api routes?
1. The first route is for the question 1, so you can send get request to localhost:5000/endpoint1 using postman
2. The second route is for the question 2, for this route you need to send a post request to localhost:5000/endpoint2, but while sending the request, make sure that body of the request is JSON format. For example
`{ 
  "coind": 1.5,
  "arrowhead": 3,
  "button": 150
} `
need to be the format of the body.
