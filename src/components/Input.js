import React, { useState } from 'react';
import styled from 'styled-components';

function Input() {
	const [isNotValid, setNotValid] = useState(false);
	const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
		const regex = /b[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}b/;
		e.preventDefault();
		if (!regex.test(email) || !email) {
			setNotValid(true);
			console.log(isNotValid);
		}
	};

	const handleChange = (e) => {
		setEmail(e.target.value);
		console.log(email);
	};

	return (
		<Wrapper>
			<form onSubmit={handleSubmit} className='form'>
				<input
					type='text'
					className={
						isNotValid ? 'input-error input' : 'input'
					}
					value={email}
					placeholder='Your email address...'
					onChange={handleChange}
				/>
				{isNotValid && (
					<p>Please provide a valid email address.</p>
				)}
				<button type='submit' className='btn'>
					Notify me
				</button>
			</form>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;

	.form {
		width: 80%;
	}

	.input {
		width: 90%;
		border-radius: 24px;
		border: 1px solid var(--main-blue);
		padding: 1rem;
	}
	.input::placeholder {
		color: lightblue;
	}

	.input:focus {
		border: 1px solid var(--main-blue);
		outline: none;
	}
	.input:focus::placeholder {
		color: transparent;
	}
	.input-error {
		border: 1px solid red;
	}

	.input-error:focus {
		border: 1px solid red;
		outline: none;
	}

	.btn {
		width: 100%;
		border-radius: 24px;
		text-align: center;
		font-weight: 600;
		color: white;
		background-color: var(--main-blue);
		border: none;
		padding: 1rem;
		letter-spacing: 0.2rem;
		margin-top: 1rem;
		margin-bottom: 2rem;
		box-shadow: 4px 5px hsl(219, 50%, 61%, 0.3);
	}

	.btn:hover {
		background-color: var(--main-hover-blue);
	}

	p {
		color: red;
		font-style: italic;
		float: right;
	}

	@media screen and (min-width: 768px) {
		display: flex;
		flex-direction: row;

		.form {
			width: 60%;
			justify-content: center;
			align-items: center;
			margin-left: 10rem;
		}

		.input {
			width: 40%;
			margin-left: 5rem;
		}

		.btn {
			width: 25%;
			margin-left: 1rem;
		}
		p {
			position: relative;
			right: 70%;
			top: 3.3rem;
		}
	}
`;
export default Input;
