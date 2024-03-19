import React from 'react'
import HeaderComponent from './HeaderComponent'
import FollowerCardComponent from './FollowerCardComponent'
import facebookIcon from './images/icon-facebook.svg'
import twitterIcon from './images/icon-twitter.svg'
import instaIcon from './images/icon-instagram.svg'
import youtubeIcon from './images/icon-youtube.svg'
import arrowUp from './images/icon-up.svg'
import arrowDown from './images/icon-down.svg'
import OverviewCardComponent from './OverviewCardComponent'

const MainComponent = () => {
  return (
    <>
    <HeaderComponent/>
    <div className='px-0 lg:px-[10.625rem]'>
      <div className='pl-[25px] pr-[25px] lg:pl-[0px] lg:pr-[0px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-[30px]'>
        <FollowerCardComponent border={'fb'} icon={facebookIcon} username={'@nathanf'} followers={'1987'} type={'FOLLOWERS'} textColor={"limeGreen"} arrow={arrowUp} numGain={'12'}/>
        <FollowerCardComponent border={'twitter'} icon={twitterIcon} username={'@nathanf'} followers={'1044'} type={'FOLLOWERS'} textColor={"limeGreen"} arrow={arrowUp} numGain={'99'}/>
        <FollowerCardComponent border={'insta'} icon={instaIcon} username={'@realnathanf'} followers={'11k'} type={'FOLLOWERS'} textColor={"limeGreen"} arrow={arrowUp} numGain={'1099'}/>
        <FollowerCardComponent border={'youtube'} icon={youtubeIcon} username={'Nathan F.'} followers={'8239'} type={'SUBSCRIBERS'} textColor={"brightRed"} arrow={arrowDown} numGain={'144'}/>
      </div>

      <p className='overviewTitle pl-[25px] pr-[25px] lg:pl-[0px] lg:pr-[0px] mt-5'>Overview - Today</p>

      <div className='pl-[25px] pr-[25px] lg:pl-[0px] lg:pr-[0px] grid md:grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-6'>
        <OverviewCardComponent title={"Page Views"} icon={facebookIcon} number={"87"} textColor={"limeGreen"} arrow={arrowUp} percentNum={"3"}/>
        <OverviewCardComponent title={"Likes"} icon={facebookIcon} number={"52"} textColor={"brightRed"} arrow={arrowDown} percentNum={"2"}/>
        <OverviewCardComponent title={"Likes"} icon={instaIcon} number={"5462"} textColor={"limeGreen"} arrow={arrowUp} percentNum={"2257"}/>
        <OverviewCardComponent title={"Profile Views"} icon={instaIcon} number={"52k"} textColor={"limeGreen"} arrow={arrowUp} percentNum={"1375"}/>
        <OverviewCardComponent title={"Retweets"} icon={twitterIcon} number={"117"} textColor={"limeGreen"} arrow={arrowUp} percentNum={"303"}/>
        <OverviewCardComponent title={"Likes"} icon={twitterIcon} number={"507"} textColor={"limeGreen"} arrow={arrowUp} percentNum={"553"}/>
        <OverviewCardComponent title={"Likes"} icon={youtubeIcon} number={"107"} textColor={"brightRed"} arrow={arrowDown} percentNum={"19"}/>
        <OverviewCardComponent title={"Total Views"} icon={youtubeIcon} number={"1407"} textColor={"brightRed"} arrow={arrowDown} percentNum={"12"}/>
      </div>
    </div>
    </>
    
  )
}

export default MainComponent
