function TTB(){
    var text=document.getElementById("ti").value;
    let opo='';
    for( var i=0;i<text.length;i++){  
        //convErting each character into binary code from its ASCII number   
           var bin=text.charCodeAt(i).toString(2);
           //to pad the binary digits 
    bin=bin.padStart(8,'0');
    opo += bin + ' ';
}
document.getElementById('op').textContent = opo.trim();
}
