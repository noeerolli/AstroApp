
const searchP = document.getElementById('searchP'),
element_title = document.getElementById("searchGalleryTitle"),
search_img= document.getElementById('search_img');
const myform = document.getElementById("myForm").addEventListener('submit', validar);



async function search(element) { 


    try {
      const promesa = await fetch(`https://images-api.nasa.gov/search?q=${element}`); 
      const elemento = await promesa.json();         
       

      let url = elemento.collection.items[0].links[0].href;
       
      search_img.style.display = "block";
      search_img.src = url;
     

      title = elemento.collection.items[0].data[0].title;
      description = elemento.collection.items[0].data[0].description;
        
      searchP.style.display ="none";
      
        
    }
    catch (err) { 

      console.log('Hubo un error:', err);
      search_img.style.display = "none";
      searchP.style.display ="block";
      searchP.innerText = 'No hubo resultados, probá con otra palabra';
      
    } 

   
}



async function validar(e){
  e.preventDefault()
  let input_s = document.getElementById("search_inp").value;
  await search(input_s);
  
}

function showTitle(){

    element_title.innerText = title;
    
    
    element_title.style.display = "block";
    
}

function hideTitle(){

  element_title.style.display = "none";
 

}



 




