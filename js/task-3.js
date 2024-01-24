const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');
nameInput.addEventListener('input', onInputChange);

function onInputChange() {
    const changedValue = nameInput.value.trim();
    nameOutput.textContent = changedValue || 'Anonymous';
};