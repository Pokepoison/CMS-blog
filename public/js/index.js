// // Handle user registration
// const signupForm = document.querySelector('#signup-form');
// signupForm.addEventListener('submit', async (e) => {
//   e.preventDefault();
  
//   const username = document.querySelector('#signup-username').value;
//   const password = document.querySelector('#signup-password').value;

//   try {
//     const response = await fetch('/api/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     if (response.ok) {
//       window.location.replace('/dashboard');
//     } else {
//       const data = await response.json();
//       alert(data.message);
//     }
//   } catch (err) {
//     console.error(err);
//   }
// });

// // Handle user login
// const loginForm = document.querySelector('#login-form');
// loginForm.addEventListener('submit', async (e) => {
//   e.preventDefault();
  
//   const username = document.querySelector('#login-username').value;
//   const password = document.querySelector('#login-password').value;

//   try {
//     const response = await fetch('/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     if (response.ok) {
//       window.location.replace('/dashboard');
//     } else {
//       const data = await response.json();
//       alert(data.message);
//     }
//   } catch (err) {
//     console.error(err);
//   }
// });

// // Display blog posts on the homepage
// const displayPosts = async () => {
//   try {
//     const response = await fetch('/api/posts', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       const posts = await response.json();
//       const postsContainer = document.querySelector('#posts-container');
//       postsContainer.innerHTML = '';

//       posts.forEach((post) => {
//         const postDiv = document.createElement('div');
//         postDiv.innerHTML = `
//           <h3>${post.title}</h3>
//           <p>${post.content}</p>
//           <p>Created by ${post.User.username} on ${new Date(
//             post.createdAt
//           ).toLocaleString()}</p>
//         `;
//         postsContainer.appendChild(postDiv);
//       });
//     } else {
//       console.error('Failed to fetch posts');
//     }
//   } catch (err) {
//     console.error(err);
//   }
// };

// // Call the displayPosts function to initially load posts on the homepage
// displayPosts();
