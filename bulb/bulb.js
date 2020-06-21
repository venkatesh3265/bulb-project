
image = document.querySelector('.onbutton');
image2 = document.querySelector('.offbutton');

document.querySelector('.onbutton').addEventListener('click',on);

function on(e){
    
    document.getElementById("para1").innerHTML="The bulb is Turn ON";

    document.getElementById('onpicture').src = 'on.png';
        
    };
    
image2.addEventListener('click',off);
function off(f){
    document.getElementById("para1").innerHTML="The bulb is Turn off";
    document.getElementById('onpicture').src = 'off.png';
    
}
    
    





