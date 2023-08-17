var userageinput=document.getElementById("userage");
var ageinput=document.getElementById("age")
var typeinput=document.getElementById("type")
var astricinput=document.getElementById("astric")






function calcage(){
   
    astricinput.innerHTML=""
    ageinput.innerHTML=""
    var date=new Date;
    var age=date.getFullYear()-userageinput.value;
    ageinput.innerHTML=`Your age is:<span>${age}</span>`


    if(age<16){
        typeinput.innerHTML=`you are chid` 
    }
    else{
        typeinput.innerHTML=`you are young` 
    }

    for(var i=0;i<age;i++){
        astricinput.innerHTML+="*"
    }

    userageinput.value=""
}