import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { Note } from "./../note";

@Component({
	selector: 'app-notes-edit',
	templateUrl: './notes-edit.component.html',
	styleUrls: ['./notes-edit.component.css']
})
export class NotesEditComponent implements OnInit {

	@Input() thisNote: Note;
	@Output() save = new EventEmitter;
	editedNote: Note;

	constructor() { }

	ngOnInit() {
	}

	ngOnChanges() {
		this.editedNote = {id: this.thisNote.id, note: this.thisNote.note, created_at: this.thisNote.created_at, updated_at: new Date()};
	}

	saveNote(){
		this.save.emit(this.editedNote);
	}

}
