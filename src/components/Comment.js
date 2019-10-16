import React, { Component } from 'react'

export default class Comment extends Component {

    render() {
        const comment = this.props.comment;
        console.log(this.props)
        return (
            <div>
                <h3>{comment.userName}</h3>
                <br></br>
                <p>{comment.body}</p>
                {
                    this.props.userInfo.userId === comment.userId || this.props.posterId === this.props.userInfo.userId ?
                        <button
                            className="commentbtn-post"
                            style={{ "marginLeft": "10px" }}
                            onClick={() => this.props.commentDeleted(comment._id)}
                        >
                            Delete
                                            </button>
                        : null
                }
                <hr></hr>
            </div>
        )
    }
}

