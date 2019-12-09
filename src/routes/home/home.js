import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import selfi from '../../assets/torsten_abraham.jpg';
import style from './home.scss';

export default class Home extends Component {
	render() {
		return (
			<div class={`${style.home} page`}>
				{/* <h1>About</h1> */}
				<Card>
					<img src={selfi} class={style.image} />
					<div class={style.cardHeader}>
						<h2 class=" mdc-typography--title">Torsten Abraham</h2>
						<div class=" mdc-typography--caption">Welcome to my portfolio</div>
					</div>
					<div class={style.cardBody}>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
					</div>
				</Card>
			</div>
		);
	}
}
