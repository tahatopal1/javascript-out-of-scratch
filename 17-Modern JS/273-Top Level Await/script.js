// With ES2022, await keywork is working outside the method in modules
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);

// But actually blocks the execution of the entire module now
console.log('Something'); // Logs after execution of the code below

console.log('************');
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost(); // Returns promise
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);

// If another module imports this one, it has to wait for the fetching data
// So is does not only block this module, also blocks the modules that imports this module
