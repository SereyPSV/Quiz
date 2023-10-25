import { ButtonsBar } from '../../components';
import { test } from '../../db';
import styled from 'styled-components';

const TakingTheTestContainer = ({ className }) => (
	<div className={className}>
		<div className="question-counter">{`1/${test.length}`}</div>
		<div className="question">{`${test[0].id}. ${test[0].question}`}</div>
		<form className="answer-choice-block">
			{test[0].answers.map((answer, i) => (
				<div key={i} className="answer-choice">
					<input type="radio" id={`${i}`} name="test" />
					<label>{`${answer}`}</label>
				</div>
			))}

			<ButtonsBar />
		</form>
	</div>
);

export const TakingTheTest = styled(TakingTheTestContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin: auto;

	.question-counter {
		font-size: 24px;
	}

	.question {
		font-size: 20px;
	}

	.answer-choice {
		margin: 10px 0;
		font-size: 18px;
	}
`;
