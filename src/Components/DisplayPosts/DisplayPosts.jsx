import LikeButton from "../LikeButton/LikeButton";
import DislikeButton from "../DislikeButton/DislikeButton";
import "./DisplayPosts.css"

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
                    <div>
                        <th>{entry.name}</th>
                    </div>

                    <div>
                        <th>{entry.comment}</th>
                    </div>

                    <div>
                        <th>{Date()}</th>
                    </div>
                    
                    <div class="flex-container">
                        <div class="flex-child"><LikeButton message = "Like"/></div>
                        <div class="flex-child"><DislikeButton message = "Dislike"/></div>         
                    </div>
                    
                </tr>
                )
            })}
            </tbody>
      </table>
     );
}
 
export default DisplayPosts;