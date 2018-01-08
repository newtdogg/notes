console.log(Note)
note = new Note()

describe("Note",[
	it("can add a new note", [
		note.add("Hello"),
		expect(note.content).toEqual("Hello")
	])
])