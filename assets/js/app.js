

// function search(text,letter){
//      var ntext=""
//      for(var i=0;i < text.length;i++){
//          if(text[i]==letter){

//          }else{
//              ntext+=text[i]
             
//          }
        
//      }
//      console.log(ntext);
//  }
//  search("elnur","u")

function rev(text){
var ntext=""
for(var i=text.length-1; i>=0; i--){
    ntext+=text[i]
}
console.log(ntext);
}
rev("aslan")

