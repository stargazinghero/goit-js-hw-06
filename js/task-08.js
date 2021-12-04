const refs = {
  form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const formElements = e.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  const formData = {
    email,
    password,
  };

  if (email === '' || password === '') {
    alert('Все поля должны быть заполнены!!!');
  } else {
    console.log(formData);
    e.currentTarget.reset();
  }
}
