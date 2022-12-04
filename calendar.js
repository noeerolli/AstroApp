

const modalContainer = document.getElementById("modalContainer");
const apiKey = 'YNDbFsNliQuiwO1AqCqZLachaxzB0gtXIYfNuxS8';




async function searchDate(selectedDate) { 

    

    try {
        
        const selectedDate = document.getElementById("selectedDate").value;

        
        const nasa = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${selectedDate}`)
        const picDate = await nasa.json();
        
        
        const modalP = document.getElementById("modalP"),
        modalPic = document.getElementById("modalPic"),
        modalVideo = document.getElementById("modalVideo");

        

        if(picDate.media_type == "video"){
            console.log(" date aqui va un video")
            
            modalContainer.style.display = "block";
            modalVideo.src= picDate.url;
            modalVideo.width = 400;
            modalVideo.alt = picDate.title;
            
            
            modalPic.style.display = "none";
            modalVideo.style.display = "block";
            
            modalP.innerText = picDate.title;

           
            
        } else{

            modalContainer.style.display = "block";
            
            modalPic.src = picDate.url;
            modalPic.alt = picDate.title;
           
            modalVideo.style.display = "none";
            modalPic.style.display = "block";
            
            modalP.innerText = picDate.title;
           
        }

        

       
        
    }
    catch(err){
        console.log('hubo un error con la fecha')
    }

    
}


const btn = document.getElementById("closeModal");
btn.addEventListener("click", close);

function close() {
    modalContainer.style.display = "none";
}










       


