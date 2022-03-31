type A<B> = { a: B }

function foo(bar: A<string>) {
	console.log(bar.a)
}
console.log('hi')
