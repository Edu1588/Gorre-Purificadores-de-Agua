import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const videos = [
  {
    id: 1,
    url: "https://res.cloudinary.com/ifuatk2z/video/upload/v1784838147/mojo_video-1_iit3xw.mp4",
    poster: "" 
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/ifuatk2z/video/upload/v1784838129/mojo_video-2_s3k7l2.mp4",
    poster: ""
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/ifuatk2z/video/upload/v1784838131/mojo_video-3_hlekpe.mov",
    poster: ""
  }
];

function VideoPlayer({ 
  video, 
  index,
  activeVideo,
  setActiveVideo
}: { 
  key?: React.Key;
  video: typeof videos[0];
  index: number;
  activeVideo: number | null;
  setActiveVideo: (id: number | null) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isPlaying = activeVideo === video.id;

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {
          // Ignore auto-play errors if any
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      setActiveVideo(null);
    } else {
      setActiveVideo(video.id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative aspect-[9/16] bg-slate-900 rounded-[2rem] overflow-hidden shadow-xl shadow-blue-900/10 group border-4 border-slate-50 cursor-pointer"
      onClick={togglePlay}
    >
      <video 
        ref={videoRef}
        src={video.url}
        className="w-full h-full object-cover"
        playsInline
        preload="metadata"
        onEnded={() => setActiveVideo(null)}
      />
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity group-hover:bg-black/40">
          <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="depoimentos-video">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
          >
            Na voz de <span className="text-blue-600">quem viveu</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Histórias reais de pessoas que transformaram sua saúde e qualidade de vida.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <VideoPlayer 
              key={video.id} 
              video={video} 
              index={index} 
              activeVideo={activeVideo}
              setActiveVideo={setActiveVideo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
