notebook = new Notebook

function noteDouble(){};
noteDouble.add = function(){};
noteDouble.summary = "Lorem ipsum dolor si..."
noteDouble.content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Vel eros donec ac odio tempor orci dapibus ultrices. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Urna et pharetra pharetra massa. Sed nisi lacus sed viverra tellus in hac habitasse. Duis ut diam quam nulla porttitor massa id. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Id faucibus nisl tincidunt eget nullam non nisi est sit. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Sit amet venenatis urna cursus eget. Enim nunc faucibus a pellentesque sit. Eu sem integer vitae justo eget magna fermentum. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla."

note = noteDouble
console.log(note)
describe("Notebook", [
	it("Can store notes", [
		notebook.add(note),
		expect(notebook.notes).toContain(note)
		]),
	it("Can return all the note summaries", [
		]),
	it("Can return a whole note", [
		])
	])