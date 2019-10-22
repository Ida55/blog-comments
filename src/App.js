import React from 'react';
import CommentDetail from './components/CommentDetail';


const App = () => {
  return ( 

    <div className="ui container comments">
      <CommentDetail 
        author="Sam"
        timeAgo="Today at 4:45PM"
        comment="Nice blog post!"
        avatar={faker.image.avatar()}
      />

      <CommentDetail 
        author="Alex"
        timeAgo="Today at 2:00AM"
        comment="Very well written, the 2nd part of the blog really resonnated with me."
        avatar={faker.image.avatar()}
      />

      <CommentDetail 
        author="Jane"
        timeAgo="Today at 5:00PM"
        comment="Admire your prose as usual, even if I don't necessarily agree with you on this particular subject!"
        avatar={faker.image.avatar()}
      />
    </div>

   );
}
 
export default App;