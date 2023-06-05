
const handleEdit = (elementId) => {
  const el = document.getElementById(elementId)
  const userName = document.getElementById("userName")
  const phoneNumber = document.getElementById("phoneNumber")
  const email = document.getElementById("email")

  userName.value = el.children[1].value
  phoneNumber.value = el.children[2].value
  email.value = el.children[3].value

  let userId = elementId.split('-')[2]
  document.getElementById("buttonEdit").onclick = () => { handleSubmitEdit(userId) }
};
  

const handleInsertUser = (event) => {
  event.preventDefault();
  const userData ={
    userName: document.getElementById("userName").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    email: document.getElementById("email").value
  };
  console.log(userData);

  axios.post('http://localhost:5000/user', userData)
    .then(() => {
      location.reload();
    })
    .catch(err => {
      console.log(err);
    })
};


const handleSubmitEdit = (userId) => {
  const userData ={
    userName: document.getElementById("userName").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    email: document.getElementById("email").value
  };

  axios.put(`http://localhost:5000/user/${userId}`, userData)
  .then(() => {
    location.reload();
  })
  .catch(err => {
    console.log(err);
  })
};


const handleDelete = (userId) => {
  alert('Are you sure?')

  axios.delete(`http://localhost:5000/user/${userId}`)
  .then(() => {
    location.reload();
  })
  .catch(err => {
    console.log(err);
  })
};