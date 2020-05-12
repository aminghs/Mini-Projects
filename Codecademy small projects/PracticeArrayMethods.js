let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();


secretMessage.push('to', 'Program'); 

secretMessage[7] = 'right' //replace

secretMessage.shift() //remove first 

secretMessage.unshift('Programming') //add first

secretMessage.splice(6, 5, "know,")  //remove elements
console.log(secretMessage.join(' ')) //remove , and space
