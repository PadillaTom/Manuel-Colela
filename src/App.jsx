import styled from "styled-components";

function App() {
	return (
		<Wrapper>
			<div className="container">
				<h2>Hola Manuel, ponete las pilas!</h2>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.main`
	width: 100%;
	height: 100vh;
	background-color: var(--ColorWhiteFafafa);
	.container {
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
	}
`;
export default App;
