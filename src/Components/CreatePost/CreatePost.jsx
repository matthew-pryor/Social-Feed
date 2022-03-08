import React, {useState} from "react";


const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [comment, setComment] = useState('')

    function submitComment(event){
        event.preventDefault();
        let newPost = {
            name: name,
            comment: comment
        };

    }

    return ( 

        <post>
                <postcontent onSubmit={submitComment}>
                    <entry>Name </entry>
                    <input type='text' onChange={(event) => setName(event.target.value)} value={name}/>
                    <entry>Comment </entry>
                    <input type='text' onChange={(event) => setComment(event.target.value)} value={comment} />
                    <button type="submit">Post</button>
                </postcontent>
        </post>
     );
}
 
export default CreatePost;