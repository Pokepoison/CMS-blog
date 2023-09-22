async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
      try {
        const response = await fetch('/api/users/signup', {
          method: 'post',
          body: JSON.stringify({
            username,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        });
  
        // check the response status
        if (response.ok) {
          console.log('success');
          document.location.replace('/dashboard');
        } else {
          alert(response.statusText);
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }
  }
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
  