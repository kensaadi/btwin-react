import React from 'react';
import tw, { styled } from 'twin.macro';

const StyledApp = styled.div`
	${tw`flex justify-center items-center h-screen`}
`;

function App() {
	return (
		<StyledApp>
			<header className='App-header'>
				<p>Boilerplate React + Tailwind Css Styled-component twin.macro</p>
				<a
					className='text-gray-800 text-2xl'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					App.tsx
				</a>
			</header>
		</StyledApp>
	);
}

export default App;
