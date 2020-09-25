import React from "react";
import useForm from "./Tools/useForm";
import { commentValidation } from "./Tools/FormValidationRules";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addComment } from "../Redux/actions/blogActions";
import LoadingSpinner from "./Utilities/LoadingSpinner";

const Comments = ({
    commentList,
    addComment,
    blogId,
    blogReducer: { loadingComments }
}) => {
    let { handleChange, handleSubmit, values, errors } = useForm(
        comment,
        commentValidation
    );

    function comment() {
        values.blogId = blogId;
        addComment(values);
    }

    return (
        <>
            <section className="comment-section">
                <h3>Yorumlar</h3>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            onChange={handleChange}
                            type="text"
                            name="username"
                            placeholder="İsminiz.."
                            value={values.username || ""}
                        />
                        {errors.username && (
                            <small className="input-error">{errors.username}</small>
                        )}
                    </div>
                    <div className="form-group">
                        <textarea
                            onChange={handleChange}
                            type="text"
                            name="commentText"
                            placeholder="Yorumunuz.."
                            value={values.commentText || ""}
                            rows="4"
                        ></textarea>
                        {errors.commenttext && (
                            <small className="input-error">{errors.commenttext}</small>
                        )}
                    </div>
                    <div>
                        {loadingComments ? <LoadingSpinner/> : ""}
                        <button type="submit">
                            {loadingComments ? "Yorumunuz ekleniyor.." : "Yorum Yap"}
                        </button>
                    </div>
                </form>

                <div className="comments">
                    {commentList &&
                        commentList.sort((a,b) => a.commentId - b.commentId).reverse().map((i, j) => (
                            <div key={j} className="card">
                                <div className="card-details">
                                    <h4>{i.username}</h4>
                                    <p>{i.commentText}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </section>
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: bindActionCreators(addComment, dispatch),
    };
};

const mapStateToProps = (state) => {
    return {
        blogReducer: state.blogReducer,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
