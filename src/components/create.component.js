import { Component } from "../core/component"
import { Form } from "../core/form"
import { Validators } from "../core/validators"
import { apiService } from "../serveces/api.serves"

export class CreateComponent extends Component {
	constructor(id) {
		super(id)
	}
	init() {
		this.$el.addEventListener('submit', submitHandler.bind(this))
		this.form = new Form(this.$el, {
			money: [Validators.required]
		})
	}
}

async function submitHandler(event) {
	event.preventDefault()
	if (this.form.isValid()) {
		const formData = {
			type: this.$el.type.value,
			date: new Date().toLocaleDateString(),
			...this.form.value()
		}
		await apiService.createPost(formData)


		this.form.clear()
		alert('Данные добалены')
	}
}