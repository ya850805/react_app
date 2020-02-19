import React, {Component} from 'react'
import CommentAdd from "../comment-add/comment-add";
import CommentList from "../comment-list/comment-list";

export default class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         comments: [
    //             {
    //                 userName: 'Tom',
    //                 content: 'React好玩'
    //             },
    //             {
    //                 userName: 'Jack',
    //                 content: 'React好難欸'
    //             }
    //         ]
    //     }
    // }

    //給組件對象指定state屬性
    state = {
        comments: [
            {
                userName: 'Tom',
                content: 'React好玩!'
            },
            {
                userName: 'Jack',
                content: 'React好難欸!'
            }
        ]
    }

    //添加評論
    addComment = (comment) => {
        const {comments} = this.state;
        comments.unshift(comment);
        //更新狀態
        this.setState({
            comments : comments
        })
    }

    //刪除指定評論
    deleteComment = (index) =>{
        const {comments} = this.state;
        comments.splice(index, 1);
        this.setState({
            comments : comments
        })
    }

    render() {
        const {comments} = this.state

        return (
            <div>
                <div>
                    <div>
                        <h1>請發表你對React的評論</h1>
                    </div>
                </div>
                <div>
                    <CommentAdd addComment={this.addComment} />
                </div>
                <hr/>
                <div>
                    <CommentList comments={comments} deleteComment={this.deleteComment} />
                </div>
            </div>
        )
    }
}