import React from 'react';
import styled from 'styled-components';

function Text() {
	return (
		<Wrapper>
			<h1>ping.</h1>
			<h2>
				We are launching <span>soon!</span>
			</h2>
			<p>Subscribe and get notified.</p>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 2rem;
	margin-top: 2rem;

	h1 {
		text-transform: uppercase;
		font-weight: 700;
		margin-bottom: 2rem;
	}

	h2 {
		font-weight: 300;
	}

	span {
		font-weight: 700;
	}

	@media screen and (min-width: 768px) {
		h1 {
			font-size: 1.8rem;
		}

		h2 {
			font-size: 2.2rem;
			letter-spacing: 0.2rem;
			color: gray;
		}

		span {
			color: black;
		}

		p {
			font-size: 1.4rem;
		}
	}
`;

export default Text;
