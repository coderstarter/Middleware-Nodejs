app.route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })


app.route('/book')
This line creates a new route for the path /book.
app.route() is a convenient way to handle multiple HTTP methods for the same route. Instead of defining separate routes for each method, you chain them together.

  You can create chainable route handlers for a route path by using app.route(). Because the path is specified at a single location, creating modular routes is helpful, as is reducing redundancy and typos
