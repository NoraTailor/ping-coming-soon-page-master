import React from 'react';
import styled from 'styled-components';
import img from '../images/illustration-dashboard.png';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter, BsInstagram } from 'react-icons/bs';

function Image() {
	return (
		<Wrapper>
			<img
				src={img}
				alt='data-img'
				className='main-image'
			/>

			<ul className='social-links'>
				<li className='link'>
					<a href='https://twitter.com' className='icon'>
						<FaFacebookF />
					</a>
				</li>
				<li className='link'>
					<a href='https://twitter.com' className='icon'>
						<BsTwitter />
					</a>
				</li>
				<li className='link'>
					<a href='https://twitter.com' className='icon'>
						<BsInstagram />
					</a>
				</li>
			</ul>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 2rem;

	.main-image {
		width: 80%;
		margin-bottom: 3rem;
	}

	.social-links {
		display: flex;
		flex-direction: row;
		width: 35%;
		margin-left: -1.5rem;
		justify-content: space-around;
	}

	.link {
		list-style-type: none;
		display: flex;
		align-items: center;
	}

	.icon {
		text-decoration: none;
		color: var(--main-blue);
		border-radius: 50%;
		padding: 0.4rem 0.5rem 0.3rem 0.5rem;
		font-size: 1rem;
		border: 1px solid gray;
	}

	a:hover {
		background-color: var(--main-blue);
		color: white;
		cursor: pointer;
	}

	@media screen and (min-width: 768px) {
		.main-image {
			width: 60%;
		}

		.social-links {
			width: 10%;
		}
		.icon {
			font-size: 1.3rem;
		}
	}
`;

export default Image;
