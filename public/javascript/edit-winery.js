async function editWineryFormHandler(event) {
    event.preventDefault();

const name = document.querySelector('input[name="winery-name"]').value;
const location = document.querySelector('input[name="winery-location"]').value;
const website = document.querySelector('input[name="winery-website"]').value;
const phone = document.querySelector('input[name="winery-phone"]').value;
const image = document.querySelector('input[name="winery-image"]').value;
const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/winery/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
        name,
        location,
        website,
        phone,
        image
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-winery-form').addEventListener('submit', editWineryFormHandler);