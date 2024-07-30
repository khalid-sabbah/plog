// import React, { useState, useEffect } from 'react';

// const AddPostForm = ({ onAddPost, currentPost, isEdit, onClose, username }) => {
//   const [post, setPost] = useState({ content: '', image: '', username });
//   const [selectedFile, setSelectedFile] = useState(null);

//   useEffect(() => {
//     if (currentPost) {
//       setPost(currentPost);
//     } else {
//       setPost((prevPost) => ({ ...prevPost, username }));
//     }
//   }, [currentPost, username]);

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//     console.log(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let imageUrl = post.image;

//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append('file', selectedFile);

//       // Upload the file to the server
//       const response = await fetch('http://localhost:4000/posts', {
//         method: 'POST',
//         image: formData,
//       });

//       if (response.ok) {
//         const data = await response.json();
//         imageUrl = data.filePath; // Assuming the server returns the file path in the response
//       }
//     }

//     onAddPost({ ...post, image: imageUrl }, currentPost ? currentPost.id : null);
//     onClose();
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Content</label>
//         <textarea
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//           value={post.content}
//           onChange={(e) => setPost({ ...post, content: e.target.value })}
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Image</label>
//         <input
//           type="file"
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//           onChange={handleFileChange}
//         />
//       </div>
//       <div className="flex justify-end space-x-4">
//         <button
//           type="button"
//           className="bg-gray-500 text-white py-2 px-4 rounded"
//           onClick={onClose}
//         >
//           Cancel
//         </button>
//         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
//           {isEdit ? 'Update' : 'Add'} Post
//         </button>
//       </div>
//     </form>
//   );
// };

// export default AddPostForm;

/////////////////////////////////////
// import React, { useState, useEffect } from 'react';

// const AddPostForm = ({ onAddPost, currentPost, isEdit, onClose, username }) => {
//   const [post, setPost] = useState({ content: '', image: '', username: username });

//   useEffect(() => {
//     if (currentPost) {
//       setPost({ ...currentPost });
//     }
//   }, [currentPost]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddPost(post, currentPost ? currentPost.id : null);
//     onClose();
//   };

//   const handleImageChange = (e) => {
//     const imagePath = URL.createObjectURL(e.target.files[0]);
//     setPost({ ...post, image: imagePath });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Content</label>
//         <textarea
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//           value={post.content}
//           onChange={(e) => setPost({ ...post, content: e.target.value })}
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Image</label>
//         <input
//           type="file"
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//           onChange={handleImageChange}
//         />
//       </div>
//       <div className="flex justify-end space-x-4">
//         <button
//           type="button"
//           className="bg-gray-500 text-white py-2 px-4 rounded"
//           onClick={onClose}
//         >
//           Cancel
//         </button>
//         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
//           {isEdit ? 'Update' : 'Add'} Post
//         </button>
//       </div>
//     </form>
//   );
// };

// export default AddPostForm;


/////////////////////////////////////////
// import React, { useState } from 'react';

// export default function AddPostForm({ onAddPost, currentPost, isEdit, onClose, username }) {
//   const [content, setContent] = useState(currentPost ? currentPost.content : '');
//   const [image, setImage] = useState(null);

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newPost = {
//       content,
//       username,
//     };

//     if (isEdit) {
//       newPost.id = currentPost.id;
//     }

//     if (image) {
//       const formData = new FormData();
//       formData.append('image', image);

//       fetch('http://localhost:4000/upload', {
//         method: 'POST',
//         body: formData,
//       })
//         .then(response => response.json())
//         .then(data => {
//           newPost.image = data.imageUrl;
//           onAddPost(newPost, isEdit ? currentPost.id : null);
//           onClose();
//         });
//     } else {
//       onAddPost(newPost, isEdit ? currentPost.id : null);
//       onClose();
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <textarea
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         placeholder="What's on your mind?"
//       />
//       <input type="file" onChange={handleImageChange} />
//       <button type="submit">Post</button>
//     </form>
//   );
// }
/////////////////////////////////////////
import React, { useState } from 'react';

export default function AddPostForm({ onAddPost, currentPost, isEdit, onClose, username }) {
  const [content, setContent] = useState(currentPost ? currentPost.content : '');
  const [image, setImage] = useState(currentPost ? currentPost.image : null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: isEdit ? currentPost.id : Math.random().toString(36).substr(2, 9),
      username,
      content,
      image,
      timestamp: new Date().toISOString(),
    };

    onAddPost(newPost);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <input type="file" onChange={handleImageChange} />
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded-md">
        {isEdit ? 'Update Post' : 'Add Post'}
      </button>
    </form>
  );
}

