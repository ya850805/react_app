import React, {Component} from 'react'
import PropTypes from 'prop-types'

import CommentItem from "../comment-item/comment-item";

export default class CommentList extends Component {
    //給組件類指定屬性
    static propTypes = {
        comments : PropTypes.array.isRequired,
        deleteComment :PropTypes.func.isRequired
    }

    render() {

        const {comments, deleteComment} = this.props;
        const display = comments.length===0? 'block' : 'none';

        return (
            <div>
                <h3>評論回覆 </h3>
                <h3 style={{display:display}}>暫無評論，請點添加</h3>
                <ul>
                    {
                        comments.map((comment, index) => <CommentItem comment={comment} deleteComment={deleteComment} index={index} key={index} />)
                    }
                </ul>
            </div>
        )
    }
}

// CommentList.propTypes = {
//     comments : PropTypes.array.isRequired
// }

