import styled from "styled-components";

function Panel() {
	return (
		<PanelContainer>
			<Blurer />
			<RadialGradient />
			<RadialGradient />
			<RadialGradient />
		</PanelContainer>
	);
}

const PanelContainer = styled.div`
	--height-margin: 14px;
	--width-margin: 18px;
	@media (max-width: 600px) {
		--height-margin: 11px;
		--width-margin: 12px;
	}

	margin: var(--height-margin) var(--width-margin) var(--height-margin)
		var(--width-margin);
	border-radius: 10px;
	height: calc(100% - 2 * var(--height-margin));
	width: calc(100% - 2 * var(--width-margin));
	overflow: hidden;
`;

const RadialGradient = styled.div`
	width: 10vw;
	height: 70vh;
	border-radius: 100px;
	background-color: purple;
	margin-left: 100px;
	margin-top: 110px;
	animation-name: anim;
	animation-duration: 4s;
	animation-iteration-count: infinite;

	@keyframes anim {
		0% {
			margin-left: -10vw;
		}
		100% {
			margin-left: 105vw;
		}
	}
`;

const Blurer = styled.div`
	border-radius: 10px;
	height: calc(100% - 2 * var(--height-margin));
	width: calc(100% - 2 * var(--width-margin));
	backdrop-filter: blur(80px);
	position: absolute;
`;
export default Panel;
