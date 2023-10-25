import { Route, Routes } from 'react-router-dom';
import { MainPage, TakingTheTest } from './pages';
import styled from 'styled-components';

const AppColumn = styled.div`
	display: flex;
	max-width: 1240px;
	margin: 50px auto;
	background-color: red;
`;

const Page = styled.div`
	display: flex;
	width: 100%;
	background-color: #ddd;
	padding: 0 80px;
`;

export const App = () => {
	return (
		<AppColumn>
			<Page>
				<Routes>
					<Route path="/" element={<TakingTheTest />} />
					<Route path="/1" element={<MainPage />} />
					<Route path="/post/:postId" element={<div>Статья</div>} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Page>
		</AppColumn>
	);
};
