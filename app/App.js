import React from 'react';
import {render} from 'react-dom';

import KanbanBoard from './KanbanBoard';

let cardsList = [
	{
		id: 1,
		title: "doing the lab",
		description: "why not",
		color: '#BD8D31',
		status: "in-progress",
		tasks: [],
		section: []
	},
	{
		id: 2,
		title: "Write some code",
		description: "coding is nice",
		color: '#3A7E28',
		status: "todo",
		tasks: [ 
		{
				id: 1,
				name: "ContactList Example",
				done: true
			},
			{
				id: 2,
				name: "Kanban Example",
				done: false
			},
			{
				id: 3,
				name: "My own experiments",
				done: false
			},
			{
				id: 4,
				name: "A piece of cake",
				done: false
			},
		]
	},
	{
		id: 3,
		title: "adding an element",
		description: "because I can",
		color: 'purple',
		status: "todo",
		tasks: [
			{
				id: 1,
				name: "Change the colour",
				done: true
			}
		]
	},
	{
		id: 4,
		title: "very difficult task",
		description: "expert level only",
		color: 'orange',
		status: "Nope",
		tasks: []
	},
];

render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));