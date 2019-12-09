import { h, Component } from 'preact';
import { route } from 'preact-router';

import Card from 'preact-material-components/Card';
// import 'preact-material-components/Card/style.css';
// import 'preact-material-components/Button/style.css';
// import 'preact-material-components/Theme/style.css';

// import style from './work.scss';

export default class WorkCard extends Component {
    state = {
        title: 'Title',
        caption: 'Caption',
        cover: 'https://#',
        category: ['category1','category2']
    }

    linkToPage = id => () => {
        console.log(this);
        route(`/work/${id}`);
    };

    render({id,title,image}) {
        return (
            <div>
                <Card class="mdc-card" ripple>
                    <Card.Media 
                        wide
                        ripple
                        style={{ backgroundImage: `url(${image})`, minHeight: 200 }}
                        class='card-media work-card__media'
                        onClick={this.linkToPage(id)}
                        />
                    <div class="card-header">
                        <h2 class=" mdc-typography--title">{title}</h2>
                    </div>

                    <Card.Actions>
                        <Card.ActionButtons>
                            <Card.ActionButton>More</Card.ActionButton>
                        </Card.ActionButtons>
                        <Card.ActionIcons>
                            <Card.ActionIcon>favorite_border</Card.ActionIcon>
                            <Card.ActionIcon>share</Card.ActionIcon>
                            <Card.ActionIcon>more_vert</Card.ActionIcon>
                        </Card.ActionIcons>
                    </Card.Actions>
                </Card>

                
            </div>
        );
    }
}