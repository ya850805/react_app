import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class CommentItem extends Component {

    static propTypes = {
        comment : PropTypes.object.isRequired,
        deleteComment : PropTypes.func.isRequired,
        index : PropTypes.number.isRequired
    }

    handleClick = () =>{
        const {comment, deleteComment, index} = this.props;

        if(window.confirm(`確定刪除${comment.userName}的評論？`)){
            deleteComment(index);
        }
    }

    render() {
        const {comment} = this.props;

        return (
            <li>
                <p>{comment.userName}</p>
                <p>{comment.content}</p>
                <button onClick={this.handleClick}>刪除</button>
            </li>
        )
    }
}