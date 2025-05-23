const weakPassword = (len) => {
  let result = '';
  for (let i = 0; i < len; i++) {
    result += String(i % 10);
  }

  return result;
};

const mediumPassword = (len) => {
  let result = '';
  for (let i = 0; i < len; i++) {
    const digit = Math.floor(Math.random() * 10);
    result += String(digit);
  }

  return result;
};

const strongPassword = (len) => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789_-/?';
  let result = '';
  for (let i = 0; i < len; i++) {
    const charIndex = Math.floor(Math.random() * chars.length);
    result += chars[charIndex];
  }

  return result;
};

const createAccount = (user, generatePassword) => {
  const password = generatePassword(9);
  return `Uživatel ${user} s heslem ${password}.`;
}

document.body.innerHTML += `<p>${createAccount('Míša', weakPassword)}</p>`;

// document.body.innerHTML += `
// 	<p>${createAccount('Míša', weakPassword)}</p>
// 	<p>${createAccount('Řízek', mediumPassword)}</p>
// 	<p>${createAccount('Mápodčepicí', strongPassword)}</p>
// `;