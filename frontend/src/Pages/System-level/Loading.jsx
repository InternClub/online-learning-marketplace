import React from 'react'

const Loading = () => {
     const [logos, setLogos] = useState([]);

  useEffect(() => {
    // Generate 30 logos with random positions
    const generatedLogos = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      top: Math.floor(Math.random() * 90) + '%',
      left: Math.floor(Math.random() * 90) + '%',
      size: Math.floor(Math.random() * 30) + 40, // 40px to 70px
      opacity: Math.random() * 0.2 + 0.05 // 0.05 to 0.25
    }));

    setLogos(generatedLogos);
  }, []);
  return (
    <div className=" loader-container d-flex flex-column justify-content-center align-items-center bg-info">
      {/* 30 Static Random Logos */}
      {logos.map((logoObj) => (
        <img
          key={logoObj.id}
          src={logo}
          alt="Logo"
          className="floating-logo"
          style={{
            top: logoObj.top,
            left: logoObj.left,
            width: `${logoObj.size}px`,
            height: `${logoObj.size}px`,
            opacity: logoObj.opacity,
          }}
        />
      ))}

      {/* Lottie Animation */}
      {/* <Player
        autoplay
        loop
        src={loaderJson}
        className="lottie-center large"
      /> */}

      {/* Bottom Loader */}
      <div className="bottom-loader">
        <div className="loading-bar">
          <div className="loading-fill" />
        </div>
        <div className="loading-text mt-2">Loading ...</div>
      </div>
    </div>
  )
}

export default Loading
