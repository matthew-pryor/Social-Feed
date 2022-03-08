const DisplayPosts = (props) => {
    return ( 
        <post>
            <feed>
                <fr>
                    <fh>Comment Number</fh>
                    <fh>Name</fh>
                    <fh>Comment</fh>
                </fr>
            </feed>

            <pbody>
            {props.parentEntries.map((entry, index)=> {
                return(
                <tr>
                    <td>{index + 1}</td>
                    <td>{entry.name}</td>
                    <td>{entry.comment}</td>
                </tr>
                )
            })}
            </pbody>
      </post>
     );
}
 
export default DisplayPosts;