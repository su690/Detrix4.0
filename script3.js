document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' && event.target === document.body) {
      window.location.href = 'test.html';
    }
  });

  // Optional: Add a click event to the button as well
  document.getElementById('openTestPage').addEventListener('click', function() {
    window.location.href = 'test.html';
  });