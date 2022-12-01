import React, { useState } from "react";

//create your first component
const TrafficLight = () => {
	const [isRed, setRed] = useState(false);

	const [isYellow, setYellow] = useState(false);
	
	const [isGreen, setGreen] = useState(false);

	return (
		<div className="">
			<div className="top text-center mx-auto"></div>
			<div className="box text-center mx-auto">
				<div>
					<button
						onClick={() => {
							setRed(true);
							setYellow(false);
							setGreen(false);
						}}
						className={`${
							isRed === true ? "red" : ""
						} rounded-circle`}></button>
				</div>
				<div className="">
					<button
						onClick={() => {
							setRed(false);
							setYellow(true);
							setGreen(false);
						}}
						className={`${
							isYellow === true ? "yellow" : ""
						} rounded-circle h-33`}></button>
				</div>
				<div>
					<button
						onClick={() => {
							setRed(false);
							setYellow(false);
							setGreen(true);
						}}
						className={`${
							isGreen === true ? "green" : ""
						} rounded-circle h-33`}></button>
				</div>
			</div>
            <p> Made by <strong>Petrement</strong>, with React!</p>		
		</div>
	);
};

export default TrafficLight;