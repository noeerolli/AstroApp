const image = document.getElementById("image");
pic_img = document.getElementById("pic-img"),
button1 = document.getElementById("button1"),
button2 = document.getElementById("button2"),
button3 = document.getElementById("button3"),
title = document.getElementById("title"),
buttons = document.getElementsByTagName("button"),
video = document.getElementById("video"),
picture_name =document.getElementById("picture_name"),
h1 = document.getElementsByTagName("h1")




console.log(buttons)



document.body.onload = async function astroPic() { 

    try {
        const nasa = await fetch(`https://api.nasa.gov/planetary/apod?api_key=YNDbFsNliQuiwO1AqCqZLachaxzB0gtXIYfNuxS8`) 
        const apod = await nasa.json();
        console.log(apod);

        const date = document.getElementById("selectedDate");
        date.setAttribute('max', apod.date);
         
        
        if(apod.media_type == "video"){
            console.log("aqui va un video")
            const video = document.getElementById("video");
            video.src= apod.url;
            video.width = 400;
            image.alt = apod.title;
            image.style.display = "none";
           
            
        } else{

            image.src = apod.url;
            image.alt = apod.title;
            video.style.display = "none";
           
        }

        

        let click2 = 1; 
        
        button2.addEventListener("click", function(){  

        let explanation = document.getElementById("explanation")  
                                           
         
        if (click2 === 1){
        
            explanation.innerText = apod.explanation;
            explanation.style.display = "block";
            button3.style.display ="none"; 
            button2.innerText = 'Volver'

            click2 = 2;
           
        }else{
           
            explanation.style.display = "none";
            button3.style.display ="block";
            button2.innerText = 'Descripción'
            click2 = 1;
            
        }

    
        }
        )


        let click3 = 1; 
       
        button3.addEventListener("click", function(){ 
                
        if (click3 === 1){
            
            
            picture_name.style.display ="block";
            picture_date.style.display ="block";
            button2.style.display ="none"; 
            picture_name.innerText = `Titulo: ${apod.title}`
            picture_date.innerText = `Fecha: ${apod.date}`
            button3.innerText = 'Volver'

            click3 = 2;
            
        }else{
            
            picture_name.style.display ="none";
            picture_date.style.display ="none";
            button2.style.display ="block";
            button3.innerText = 'Nombre y fecha'
           
            click3 = 1;
            
        }
}) 
        

    }
    catch (err) { console.log('Hubo un error:', err) } 
}


      



        //botón tema
        let click = 1; 
        
        button1.addEventListener("click", function(){ 
                 
        if (click === 1){
            
            document.body.style.backgroundImage = "url(fondo-espacio-estrellas-ilustracion-vectorial_97886-319.jpg)";
            document.body.style.fontFamily = 'Combo';
           
           
            click = 2;
            
        }else{
            document.body.style.backgroundColor = 'black';
            document.body.style.fontFamily = 'Roboto';
            document.body.style.backgroundImage = "none";
            
            
            click = 1;
           
        }
    }) 





   





 

                                               
    


