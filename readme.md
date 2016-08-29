#Training: Express Routing Practice

### Deliverable

1. When you wrap up work, edit this README to include your name, a link to the original repository, and a 3-5 sentence reflection on completing this assignment at the top of the document.

1. Push your updates to GitHub, and add a link to your repo to the "My Work" section of your website!

### Root Route

Create a root route that responds by sending the `index.html` file from the `views` directory.

### The Number Guessing Game

1. Build a route that allows a user to guess a number through query parameters (for example, `/pickanumber?number=10`).  The route should check the user's number against some target number variable stored in the server code. When the user navigates to this route in the browser, the server should respond with either "Too High", "Too Low" or "Nailed it!" For example, if the target number is 7, then a request to  `/pickanumber?number=10` should trigger a response of `'Too High'`.  

1. Add the form below to your `index.html`, and use AJAX in `app.js` to submit it to the route you just created.  Bonus: if the request is succesful, display the server's response on the page.
  ```html
  <form id="guess-number-form">
    <input id="guess-num" name="number" placeholder="guess a number" type="text" />
    <input type="submit" />
  </form>
  ```

1. Build another route at `/pick-a-number` that allows a user to submit a form with a new target number for the guessing game.  

1. Add the form structure below to your HTML, and use AJAX in `app.js` to submit it to the route you just created.

  ```html
  <form id="target-number-form">
    <input id="new-num" name="number" placeholder="enter new target number" type="text" />
    <input type="submit" />
  </form>
  ```


### Art Gallery

1. Create an `artworks` array in the server code.  Each artwork will be an object with a `title` key, an `artist` key, and a `description` key.

2. Write a route that returns a list of all of the artworks as JSON.

3. Write a route that allows you to add a new artwork to the list of artworks. The server should respond with the updated list of all artworks, as JSON.

4. Create a new HTML view called `art-gallery.html`. Add a route at `/art-gallery` to display this view. Add a form to this view that collects the information you need to add a new artwork.

5. Create a new client-side JavaScript file called `gallery.js`, link it to your `art-gallery.html`, and write an AJAX call to submit the new artwork form to the correct route with its data.  If the request is successful, log the response to the console in the browser.

<!-- 1. Update the client-side JavaScript so that once an artwork is added successfully on the server, the artwork information is displayed on the page. -->

<!-- 1. Write a route that allows you to change an artwork in the list of artworks. The route should take in the old title and all new information for the artwork. **Hint**: Use the HTML methods `PATCH` or `PUT`. -->
