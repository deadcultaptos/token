import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

function News() {
  return (
    
    <div id='news' className='w-full flex-col h-screen flex items-center justify-center custome-img'>
      <div className='bg-black/60 justify-center items-center flex-col justify-col flex w-full h-screen'>
        <h2 className='text-white text-3xl md:text-5xl pb-5'>News</h2>
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="FIFAWorldCup"
            options={{
              width: 400, 
              height: 600,
            }}
            theme='dark'
        />
      </div>
    </div>
  )
}

export default News