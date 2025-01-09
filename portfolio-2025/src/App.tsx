import styled from "styled-components";
import NavBar from "./components/NavBar";
import Panel from "./components/Panel";

function App() {
	return (
		<AppContainer>
			<NavBar />
			<Panel />
		</AppContainer>
	);
}

const AppContainer = styled.div`
	background-color: #0b0b0b;
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
`;

export default App;
