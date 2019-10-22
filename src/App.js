import React from 'react';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';


const App = () => {
  return ( 

    <div className="ui container comments">
      <CommentDetail 
        author=""
        avatar=""
        timeAgo=""
        content=""
      />

      <CommentDetail 
        author=""
        avatar=""
        timeAgo=""
        content=""
      />

      <CommentDetail 
        author=""
        avatar=""
        timeAgo=""
        content=""
      />
    </div>



   );
}
 
export default App;