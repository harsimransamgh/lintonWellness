
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './AudienceInteraction.css'; // Import the CSS file
// import logo from './logo rectangle.png';

// const AudienceInteractionPage = () => {
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState('');
//   const [feedback, setFeedback] = useState('');
//   const [posts, setPosts] = useState([]);
//   const [newPost, setNewPost] = useState('');

//   const handleAddComment = () => {
//     if (newComment.trim() !== '') {
//       setComments([...comments, newComment]);
//       setNewComment('');
//     }
//   };

//   const handleSubmitFeedback = () => {
//     if (feedback.trim() !== '') {
//       // Implement logic to submit feedback (e.g., send to server)
//       alert(`Feedback submitted: ${feedback}`);
//       setFeedback('');
//     }
//   };

//   const handleAddPost = () => {
//     if (newPost.trim() !== '') {
//       setPosts([...posts, newPost]);
//       setNewPost('');
//     }
//   };

//   return (
//     <div>
//       <div className="header">
//         <Link to="/">
//           <img className="logo" src={logo} alt="Logo" />
//         </Link>
//         <button className="free-trial-button2">Free Trial</button>
//         <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
//           <div className="bar"></div>
//           <div className="bar"></div>
//           <div className="bar"></div>
//         </div>
//       </div>
//       <div className={`menu ${menuOpen ? 'open' : ''}`}>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/signup">Sign Up</Link> {/* Use the correct path for signup */}
//           </li>
//           <li>
//             <Link to="/audienceinteraction">Audience Interaction</Link> {/* Use the correct path for signup */}
//           </li>
//         </ul>
//       </div>

//       <div>
//         <div className="audience-interaction-page">
//           <h1>Audience Interaction</h1>

//           {/* Comment Section */}
//           <div className="comment-section">
//             {/* <h2>Comments</h2> */}
//             <div>
//               {comments.map((comment, index) => (
//                 <div key={index}>{comment}</div>
//               ))}
//             </div>
//             <textarea
//               value={newComment}
//               onChange={(e) => setNewComment(e.target.value)}
//               placeholder="Add your comment..."
//             />
//             <button onClick={handleAddComment}>Add Comment</button>
//           </div>

//           {/* Feedback Form */}
//           <div className="feedback-form">
//             {/* <h2>Feedback Form</h2> */}
//             <textarea
//               value={feedback}
//               onChange={(e) => setFeedback(e.target.value)}
//               placeholder="Share your thoughts and suggestions..."
//             />
//             <button onClick={handleSubmitFeedback}>Submit Feedback</button>
//           </div>

//           {/* Community Forum */}
//           <div className="community-forum">
//             {/* <h2>Community Forum</h2> */}
//             <div>
//               {posts.map((post, index) => (
//                 <div key={index}>{post}</div>
//               ))}
//             </div>
//             <textarea
//               value={newPost}
//               onChange={(e) => setNewPost(e.target.value)}
//               placeholder="Start a new discussion..."
//             />
//             <button onClick={handleAddPost}>Post</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AudienceInteractionPage;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AudienceInteraction.css'; // Import the CSS file
import logo from './logo rectangle.png';

const AudienceInteractionPage = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [feedback, setFeedback] = useState('');
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  // Assuming you have similar menu functionality
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  const handleSubmitFeedback = () => {
    if (feedback.trim() !== '') {
      // Implement logic to submit feedback (e.g., send to server)
      alert(`Feedback submitted: ${feedback}`);
      setFeedback('');
    }
  };

  const handleAddPost = () => {
    if (newPost.trim() !== '') {
      setPosts([...posts, newPost]);
      setNewPost('');
    }
  };

  return (
    <div>
      <div className="header">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <button className="free-trial-button2">Free Trial</button>
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/audienceinteraction">Audience Interaction</Link>
          </li>
          <li>
            <Link to="/services">Services</Link> {/* Use the correct path for signup */}
          </li>
          <li>
            <Link to="/aboutus">Aboutus</Link> {/* Use the correct path for signup */}
          </li>
        </ul>
      </div>

      <div>
        <div className="audience-interaction-page">
          <h1>Audience Interaction</h1>

          {/* Comment Section */}
          <div className="comment-section">
            <div>
              {comments.map((comment, index) => (
                <div key={index}>{comment}</div>
              ))}
            </div>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add your comment..."
            />
            <button onClick={handleAddComment}>Add Comment</button>
          </div>

          {/* Feedback Form */}
          <div className="feedback-form">
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your thoughts and suggestions..."
            />
            <button onClick={handleSubmitFeedback}>Submit Feedback</button>
          </div>

          {/* Community Forum */}
          <div className="community-forum">
            <div>
              {posts.map((post, index) => (
                <div key={index}>{post}</div>
              ))}
            </div>
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="Start a new discussion..."
            />
            <button onClick={handleAddPost}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudienceInteractionPage;

