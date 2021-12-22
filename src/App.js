import './css/style.css';
import { Logo, Menu } from './components/Header.js';
import Panel from './components/Panel.js';
import Footer from './components/Footer.js';
import Btns from './components/Btns.js';



function App() {
	return (
		<div className="App">
			{/* 전체 레이아웃**/}
			<figure>
				<Logo />
				<Menu />

				
				<Panel />
				<Btns />

				<Footer />
			</figure>
		</div>
	);
}

export default App;
