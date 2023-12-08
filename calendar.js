b=0;
y=new Date();
currentdate=y.getDate();
currentmonth=y.getMonth();
currentyear=y.getFullYear();
mname=document.getElementsByClassName("mname");
yeardigit=document.getElementById("yeardigit");
coloumn=document.getElementsByClassName("coloumn");
d29=document.getElementById("d29");
d30=document.getElementById("d30");
d31=document.getElementById("d31");
date=document.getElementsByClassName("date");
funccurrent()
function funcslide(a){
    b=b+a;
    c=b%12;
    g=b/12;
    if(c<0){
        h=12+c;
    }
    else{
        h=c;
    }
    j=funcyear();
    funcmonth();
    funcshuffling(a);
    funcdates();
    funcchoosingdate();
}
function funcmonth(){
    if(c<0){
        d=(2400+(c*200)).toString();
    }
    else{
        d=(c*200).toString();
    }
    for(i=0;i<mname.length;i++){
        mname[i].style.transform="translateX(-"+d+"px)";
    }
}
function funcyear(){
    f=Math.floor(g);
    p=2024+f;
    yeardigit.innerHTML=p;
    return p;
}
function funcshuffling(k){
    n=1;
    for(i=0;i<7;i++){
        if(date[i].innerHTML=="1"){
            l=i;
        }
    }
    if(k<0){
        if(h==0|h==2|h==4|h==6|h==7|h==9|h==11){
            m=l-3;
        }
        else if(h==1){
            if(j%100==0){
                if(j%400==0){
                    m=l-1;
                }
                else{
                    m=l;
                }
            }
            else{
                if(j%4==0){
                    m=l-1;
                }
                else{
                    m=l;
                }
            }
        }
        else{
            m=l-2;
        }
    }
    else{
        if(h==0|h==1|h==3|h==5|h==7|h==8|h==10){
            m=l+3;
        }
        else if(h==2){
            if(j%100==0){
                if(j%400==0){
                    m=l+1;
                }
                else{
                    m=l;
                }
            }
            else{
                if(j%4==0){
                    m=l+1;
                }
                else{
                    m=l;
                }
            }
        }
        else{
            m=l+2;
        }
    }
    if(m<0){
        o=7+(m%7);
    }
    else{
        o=m%7;
    }
    for(i=0;i<42;i++){
        date[i].innerHTML="";
    }
    for(i=o;i<o+31;i++){
        date[i].innerHTML=n;
        n++;
    }
}
function funcdates(){
    if(h==3||h==5||h==8||h==10){
        for(i=0;i<42;i++){
            if(date[i].innerHTML=="31"){
                date[i].innerHTML="";
            }
        }
    }
    else if(h==1){
        for(i=0;i<42;i++){
            if(date[i].innerHTML=="31"){
                date[i].innerHTML="";
            }
            if(date[i].innerHTML=="30"){
                date[i].innerHTML="";
            }
        }
        if((j%100!=0 & j%4!=0)|(j%100==0 & j%400!=0)){
            for(i=0;i<42;i++){
                if(date[i].innerHTML=="29"){
                    date[i].innerHTML="";
                }
            }
        }  
    }
    else{   
    }
}
function funcslidey(r){
    s=0
    if(r<0){
        for(t=0;t<12;t++){
            funcslide(-1);
        }
    }
    else{
        for(t=0;t<12;t++){
            funcslide(1);
        }
    }
}
function funccurrent(){
    if(currentyear<2024){
        v=2024-currentyear;
        w=(v*12)-currentmonth;
        for(x=0;x<w;x++){
            funcslide(-1);
        }
    }
    else{
        v=currentyear-2024;
        w=(v*12)+currentmonth ;
        for(x=0;x<w;x++){
            funcslide(1);
        }
    }   
}
function funcchoosingdate(){
    if(h==currentmonth){
        if(j==currentyear){
            for(z=0;z<42;z++){
                if(date[z].innerHTML==currentdate){
                    date[z].style.borderRadius="50%";
                    date[z].style.border="2px solid black";
                    date[z].style.backgroundColor="rgb(188, 143, 230)";
                }
            }    
        }
    }
    else{
        for(z=0;z<42;z++){
            date[z].style.borderRadius="0";
            date[z].style.border="none";
            date[z].style.backgroundColor="transparent";
        }
    }
}
// % gives negative value for negative inputs.
// math.floor() gives greatest integer value