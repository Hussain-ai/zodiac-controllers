const express = require('express')
const app = express()
const port = 3000

// const ejs = require('ejs')
app.set('view engine', 'ejs')
app.listen(3000, () =>{
    console.log(`I'm listening to port ${port}`)
})

//MiddleWare
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
     
  res.render('index.ejs')
});
//-------

//-----air
app.get("/air", (req, res) => {
   
  res.render('air.ejs')
});

app.get("/air/gemini", (req, res) => {
   
  res.sendFile('\imgs\gemini.PNG');
});
app.get("/air/libra", (req, res) => {
   
  res.sendFile('\imgs\libra.PNG');

});
app.get("/air/aquarius", (req, res) => {
   
  res.sendFile('\imgs\aquarius.PNG');    
});
  //----

//-----water
app.get("/water", (req, res) => {
   
  res.render('water.ejs')
});

app.get("/water/cancer", (req, res) => {
   
  res.sendFile('\imgs\cancer.PNG');    
});

app.get("/water/scorpio", (req, res) => {
   
  res.sendFile('\imgs\scorpio.PNG');    
});

app.get("/water/pisces", (req, res) => {
   
  res.sendFile('\imgs\pisces.PNG');    
});
//-----

//---fire
app.get("/fire", (req, res) => {
   
  res.render('fire.ejs')
});

app.get("/fire/leo", (req, res) => {
   
  res.sendFile('\imgs\leo.PNG');    
});
app.get("/fire/sagittarius", (req, res) => {
  
  res.sendFile('\imgs\sagittarius.PNG');    
});
app.get("/fire/aries", (req, res) => {

  res.sendFile('\imgs\aries.PNG');    
  });
  //---

  //-----earth
  app.get("/earth", (req, res) => {
   
      res.render('earth.ejs')
      });

app.get("/earth/taurus", (req, res) => {
   
  res.sendFile('\imgs\taurus.PNG');    
});

app.get("/earth/virgo", (req, res) => {
   
  res.sendFile('\imgs\virgo.PNG');    
});

app.get("/earth/capricorn", (req, res) => {
   
  res.sendFile('\imgs\capricorn.PNG');    
});
//----