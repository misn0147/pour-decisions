async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    const winery_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    var emotionsArray = ['angry','disappointed','meh', 'happy', 'inLove'];
    jQ("#element").emotionsRating({
      emotionSize: 30,
      bgEmotion: 'happy',
      emotions: emotionsArray,
      color: '#FF0066', //the color must be expressed with a css code
          initialRating: 4, //initialize the rating number
      disabled: true, //set if the rating can be changed or not, default is false
      onUpdate: function(value) {} //set value changed event handler
    });
    
    if (comment_text) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          comment_text,
          winery_id,
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
  }
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
  