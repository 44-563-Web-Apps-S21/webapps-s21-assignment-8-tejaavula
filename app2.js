const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
       
      res.write('<table>')
      res.write('<tr>')
      res.write('<th>Location</th>')
      res.write('<th>Timings</th>')
      res.write('<th>Price(Rupees)</th>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Paradise</td>')
      res.write('<td>11AM-11PM</td>')
      res.write('<td>2000</td>')
      res.write('</tr>')
      res.write('<tr>')
      res.write("<td>Chicha's</td>")
      res.write('<td>10AM-9PM</td>')
      res.write('<td>1500</td>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Shadab</td>')
      res.write('<td>9AM-12PM</td>')
      res.write('<td>1000</td>')
      res.write('</tr>')
      res.write('<tr>')
      res.write("<td>Tulip''s</td>")
      res.write('<td>12Am-9PM</td>')
      res.write('<td>700</td>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Sathya</td>')
      res.write('<td>9AM-9PM</td>')
      res.write('<td>500</td>')
      res.write('</tr>')
      res.write('</table>')
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})