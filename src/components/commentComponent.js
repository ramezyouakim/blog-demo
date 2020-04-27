import React from 'react';
import { config } from '../config';
import { getCommentslist } from '../services/service';

//Comment class component
export default class CommentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.getCommentDetails = this.getCommentDetails.bind(this);
        this.state = {
            dataObject: this.props.data,
            active: false
        }
    }

    getCommentDetails(id) {
        getCommentslist(id)
            .then(async (res) => {
                let responesJson = await res.json();
                this.setState({
                    dataObject: responesJson,
                    active: !this.state.active
                })
            })
            .catch((error) => alert(error))
    }

    render() {
        const {
            active,
            dataObject
        } = this.state;
        return (
            <li className="comment_card" onClick={() => { this.getCommentDetails(dataObject.id); }}>
                <h3>{dataObject.title}</h3>
                <p>{dataObject.content}</p>
                {
                    active && dataObject.video ?
                        <video controls autoPlay>
                            <source src={config.serverUrl + dataObject.video} type='video/mp4' />
                        </video>
                        : null
                }
            </li >
        )
    };
};
