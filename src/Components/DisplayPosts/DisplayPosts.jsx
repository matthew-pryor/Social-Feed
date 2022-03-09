import CustomButton from "../LikeButton/LikeButton";


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
                    <CustomButton message = "Like"/>
                </tr>
                )
            })}
            </tbody>
      </table>
     );
}
 
export default DisplayPosts;