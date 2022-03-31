// will not compile without typescript
type Example<T> = { a: T }

describe('module', () => {
	it('works', () => {
		const x: Example<string> = { a: 'hi' }
		expect(x.a).toEqual('hi')
	})
})
