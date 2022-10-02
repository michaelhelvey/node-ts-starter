export * from './lib.js'

type Message<T> = { content: T }

export function foo(bar: Message<string>) {
	console.log(bar.content)
}
