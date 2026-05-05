fetch("http://localhost:3000/api/auth/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Jasjot Singh",
    email: "jasjotsingh@gmail.com",
    password: "password123",
    hostelBlock: "Block A"
  })
}).then(res => res.json()).then(console.log).catch(console.error);
