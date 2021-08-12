import { Component } from "../core/component"

export class FilterComponent extends Component {
	constructor(id) {
		super(id)
	}
	init() {
		this.$el.addEventListener('submit', filterHandler)
	}
}


export function filterHandler(event) {
	event.preventDefault()
	const month = document.querySelector('#month')
	const year = document.querySelector('#year')
	let zz = {
		month: month.value,
		year: year.value
	}

	return zz

}