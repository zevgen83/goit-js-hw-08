import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
let valueFromStorage = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
console.log('valueFromStorage:', valueFromStorage);


const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

onSaveData();

refs.form.addEventListener('input', throttle(onTextForm, 500));
refs.form.addEventListener("submit", handleSubmit);

function onTextForm(evt) { 
    const nameInput = evt.target.name;
    const textInput = evt.target.value;
    valueFromStorage[nameInput] = textInput;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(valueFromStorage));
}

function handleSubmit(evt) {  
  if (!valueFromStorage.email && !valueFromStorage.message) {
    return alert("All fields must be filled!!!!");
  }
  evt.preventDefault();
  console.log(valueFromStorage);
  valueFromStorage = {};
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);     
}
      

function onSaveData() {
  if (valueFromStorage) {
    refs.email.value = valueFromStorage.email || '';
    refs.message.value = valueFromStorage.message || '';
  }
} 