const verifyIsNumber = (a, b) => {
    if (!a || !b) {
      throw new Error('Os valores devem ser numéricos');
    } else if (isNaN(a) || isNaN(b)) {
      throw new Error('Os valores devem ser numéricos');
    }       
  };
function sum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  const result = Number(value1) + Number(value2);
  try {
    verifyIsNumber(value1, value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  } catch (error) {
    return document.getElementById('result').innerHTML = error.message;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = ''; 
  }
};
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}