const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`Type some content that you want to not let anyone copy. AKA: Copyright content! Write Some Content: `, (inputValue) => {
  const response = genertateContentThatOneCannotCopy(inputValue);
  console.log(response);
  readline.close()
});

function genertateContentThatOneCannotCopy(content) {
	// const content = "Hi! You cannot copy me!";
	const letters = content.split('');
	let objOfLetters = letters.map((text, i) => ({order: i, text}));
	let HTMLContent = "<div style='display: flex'>";

	for(let i = 0; i < letters.length; i++) {
		const currentValue = objOfLetters[Math.floor(Math.random() * objOfLetters.length)]
		objOfLetters = objOfLetters.filter(r => r !== currentValue);

		const {order, text} = currentValue;
		HTMLContent = `${HTMLContent}<span style="order: ${order}">${text === ' ' ? '&nbsp;' : text}</span>`;
	}
	HTMLContent = `${HTMLContent}</div>`;

	return HTMLContent;
}