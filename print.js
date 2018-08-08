function App(){
    this.zkString = null;
    this.cb = null;
}

App.prototype.print = function(a){
    var self = this;
    this.cb = a; 
    console.log("callback is here");
    self.zkString = 'lawrence';
    self.cb(self);
}

App.prototype.getZkString = function() {
    return this.zkString;
};

module.exports = new App;
