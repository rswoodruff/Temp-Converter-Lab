const button = document.getElementById("button");
const celsiusResult = document.getElementById("celsiusResult");

button.addEventListener('click',  () => {
    const fValue = document.getElementById('fValue').value;
    if(fValue == false ) {
        alert('Please provide a number value');
    } else {
    let result = Math.floor((fValue - 32) * 5 / 9) ;
    return celsiusResult.innerHTML = result;
    }
});