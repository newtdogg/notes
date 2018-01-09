lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Vel eros donec ac odio tempor orci dapibus ultrices. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Urna et pharetra pharetra massa. Sed nisi lacus sed viverra tellus in hac habitasse. Duis ut diam quam nulla porttitor massa id. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Id faucibus nisl tincidunt eget nullam non nisi est sit. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Sit amet venenatis urna cursus eget. Enim nunc faucibus a pellentesque sit. Eu sem integer vitae justo eget magna fermentum. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla."
console.log(Note)
note = new Note()

describe("Note",[
	it("can add a new note", [
		note.add("Hello"),
		expect(note.content).toEqual("Hello")
	]),

	it("can display the whole note",[
		note.add(lorem),
		expect(note.content).toEqual(lorem)
	]),

	it("can display the first 20 characters",[
		expect(note.summary).toEqual("Lorem ipsum dolor si")
	])
	//,

	// it("only adds elipsis to notes over 20 characters", [
	// 	note.add("Hello"),
	// 	dont(expect(note.summary).toEqual("Hello..."))
	// ])
])
