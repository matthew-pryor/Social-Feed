import LikeButton from "../LikeButton/LikeButton";
import DislikeButton from "../../DislikeButton/DislikeButton";

const DisplayPosts = (props) => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Comments</th>
                </tr>
            </thead>

            <tbody>
            {props.parentEntries.map((entry)=> {
                return(
                <tr>
                    <th>{entry.name}</th>
                    <th>{entry.comment}</th>
                    <LikeButton message = "Like"/>
                    <DislikeButton message = "Dislike"/>
                </tr>
                )
            })}
            </tbody>
      </table>
     );
}
 
export default DisplayPosts;