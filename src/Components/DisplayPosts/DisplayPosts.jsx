const DisplayPosts = (props) => {
    return ( 
        <post>
            <feed>
                <fr>
                    <fh>Comments</fh>
                </fr>
            </feed>

            <pbody>
            {props.parentEntries.map((entry)=> {
                return(
                <fr>
                    <fh>{entry.name}</fh>
                    <fh>{entry.comment}</fh>
                </fr>
                )
            })}
            </pbody>
      </post>
     );
}
 
export default DisplayPosts;