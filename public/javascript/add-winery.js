console.log('add winery.js')
async function newWineryFormHandler(event) {
  console.log('=======submitted=======')
    event.preventDefault();

const name = document.querySelector('input[name="winery-name"]').value;
const location = document.querySelector('input[name="winery-location"]').value;
const website = document.querySelector('input[name="winery-website"]').value;
const phone = document.querySelector('input[name="winery-phone"]').value;
const facebook = document.querySelector('input[name="winery-facebook"]').value;
const image = document.querySelector('input[name="winery-image"]').value;
const user_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/wineries`, {
    method: 'POST',
    body: JSON.stringify({
      name,
      location,
      website,
      phone,
      image,
      facebook,
      user_id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

    if (response.ok) {   
    document.location.reload();
    } else {
        alert(response.statusText);
    }
    }
  
document.querySelector('.new-winery-form').addEventListener('submit', newWineryFormHandler);