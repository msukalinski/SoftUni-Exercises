function solve() {
  const text = document.getElementById('text').value;
  const secondPartElement = document.getElementById('naming-convention').value;
  const res = document.getElementById('result');

  const words = text.split(' ');

  if (secondPartElement === 'Camel Case') {
    res.textContent = words
      .map((word, index) => (index === 0 ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()))
      .join('');
  } else if (secondPartElement === 'Pascal Case') {
    res.textContent = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  } else {
    res.textContent = 'Error!';
  }
}

function solve() {
  const inputElement = document.getElementById('text');
  const conventionElement = document.getElementById('naming-convention');
  const resultElement = document.getElementById('result');

  function capitalize(word) {
    const result = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return result
  };

  const words = inputElement.value.split(' ');

  if (conventionElement.value === 'Camel Case') {
    resultElement.textContent = words.map((word, index) => index === 0 ? word.toLowerCase() : capitalize(word)).join('');
  } else if (conventionElement.value === 'Pascal Case') {
    resultElement.textContent = words.map(word => capitalize(word)).join('');
  } else {
    resultElement.textContent = 'Error!'
  };
}