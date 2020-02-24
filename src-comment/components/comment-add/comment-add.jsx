import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class CommentAdd extends Component {

    static propTypes = {
        addComment : PropTypes.func.isRequired
    }

    state = {
        userName: '',
        content: ''
    }

    handleSubmit = () => {
        //收集數據，封裝成Comment物件
        const comment = this.state;
        //更新狀態
        this.props.addComment(comment)
        //清除輸入數據
        this.setState({
            userName : '',
            content : '',
        })
    }

    handleNameChange = (event) => {
        const userName = event.target.value;
        this.setState({
            userName: userName
        })
    }

    handleContentChange = (event) => {
        const content = event.target.value;
        this.setState({
            content: content
        })
    }

    render() {
        const {userName} = this.state;
        const {content} = this.state;

        return (
            <div>
                <form>
                    <div>
                        <label>用戶名</label>
                        <input type="text" placeholder="用戶名" value={userName} onChange={this.handleNameChange}/>
                    </div>
                    <div>
                        <label>評論內容</label>
                        <textarea rows="6" placeholder="評論內容" value={content}
                                  onChange={this.handleContentChange}></textarea>
                    </div>
                    <div>
                        <button type="button" onClick={this.handleSubmit}>提交</button>
                    </div>
                </form>
            </div>
        )
    }
}