import styled from "styled-components";

function NavBar() {
	return (
		<NavBarContainer>
			<Name>Owen Peries</Name>
			<MenuOptions>
				<MenuLink>Works</MenuLink>
				<MenuLink>Resume</MenuLink>
			</MenuOptions>
		</NavBarContainer>
	);
}

const NavBarContainer = styled.div`
	position: fixed;
	display: flex;
	flex-direction: row;
	width: 100%;
	margin-top: 27px;
	justify-content: space-between;

	color: white;
	font-family: Inter, serif;
	font-size: 24px;
	font-weight: 500;
	letter-spacing: 0.1em;

	@media (max-width: 600px) {
		//20 25
		font-size: 16px;
	}
`;

const MenuOptions = styled.div`
	display: flex;

	div {
		margin-right: 32px;
	}

	:last-child {
		margin-right: 48px;
	}
	@media (max-width: 600px) {
		div {
			margin-right: 20px;
		}
		:last-child {
			margin-right: 25px;
		}
	}
`;

const MenuLink = styled.div`
	margin: 0;
	margin-right: 45px;
	&:hover {
		cursor: pointer;
	}
`;

const Name = styled(MenuLink)`
	margin-left: 48px;
	@media (max-width: 600px) {
		margin-left: 30px;
	}
`;

export default NavBar;
