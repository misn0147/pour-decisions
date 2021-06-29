async function deleteWineryFormHandler(event) {
    event.preventDefault();

const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/wineries/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.delete-winery-btn').addEventListener('click', deleteWineryFormHandler);