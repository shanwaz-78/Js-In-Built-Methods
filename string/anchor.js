// The anchor() method creates a string that embeds a string in an <a> element with a name (<a name="...">str</a>).

const str = 'Table of Contents';
document.body.innerHTML = str.anchor("just link");

// Expected output <a name="just link">Table of Contents</a>