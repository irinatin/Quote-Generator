document.addEventListener('DOMContentLoaded', () => {  

    const randomButton = document.getElementById('randomButton');
   
    const messageBox = document.getElementById('message');

    randomButton.addEventListener('click', (event) => {
        const kanye = 'https://api.kanye.rest/?format=text';
        
        
        fetch(kanye)
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            const kanyeResponse = data;
           

            messageBox.innerText = kanyeResponse;
        })
        .catch((err) => {
            console.error(err);
        });
    });

   
    

});