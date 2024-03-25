const mongoose = require('mongoose');

const url = 'mongodb+srv://mongodbx:ZtuOFIp8wwL66inD@cluster0.q64w53r.mongodb.net/';


const personSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	age: Number,
	bio: String,
	single: String
});

const Person = mongoose.model('Person',personSchema);

mongoose.connect(url)
.then(async()=>{
	console.log('Database Connected');
	const person = new Person({
		firstName: 'james',
		lastName: 'Cameron'
	});
	await person.save();
	console.log(person,'Person Data Created')
})
.catch((e)=>{
	console.log(e)
})
.finally(async()=>{
	mongoose.connection.close();
});