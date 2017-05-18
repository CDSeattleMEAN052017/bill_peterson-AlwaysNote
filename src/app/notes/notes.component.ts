import { Component, OnInit } from '@angular/core';

import { Note } from "./note";

@Component({
	selector: 'app-notes',
	templateUrl: './notes.component.html',
	styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

	notes: Note[] = [
		{id: 1, note: "This is a note", created_at: new Date(), updated_at: new Date()},
		{id: 2, note: "And another note", created_at: new Date(), updated_at: new Date()},
		{id: 3, note: "Some more note!", created_at: new Date(), updated_at: new Date()}
	];

	noteId: number = 4;

	newNote: Note = new Note;

	selectedNote: Note;

	constructor() { }

	ngOnInit() {
	}

	createNote(): void{
		this.notes.push({id:this.noteId++, note:this.newNote.note, created_at: new Date(), updated_at: new Date()});
		this.newNote = new Note;
	}

	editNote (note: Note): void {
		if(this.selectedNote != note){
			this.selectedNote = note;
		} else {
			this.selectedNote = undefined;
		}
	}

	updateNote(updatedNote: Note): void{
		for(let key in updatedNote){
			this.selectedNote[key] = updatedNote[key]
		}
		this.selectedNote = undefined
	}

	deleteNote(index: number){
		this.notes.splice(index, 1);
	}

}
