const button = document.getElementById("button");
const celsiusResult = document.getElementById("celsiusResult");

button.addEventListener('click',  () => {
    const fValue = document.getElementById('fValue').value;
    let answer = (fValue - 32) * 5 / 9 ;
    return celsiusResult.innerHTML = answer ;
});