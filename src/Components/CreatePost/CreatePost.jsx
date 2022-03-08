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
        console.log(newEntry)
        props.addNewCommentProperty(newEntry)
    }

    return ( 
        <postcontent onSubmit={submitComment}>
            <label>Name </label>
            <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
            <label>Comment </label>
            <input type='text' value={comment} onChange={(event) => setComment(event.target.value)}/>
            <button type='submit'>Post</button>
        </postcontent>
     );
}
 
export default CreatePost;