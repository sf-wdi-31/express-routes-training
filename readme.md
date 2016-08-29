#Training: Express Routing Practice

### Deliverable

1. When you wrap up work, edit this README to include your name, a link to the original repository, and a 3-5 sentence reflection on completing this assignment at the top of the document. 

1. Push your updates to GitHub and add a link to the repo to the "My Work" section of your website!

### Pick A Color
Create a route that responds with "You picked: blue" or "You picked: green" depending on the path. For instance, if I visit `localhost:3000/pick-a-color/orange`, I should see the name of the color I chose (orange) as the response.

### Which Taco?

Hardcode some data in your main server file. This will stand in for database data until we learn how to connect a database.

``` javascript
var tacos = [
                "Soft Taco",
                "Crunchy Taco",
                "Super Taco"
            ];
```

* Write a route that will allow you to access a single taco by its index in the array. For example, navigating to `localhost:3000/tacos/2` would trigger a server response with the text "Super Taco".

### The Number Guessing Game

1. Build a route that allows a user to guess a number through query parameters (for example, `/pickanumber?number=10`).  The route should check the user's number against some target number variable stored in the server code. When the user navigates to this route in the browser, the server should respond with either "Too High", "Too Low" or "Nailed it!" For example, if the target number is 7, then a request to  `/pickanumber?number=10` should trigger a response of `'Too High'`.



1. Build another route at `/pick-a-number` that allows a user to post a new target number for the guessing game.  **Hint:** this should assume the new number comes through from a form on the front end where one field is named `newNumber`.


### Query Parameter Calculator App

1. Create a `/multiply` route that uses query params `x` and `y` to multiple two numbers and send the result back: `"10 is the result"`.

2.  Create an `/add` route, similar to above.



### Building Cities

1. Create a `cities` array in the server code.

2. Write a route that returns all of the cities as JSON.

3. Write a route that allows you to add a new city to the list of cities. Assume the following structure for the client-side city form:

```html
<body>
  <form>
    <input id="cityName" name="name" type="text" />
    <input id="cityDesc" name="description" type="text" />
    <input type="submit" />
  </form>
</body>
```

###Deliverables
