const express = require('express')
const app = express()
app.use(express.static('public'))
//view engine setup
app.set('view engine', 'ejs');



//
app.get('/', function(req, res) {
    res.render('pages/index');
})

app.get('/details', function(req, res) {
        var booksDp= [
          { id: "1", name: "The Physics Book: Big Ideas Simply Explained",category:"Physics" , URL:"/home/oem/Desktop/Books_store/public/images/pic3.jpg" , price:"15JD"},
        ];
        var tagline = "No programming concept is complete without a cute animal mascot.";
      
        res.render('pages/details', {
            booksDp: booksDp,
          tagline: tagline
        });
      });
app.listen(3000,()=>{ 
    console.log("Server listening on port: 3000");
});
