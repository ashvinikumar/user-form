import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	title = 'app';

	register(argument) {
		var formObjects = []
		if ( "users" in localStorage)
			formObjects = JSON.parse(localStorage['users'])['root']
		else
			formObjects = []

		var formObject = 
		{
			name: (<HTMLInputElement>document.getElementById('name')).value,
			username: (<HTMLInputElement>document.getElementById('username')).value,
			age: (<HTMLInputElement>document.getElementById('age')).value,
			location: (<HTMLInputElement>document.getElementById('location')).value,
			interests: (((<HTMLInputElement>document.getElementById('interests')).value).split(" ")).join(", ")
		}

		// alert(formObject)

		formObjects.push(formObject)
		localStorage['users'] = JSON.stringify({root: formObjects})	

	}


	constructor() {
		// console.log(this.title);
	}

	ngOnInit() {
	}

}
