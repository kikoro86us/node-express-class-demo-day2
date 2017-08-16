# Topics to Cover
This is a list of topics that we'll be covering in today's lecture. Feel free to write notes as needed.

## Review creating a general Express app
- __dirname vs ./ 
  - only really matters with express.static(), doesn't matter with require()
  - ./ will take the root of where nodemon or node <file name> was ran
  - __dirname will take the root of where the file is
- Can't set headers after they are set
  - Trying to res.send() more than once
- Empty req.body
  - Most often because bodyparser isn't being used
- Not including url parameters when specified
  - will break all the things

## req.query
- Syntax
  - /books?title=a+strange+loop
  - for chaining--> &author=something+something
- Can be paired with req.params as well
- Optional whereas params are not

## res.end
- Use when wanting to end a request but not send back data
- Can use with .status()

## res.redirect
- With SPAs, will most often be used with authentication
- Will redirect the user to a different url 
  - Can be an http url or / from your own site

## CORS
- Same origin policy doesn't allow requests from different origins
- CORS - Cross origin resource sharing, allows you share resources from different origins