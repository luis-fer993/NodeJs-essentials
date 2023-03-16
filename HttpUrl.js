const url = new URL('https://example.org/foo/bar?baz=qux&q=l#quux');

console.log(url.pathname);
// Prints /foo/bar
console.log(url.search);
// Prints ?baz=qux
console.log(url.hash);
// Prints #quux
console.log(url.href);
// Prints https://example.org/foo/bar?baz=qux#quux
console.log(url.hostname);
// Prints example.org
console.log(url.port);
// Prints 443
console.log(url.protocol);
// Prints https:
console.log(url.searchParams);
let param =url.searchParams
// Prints URLSearchParams { 'baz' => 'qux' }

console.log(param.get('baz')); // 'qux'
