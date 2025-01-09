import styled from "styled-components";
import NavBar from "./components/NavBar";

function App() {
	return (
		<AppContainer>
			<NavBar />
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
