import styled from 'styled-components';
import { ButtonsBar } from '../../components';

const historyResult = [
	{
		date: 1698230504902,
		result: [2, 2, 1, 2, 1, 0, 0, 0, 0, 1],
	},
	{
		date: 1698240505902,
		result: [2, 2, 1, 2, 2, 1, 0, 0, 0, 0],
	},
];

const dateISO = (dateNum) =>
	new Date(dateNum).toISOString().substring(0, 10).split('-').reverse().join('.');
const timeISO = (dateNum) => new Date(dateNum).toISOString().substring(11, 19);

const bgColor = (res) => {
	switch (res) {
		case 1:
			return 'red';
		case 2:
			return 'green';
		default:
			return null;
	}
};

const MainPageContainer = ({ className }) => {
	return (
		<div className={className}>
			<ButtonsBar />

			<div className="testing-history">
				<h3>История прохождений</h3>
				{historyResult.map(({ date, result }) => (
					<div key={date} className="testing-history-item">
						<div className="date">
							<div className="day">{dateISO(date)}</div>
							<div className="time">{timeISO(date)}</div>
						</div>
						<div className="progress-bar-wrapper">
							0&nbsp;
							<div className="progress-bar">
								{result.map((taskRes) => {
									const color = bgColor(taskRes);
									return (
										<div
											className="task"
											style={{ backgroundColor: `${color}` }}
										></div>
									);
								})}
							</div>
							&nbsp;{result.length}
						</div>

						<div className="test-result">
							<div className="date">
								Верно:&nbsp;{result.filter((i) => i === 2).length}&nbsp;из&nbsp;
								{result.length}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export const MainPage = styled(MainPageContainer)`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: auto;

	.testing-history {
		font-size: 24px;
	}

	.testing-history-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 70px;
		background-color: #fff;
		font-size: 20px;
		border-radius: 10px;
		margin: 20px 0;
		padding: 5px 20px;
	}

	.date {
	}
	.time {
		font-size: 14px;
	}
	.progress-bar-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 30%;
	}

	.progress-bar {
		display: flex;
		flex-direction: row;
		width: 85%;
		height: 20px;
		border: 2px solid #3a3a3a;
		border-radius: 15px;
		:first-child {
			border-radius: 15px 0 0 15px;
		}
		:last-child {
			border-radius: 0 15px 15px 0;
		}
	}

	.task {
		height: 100%;
		width: 10%;
	}

	.test-result {
		display: flex;
		justify-content: flex-end;
		width: 30%;
	}
`;
