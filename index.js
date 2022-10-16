const express = require('express')
const app = express()
const port = 3000
const ejsLayouts = require('express-ejs-layouts')
const router = express.Router()

// const signs = ['aries', 'capricorn', 'gemini', 'leo', 'libra', 'pisces', 'sigittarius', 'scorpio', 'taurus', 'virgo' ]
// const water_signs = ['pisces', 'aquarius', 'gemini']
// const air_signs = ['']

//MiddleWare
app.set('view engine', 'ejs')
app.use(ejsLayouts)

//Home
app.get("/", (req, res) => {
  res.render('index.ejs')
});
//-------

//-----air
app.get("/air", (req, res) => {
  
  res.render('air.ejs')
});

app.get("/air/gemini", (req, res) => {
  res.render('images.ejs',{URL:"./imgs/gemini.PNG"});
  // res.send(" hello")
});
app.get("/air/libra", (req, res) => {
   
  res.render('images.ejs',{URL:"./imgs/libra.PNG"});
  res.send(" hello")
});
app.get("/air/aquarius", (req, res) => {

res.render('images.ejs',{URL:"./imgs/aquarius.PNG"});
res.send(" hello")
});
//----


//-----water
app.get("/water", (req, res) => {
  res.render('water.ejs')
});
//-------


app.get("/water/cancer", (req, res) => {
  res.render('images.ejs',{URL:"imgs/cancer.PNG"});
  res.send(" hello")  
});
// router.get('/', (req,res) => {
//   res.render('water.ejs', {signsList: water_signs})
// })

app.get("/water/scorpio", (req, res) => {
  res.render('images.ejs',{URL:"imgs/scorpio.PNG"});
  res.send(" hello")    
});

app.get("/water/pisces", (req, res) => {
  
  res.render('images.ejs',{URL:"imgs/pisces.PNG"});
  res.send(" hello")    
});


//---fire
app.get("/fire", (req, res) => {
  res.render('fire.ejs')
});
//-----


app.get("/fire/leo", (req, res) => {
  
  res.render('images.ejs',{URL:"imgs/leo.PNG"});
  res.send(" hello")    
});
app.get("/fire/sagittarius", (req, res) => {
  
  res.render('images.ejs',{URL:"imgs/sagittarius.PNG"});
  res.send(" hello")    
});
app.get("/fire/aries", (req, res) => {
  
  res.render('images.ejs',{URL:"imgs/aries.PNG"});
  res.send(" hello")      
  });


  //-----earth
  app.get("/earth", (req, res) => {
    res.render('earth.ejs')
      });
  //-----



app.get("/earth/taurus", (req, res) => {
   
  res.render('images.ejs',{URL:"imgs/taurus.PNG"});
  res.send(" hello")      
});

app.get("/earth/virgo", (req, res) => {
   
  res.render('images.ejs',{URL:"imgs/virgo.PNG"});
  res.send(" hello")      
});

app.get("/earth/capricorn", (req, res) => {
   
  res.render('images.ejs',{URL:"imgs/capricorn.PNG"});
  res.send(" hello")      
});
  //----


  app.listen(3000, () =>{
    console.log(`I'm listening to port ${port}`)
})

module.exports=router;