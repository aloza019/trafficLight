import React from "react";
//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedlight: null
		};
	}
	render() {
		console.log(this.state);
		let redExtraClass = "";
		if (this.state.clickedlight == "red") redExtraClass = "selected";
		let yellowExtraClass = "";
		if (this.state.clickedlight == "yellow") yellowExtraClass = "selected";
		let greenExtraClass = "";
		if (this.state.clickedlight == "green") greenExtraClass = "selected";

		return (
			<div>
				<div id="trafficTop" />
				<div id="container">
					<div
						className={"red light " + redExtraClass}
						onClick={() => this.setState({ clickedlight: "red" })}
					/>

					<div
						className={"yellow light " + yellowExtraClass}
						onClick={() =>
							this.setState({ clickedlight: "yellow" })
						}
					/>

					<div
						className={"green light " + greenExtraClass}
						onClick={() => this.setState({ clickedlight: "green" })}
					/>
				</div>
			</div>
		);
	}
}
