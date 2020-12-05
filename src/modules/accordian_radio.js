import React, { useState, useEffect, useRef } from 'react'

class Accordian extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
		this.state = {
			checked: 0
		}
	}
	onChange(i){
		this.setState({
			checked:i
		});
	 }
	/* const [site, setStite] = useState('')
	const textInput = useRef(null) */
	render() {
		return (<div>
			<div className="pull-right">
				<input type="radio" name="site_name" value={1}
					checked={this.state.checked === 1} onChange={() => { this.setState({ checked: 1 }) }} /> 1
		<input type="radio" name="site_name" value={2}
					checked={this.state.checked === 2} onChange={() => { this.setState({ checked: 2 }) }} /> 2
			</div>
			<div className="main" ref={this.textInput}>
				<div className="title"></div>
				<Section title="Section Title One" id='1' selected={this.state.checked === 1} >   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
        </Section>
				<Section title="Section Title Two" selected={this.state.checked === 2} >   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
        </Section>
				<Section title="Section Title Three" selected={this.state.checked === 3} >   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
        </Section>
			</div>
			<h1>Pure CSS Accordion <sup>2.0</sup></h1>
			<div class="accordion row">
				<div class="accordion col">
					<h2>Open <b>multiple</b></h2>
					<div class="accordion tabs">
						<div class="tab">
							<input class="accordion" type="checkbox" id="chck1" />
							<label class="tab-label" for="chck1">Item 1</label>
							<div class="tab-content">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
                             </div>
						</div>
						<div class="tab">
							<input type="checkbox" id="chck2" />
							<label class="tab-label" for="chck2">Item 2</label>
							<div class="tab-content">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                             </div>
						</div>
					</div>
				</div>
				<div class="col accordion">
					<h2>Open <b>one</b></h2>
					<div class="tabs">
						<div class="tab">
							<input type="radio" id="rd1" name="rd"
								checked={this.state.checked == 1 ? true : false}
								key={1}
								onChange={this.onChange.bind(this, 1)} />
							<label class="tab-label" for="rd1">Item 1</label>
							<div class="tab-content">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
                            </div>
						</div>
						<div class="tab">
							<input type="radio" id="rd2" name="rd"
								checked={this.state.checked == 2 ? true : false}
								key={1}
								onChange={this.onChange.bind(this, 2)} />
							<label class="tab-label" for="rd2">Item 2</label>
							<div class="tab-content">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
                            </div>
						</div>
						<div class="tab">
							<input type="radio" id="rd3" name="rd"
								checked={this.state.checked == 3 ? true : false}
								key={1}
								onChange={this.onChange.bind(this, 3)} />
							<label for="rd3" class="tab-close">Close others &times;</label>
						</div>
					</div>
				</div>
			</div>
		</div>)
	}
}

class Section extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	state = {
		open: this.props.selected ? true : false,
		class: this.props.selected ? "section open" : "section"
	}


	//const [state, setState] = useState(getInitialState())
	componentDidUpdate(prevProps) {
		console.log(this.state);
		if (this.props.selected !== prevProps.selected) {
			this.setState({
				open: true,
				class: "section open"
			});
		}
	}
	handleClick() {
		if (this.state.open) {
			this.setState({
				open: false,
				class: "section"
			});
		} else {
			this.setState({
				open: true,
				class: "section open"
			});
		}
	}
	getInitialState() {
		return {
			open: this.props.selected ? true : false,
			class: this.props.selected ? "section open" : "section"
		}
	}
	render() {
		console.log(this.state);
		return (
			<div className={this.state.class}>
				<button>toggle</button>
				<div className="sectionhead" onClick={this.handleClick}>{this.props.title}</div>
				<div className="articlewrap">
					<div className="article">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}


export default Accordian