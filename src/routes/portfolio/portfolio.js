import { h, Component } from 'preact';

import APIService from '../../api_service';

import WorkCard from '../../components/work/work_card';
import style from './portfolio.scss';

export default class Portfolio extends Component {
    state = {
        work: [],
        page: 0,
        loading: false,
        noMoreResults: false,
    }

    componentDidMount() {
        const reqObj = { ids: [], page: this.state };
        APIService.getAllWork(reqObj)
        .then(work => {
            console.log('# response', work);
            this.setState({ work });
                // this.props.ready(true);
            });
    }

    
	// Note: `user` comes from the URL, courtesy of our router
	render() {
        const workList = this.state.work.map(work => {
        return (
            <div class={style.work} >
                <WorkCard
                    id={work.nid[0].value}
                    title={work.title[0].value}
                    body={work.body[0].value} 
                    image={work.field_image[0].url} 
                    />
            </div>
            );
        });

		return (
            <div class={`${style.portfolio} page`}>
                {this.state.work.length === 0 &&
                    <h1>Loading...</h1>
                } 
                {workList}
			</div>
		);
	}
}
