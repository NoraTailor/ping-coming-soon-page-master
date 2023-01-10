import React from 'react';
import styled from 'styled-components';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

function Footer() {
	return (
		<Wrapper>
			<p className='copy'>
				<AiOutlineCopyrightCircle className='icon' />
				Copyright Ping. All rights reserved.
			</p>
		</Wrapper>
	);
}

const Wrapper = styled.footer`
	display: flex;
	justify-content: center;

	.icon {
		font-size: 1rem;
		margin-bottom: -0.2rem;
	}

	.copy {
		color: gray;
		font-weight: 400;
		font-size: 0.9rem;
	}

	@media screen and (min-width: 768px) {
		.copy {
			font-size: 1rem;
		}
	}
`;

export default Footer;
