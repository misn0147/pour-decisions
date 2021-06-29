async function editWineryFormHandler(event) {
    event.preventDefault();

const name = document.querySelector('input[name="winery-name"]').value.trim();
const location = document.querySelector('input[name="winery-location"]').value.trim();
const website = document.querySelector('input[name="winery-website"]').value.trim();
const phone = document.querySelector('input[name="winery-phone"]').value.trim();
const image = document.querySelector('input[name="winery-image"]').value.trim();
const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  console.log(name);
  console.log(phone);
  const response = await fetch(`/api/wineries/${id}`, {
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