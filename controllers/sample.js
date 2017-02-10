var data=[{item:'java'},{item:'html'},{item:'oracle'},{item:'java script'}];

module.exports=function(app){

  app.get('/demo',function(req,resp){

resp.render('demo',{data:data});

  });
  app.post('/demo',function(req,resp){

  });
  app.delete('/demo',function(req,resp){

  });
}
