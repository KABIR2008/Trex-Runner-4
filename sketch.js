var marks = [35,38,42,45,43,34,46,41,48,32];
var result

function setup() 
{
  createCanvas(400,400);
  result = search(marks,35)
  if(result==-1){
    console.log ("notfound")
  }
  else{
    console.log ("found")
  }
}

function draw() 
{
  background(30);
}

function search(arr,x)
{
  for (var i = 0; i <arr.length; i++ ){
    if(arr[i]==x){
      return i
    }
  }
  return -1
}
 

