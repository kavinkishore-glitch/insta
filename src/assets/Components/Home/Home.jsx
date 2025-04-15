import React, { useRef } from 'react';
import './Home.css';
import PostCard from './PostCard';

function Home() {
  const videoRefs = useRef([]);

  const posts = [
    {
      id: 1,
      type: 'image',
      username: 'sunset_lover',
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgMDDRszJFdp6NrfiaxabNGk6-H0bL9VTe5w&s',
      postImg: 'https://images3.alphacoders.com/853/85305.jpg',
      caption: 'Sunset vibes on the beach 🌅',
    },
    {
      id: 2,
      type: 'video',
      username: 'mountain_hiker',
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEaZA-8fO2yayPa0QrW1AlyNgdNnmP6SNrsg&s',
      postImg: '/videos/nature.mp4',
      caption: 'Mountains are calling 🏔️',
    },
    {
      id: 3,
      type: 'image',
      username: 'coffee_addict',
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsTd-LlEHSnYhLWGNmqf73CHsaqRUuYyU8bw&s',
      postImg: 'https://wallpapers.com/images/hd/coffee-good-morning-h42qb29o70csvoqr.jpg',
      caption: 'Coffee break ☕',
    },
    {
      id: 4,
      type: 'video',
      username: 'shinchan_official',
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBfeS9WRaOBfdvvjqd-HBDniZ35q6UI50ANA&s',
      postImg: '/videos/shinchan.mp4',
      caption: 'Shinchan’s mischief 😆',
    },
    {
      id: 5,
      type: 'image',
      username: 'city_life',
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBfeS9WRaOBfdvvjqd-HBDniZ35q6UI50ANA&s',
      postImg: 'https://images.pexels.com/photos/186537/pexels-photo-186537.jpeg?cs=srgb&dl=pexels-joey-lu-49400-186537.jpg&fm=jpg',
      caption: 'Life in the city 🏙️',
    },
    {
      id: 6,
      type: 'video',
      username: 'motivation_king',
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffREt4aenysbFfBiIDxqezImDYfLhqgfy_Q&s',
      postImg: '/videos/motivation.mp4',
      caption: 'Never give up 💪',
    },
    {
      id: 7,
      type: 'image',
      username: 'Photo-Shoot',
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_D82uiR12xUnz2gzCO9CcowbZcYSkzjfsIA&s',
      postImg: 'https://media.istockphoto.com/id/1156298839/photo/kikuchi-valley-waterfall-and-ray-in-forest-japan.jpg?s=612x612&w=0&k=20&c=iua23D-nermMeJ__5JNSahBY7PS2eIQj3rqsRY9f2es=',
      caption: 'I think nature is my color',
    },
    {
      id: 8,
      type: 'video',
      username: 'Yuvan_Song',
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffREt4aenysbFfBiIDxqezImDYfLhqgfy_Q&s',
      postImg: '/videos/u1.mp4',
      caption: 'Feels Better',
    },
    {
      id: 9,
      type: 'video',
      username: 'Time-pass',
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffREt4aenysbFfBiIDxqezImDYfLhqgfy_Q&s',
      postImg: '/videos/2.mp4',
      caption: 'Life is a long lesson in humility',
    },
    {
      id: 10,
      type: 'image',
      username: 'Alone-Moon',
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtfZTFsDaCdS3ZoqWDz1_P8Z7WiwuxJ-Qkw&s',
      postImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1TksxzGo9fNjlIBmj0dBZybHZX0WEDkFoeQ&s',
      caption: 'Moon is alone but still shines',
    },
    {
      id: 11,
      type: 'video',
      username: 'Love_Life',
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4K4sH4RSX-E1ZUt1sWCO8jhqQZftfnZe5vQ&s',
      postImg: '/videos/love.mp4',
      caption: 'I look at you and see the rest of my life in front of my eyes',
    },
    {
      id: 12,
      type: 'video',
      username: 'Comedy_Time',
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIlFnJB0K1iTCE7EQV9Wpf1Ru22MNjZgGTdA&s',
      postImg: '/videos/comedy.mp4',
      caption: 'I am not lazy, I am just on energy-saving mode',
    },
    {
      id: 13,
      type: 'image',
      username: 'Magic Bus India Foundation',
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkLXu-w_NAgpwJUsyzc9Oz-Pbyuk6pN3sAOg&s',
      postImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7xgU9tswHZURjDfxkW1ccz8r6LcnU5OcaGA&s',
      caption: 'Moon is alone but still shines',
    },
    {
      id: 14,
      type: 'video',
      username: 'Humans_Life',
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGLODTo2Ule5WXZDTuHGsg0HB2k3GmYkcEg&s',
      postImg: '/videos/animation.mp4',
      caption: 'Life is short. Smile while you still have teeth',
    },
    {
        id: 15,
        type: 'image',
        username: 'Life_quotes',
        userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Gnx5z_b-pE4cKVBh_i21jEJMN15e-UnYrA&s',
        postImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbg1nPXZQCIqsFu3KX0eYSopiiuZON-naPAQ&s',
        caption: 'Moon is alone but still shines',
      },
      {
        id: 16,
        type: 'video',
        username: 'Bgm-World',
        userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSWf4JvfEXyuKcFPmskGluIegrG8XZIE-D3w&s',
        postImg: '../videos/bgm.mp4',
        caption: 'Melt our Hearts',
      },
      {
        id: 17,
        type: 'video',
        username: 'Relax_One',
        userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzaPwiTv76v4M0awRqgiBCdY_Pj3LiG6YPhw&s',
        postImg: '../videos/drop.mp4',
        caption: 'Come Closer and Close one Eye for Your Relaxation',
      },
      {
        id: 18,
        type: 'image',
        username: 'Pets-World',
        userImg: 'https://content3.jdmagicbox.com/v2/comp/chennai/b7/044pxx44.xx44.150520165914.h3b7/catalogue/pet-world-ambattur-chennai-pet-accessory-dealers-gumbxwux5s.jpg',
        postImg: 'https://media.istockphoto.com/id/2128245344/photo/cute-furry-friends-two-cats-and-two-cheerful-dogs-run-together-through-a-green-meadow-on-a.jpg?s=612x612&w=0&k=20&c=--Jmx0cOEi7vwqlsBrUuV_xzWB1dkDfHJAguMdSihH8=',
        caption: 'Pets leave paw prints on our hearts',
      },
      {
        id: 19,
        type: 'video',
        username: 'Murugan-Status',
        userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZKX3O2K0C3PHvMbur1oVZTIbP30n04iinA&s',
        postImg: '../videos/murugan.mp4',
        caption: 'Faith in Murugan is the path to eternal strength and serenity',
      },
      {
        id: 20,
        type: 'image',
        username: 'Insta-Daily',
        userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgZ8G156RlnXN0CC_4jMcMgxY8qkyvR0LGJQ&s',
        postImg: 'https://storage.googleapis.com/website-production/uploads/2020/02/8-biggest-reasons-instagram-ads-are-not-approved-scaled.webp',
        caption: 'Your feed is your vibe. Make it count',
      },
  ];

  const stories = [
        { id: 1, username: 'Arjun_kathai', avatar: './public/images/arjun.jpeg' },
        { id: 2, username: 'Devi_vaazhkai', avatar: './public/images/devi.jpg' },
        { id: 3, username: 'Murali_paattu', avatar: './public/images/murali.jpeg' },
        { id: 4, username: 'Kalaiarasi_clicks', avatar: './public/images/kalai.jpeg' },
        { id: 5, username: 'Chandra_samayal', avatar: './public/images/chandra.jpeg' },
        { id: 6, username: 'Vikram_videos', avatar: './public/images/vikram.jpeg' },
        { id: 7, username: 'Poovizhi_beauty', avatar: './public/images/poovizhi.jpeg' },
        { id: 8, username: 'Thamarai_dreams', avatar: './public/images/thamarai.jpeg' },
        { id: 9, username: 'Krishna_funny', avatar: './public/images/krishna.jpeg' },
        { id: 10, username: 'Mala_memories', avatar: './public/images/mala.jpeg' },
        { id: 11, username: 'Ramesh_travel', avatar: './public/images/ramesh.jpeg' },
        { id: 12, username: 'Vasanthi_path', avatar: './public/images/vasanthi.jpeg' },
        { id: 13, username: 'Durai_daily', avatar: './public/images/durai.jpeg' },
        { id: 14, username: 'Sneha_songs', avatar: './public/images/sneha.jpeg' },
        { id: 15, username: 'Yamini_life', avatar: './public/images/yamini.jpeg' },
      
  ];

  const followers = [
    { id: 4, name: 'Arjun', avatar: '../followers/arjun.jpeg' },
    { id: 5, name: 'Divya', avatar: '../followers/divya.jpeg' },
    { id: 6, name: 'Prakash', avatar: '../followers/prakash.jpeg' },
    { id: 7, name: 'Meena', avatar: '../followers/meena.jpeg' },
    { id: 8, name: 'Karthik', avatar: '../followers/karthik.jpeg' },
    { id: 9, name: 'Revathi', avatar: '../followers/revathi.jpeg' },
    { id: 10, name: 'Sundar', avatar: '../followers/sundar.jpeg' },
    { id: 11, name: 'Lavanya', avatar: '../followers/lavanya.jpeg' },
    { id: 12, name: 'Vignesh', avatar: '../followers/vignesh.jpeg' },
    { id: 13, name: 'Nila', avatar: '../followers/nila.jpeg' },
    { id: 14, name: 'Dinesh', avatar: '../followers/dinesh.jpeg' },
    { id: 15, name: 'Anitha', avatar: '../followers/anitha.jpeg' },
    { id: 16, name: 'Bharath', avatar: '../followers/bharath.jpeg' },
    { id: 17, name: 'Keerthi', avatar: '../followers/keerthi.jpeg' },
    { id: 18, name: 'Saravanan', avatar: '../followers/saravanan.jpeg' },
    { id: 19, name: 'Janani', avatar: '../followers/janani.jpeg' },
    { id: 20, name: 'Mohan', avatar: '../followers/mohan.jpeg' }
    
  ];

  const handleVideoPlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });
  };

  return (
    <div className="home">
      <div className="left-sidebar">
  <h2 style={{ color: 'white' }}>Instagram</h2>
  <ul className="sidebar-menu">
    <li>🏠 <span>Home</span></li>
    <li>🔍 <span>Search</span></li>
    <li>🧭 <span>Explore</span></li>
    <li>🎬 <span>Reels</span></li>
    <li>💬 <span>Message</span></li>
    <li>🔔 <span>Notifications</span></li>
    <li>➕ <span>Create</span></li>
    <li>📊 <span>Dashboard</span></li>
    <li>👤 <span>Profile</span></li>
    <li>🧠 <span>AI Studio</span></li>
    <li>🧵 <span>Threads</span></li>
  </ul>

  <div className="profile-section">
    <img src="../followers/kavin.jpg" alt="Your Profile" className="profile-pic" />
    <span style={{ color: 'white' }}>Kavinkishore_28</span>
  </div>
</div>

      <div className="center-content">
        <div className="stories">
          {stories.map((story) => (
            <div className="story" key={story.id}>
              <img src={story.avatar} alt={story.username} />
              <p>{story.username}</p>
            </div>
          ))}
        </div>

        <div className="posts">
          {posts.map((post, i) => (
            <PostCard
              key={post.id}
              post={post}
              index={i}
              setVideoRef={(el) => (videoRefs.current[i] = el)}
              onPlay={handleVideoPlay}
            />
          ))}
        </div>
      </div>

      <div className="right-sidebar">
  <h3>🔔 Notifications</h3>
  <div className="notifications">
    <p><strong>divya</strong> liked your photo</p>
    <p><strong>vignesh</strong> commented: "Nice shot!"</p>
    <p><strong>meena</strong> started following you</p>
  </div>

  <h3>👥 Follow Requests</h3>
  <div className="follow-requests">
    <div className="follower-info">
      <img src="../followers/ravi.jpeg" alt="ravi" />
      <span>ravi</span>
      <div>
        <button className="follow-btn" onClick={() => alert("You accepted ravi's request")}>
          Accept
        </button>
        <button className="follow-btn decline" onClick={() => alert("You declined ravi's request")}>
          Remove
        </button>
      </div>
    </div>
    <div className="follower-info">
      <img src="../followers/sowmiya.jpeg" alt="sowmiya" />
      <span>sowmiya</span>
      <div>
        <button className="follow-btn" onClick={() => alert("You accepted sowmiya's request")}>
          Accept
        </button>
        <button className="follow-btn decline" onClick={() => alert("You declined sowmiya's request")}>
          Remove
        </button>
      </div>
    </div>
  </div>

  <h3>Suggested Followers</h3>
  {followers.map((follower) => (
    <div className="follower" key={follower.id}>
      <div className="follower-info">
        <img src={follower.avatar} alt={follower.name} />
        <span>{follower.name}</span>
      </div>
      <button className="follow-btn" onClick={() => alert(`You followed ${follower.name}`)}>
        Follow
      </button>
    </div>
  ))}
</div>
</div>
  );
}

export default Home;
