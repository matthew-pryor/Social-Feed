import React, {useState} from "react";


const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    function submitComment(event){
        event.preventDefault();
        let newEntry = {
            name: name,
            comment: comment
        };
        props.addNewCommentProperty(newEntry)
    }

    return ( 
        <form onSubmit={submitComment}>
            <div>
                <label>Name </label>
            </div>

            <div>
                <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
            </div>

            <div>
                <label>Comment </label>
            </div>

            <div>
                <input type='text' value={comment} onChange={(event) => setComment(event.target.value)}/>
            </div>

            <button type='submit'>Post</button>
        </form>
     );
}
 
export default CreatePost;