module.exports = {
  output : function(req, res, data){
    console.log("@@@@start: "+ data.count);
    res.render('test', data);
  }

};
