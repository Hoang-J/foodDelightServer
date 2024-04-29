const form = document.querySelector('form');

form.addEventListener('submit', () => {
    const data = new FormData(form);
    const url = new URLSearchParams(data).toString();
    

    fetch('https://food-delight-server-fa18xhljl-hoang-js-projects.vercel.app/register', {
        method: "POST", 
        body: url,
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        }
    })
})