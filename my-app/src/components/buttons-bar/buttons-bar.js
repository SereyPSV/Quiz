import styled from 'styled-components';

const ButtonsBarContainer = ({ className }) => (
	<div className={className}>
		<div className="button">Запустить тест</div>
		<div className="button">Редактировать тест</div>
	</div>
);

export const ButtonsBar = styled(ButtonsBarContainer)`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 40px 0px;

	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 48%;
		height: 70px;
		background-color: #fff;
		font-size: 20px;
		border-radius: 10px;

		transition-timing-function: linear;
		transition-duration: 0.2s;

		&:hover {
			cursor: pointer;
			background-color: #3a3a3a;
			color: #dedede;
			transition-timing-function: linear;
			transition-duration: 0.2s;
		}
	}
`;
