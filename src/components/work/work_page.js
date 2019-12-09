import { h, Component } from 'preact';

import APIService from '../../api_service';

import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';

import Typography from 'preact-material-components/Typography';
import 'preact-material-components/Typography/style.css';

import 'preact-material-components/Button/style.css';

import style from './work.scss';

export default class WorkPage extends Component {
    state = {
        loading: true,
        work: {
            title: '',
            body: '',
            image: 'https://#',
            tags: ['category1','category2']
        }
    }

    componentDidMount() {
        APIService.getWork(this.props.nid)
        .then(data => {
            console.log('# response', data[0]);
            const work = {
                title: data[0].title[0].value,
                body: data[0].body[0].value,
                image: data[0].field_image,
                tags: data[0].field_tags,
            }
            
            this.setState({ work, loading: false });
        });
    }
        
    render({nid},{work}) {
        console.log('### loading', this.state.loading);
        return (
            <div class={`${style.work} page`}>
            { this.state.loading && <h1>Loading...</h1> }
            { !this.state.loading && 
                <Card>
                    <img src={work.image[0].url} />
                    <div class="card-header">
                        <h1 class=" mdc-typography--title">{work.title}</h1>
                    </div>
                    <Typography
                        variant="body1"
                        dangerouslySetInnerHTML={{ __html: work.body }}
                    />
                </Card>
            }
            </div>
        );
    }
}