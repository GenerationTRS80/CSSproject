// Get the modal element
var modal = document.getElementById('simpleModal');
//Get open modal button
var modalBtn = document.getElementById('modalBtn');
//Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for a open click
modalBtn.addEventListener('click',openModal);

//Listen for a close click
closeBtn.addEventListener('click',closeModal);

//Listen for outside click
window.addEventListener('click', outsideClick);


//Function to open modal
function openModal(){
    // console.log("123");
    modal.style.display='block';
}

//Function to close modal
function closeModal(){
    // console.log("123");
    modal.style.display='none';
}

//Function to close modal if outside click
function outsideClick(e){
    
    // Note: modal is the darkside around the model box
    if(e.target==modal){
        modal.style.display='none';
    }
    
}