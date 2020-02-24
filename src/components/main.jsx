import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export default class Main extends Component {

    static propTypes = {
        searchName : PropTypes.string.isRequired
    }

    state = {
        initView : true,
        loading : false,
        users : null,
        errorMsg : null
    }

    //當組件接收到新的屬性時呼叫
    componentWillReceiveProps(newProps) {
        const {searchName} = newProps;
        //更新狀態
        this.setState({
            initView : false,
            loading : true
        })
        //AJAX
        const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
            .then(response => {
                //得到數據
                const result = response.data;
                const users = result.items.map(item => {
                    return {name:item.login, url:item.html_url, avatar:item.avatar_url}
                })
                //更新狀態(成功)
                this.setState({
                    loading : false,
                    users : users
                })
            }).catch(error => {
                //更新狀態(失敗)
                this.setState({
                    loading : false,
                    errorMsg : error.message
                })
            })
    }

    render() {
        const {initView, loading, users, errorMsg} = this.state;
        if(initView) {
            return <h2>Fill the input to search</h2>
        } else if(loading) {
            return <h2>Loading</h2>
        } else if(errorMsg) {
            return <h2>{errorMsg}</h2>
        } else {
            return (
                <div>
                    {
                        users.map((user, index) => (
                            <div key={index}>
                                <a href={user.url} target="_blank">
                                    <img src={user.avatar} />
                                </a>
                                <p>{user.name}</p>
                            </div>
                        ))
                    }
                </div>
            )
        }
    }
}