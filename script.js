async function gerarHash(input) {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);

  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

document.getElementById('hashForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  const inputString = document.getElementById('inputString').value;
  const hash = await gerarHash(inputString);
  document.getElementById('hashResult').textContent = `Hash: ${hash}`;
});
