 1.
function Check(obj1){
    obj1.setter=function(){
       console.log(this.name);
     }
}

2.
function Check(obj1) {
    delete obj1.rollno;
     return obj1;
 }
 
 5.
 
function Check(obj1,obj2) {
    let sum=Object.assign(obj1,obj2);
    return sum;
}
 
6.
function Check(a,obj1) {
    obj1.id=obj1.id*a;
        obj1.houseno=obj1.houseno*a;
        return obj1;
}

7.
function Check(obj1) {
    let sum=obj1.p1+obj1.p2+obj1.p3;
    return sum;
}

8.
function check(obj1,a,b) {
    if((obj1.name ==a)&&(obj1.id ==b)){
      return ("true");
    }
    else {
      return ("false");
    }
}





    
    