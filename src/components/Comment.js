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
                    this.state.comments.length > 0 ?
                        this.state.comments.map((comment, i) => {
                            return (
                                <div key={i} >
                                    <h3>{comment.userName}</h3>
                                    <br></br>
                                    <p>{comment.body}</p>
                                    <hr></hr>
                                </div>
                            )
                        }) :
                        <h4>No comments yet</h4>
                }
                {
                    this.props.userInfo.loggedIn === 'true' ?
                        <div>
                            <button className="commentbtn-post" onClick={this.commentBtnClicked}>
                                {this.state.commentBtnText}
                            </button>
                            <div>
                                {
                                    this.state.showCommentForm ?
                                        <CommentForm
                                            postId={this.props.postId}
                                            userInfo={this.props.userInfo}
                                            getNewComment={this.getNewComment}
                                        /> : null

                                        
                                }
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
                            </div>
                        </div>
                        :
                        <Link to="/login"><button className="commentbtn-post">Log in to comment</button></Link>    
                }
                
                <hr></hr>
            </div>
        )
    }
}

