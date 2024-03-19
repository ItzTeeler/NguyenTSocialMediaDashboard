import React from 'react'
import upArrow from './images/icon-up.svg'
import facebookIcon from './images/icon-facebook.svg'
const OverviewCardComponent = (props: {title: string, icon: string, number: string, arrow: string, textColor: string, percentNum: string}) => {
  return (
    <>
      <div className='overViewCard flex flex-col items-center'>

        <div className='pageViews flex justify-between'>
            <p className='pageViewText'>{props.title}</p>
            <img src={props.icon} alt="fb" />
        </div>

        <div className='gainDiv flex justify-between items-end'>
            <p className='numberGainText'>{props.number}</p>
            <div className='flex items-center'>
                <img src={props.arrow} alt="arrow" className='mr-1'/>
                <p className={`perfectText ${props.textColor}`}>{props.percentNum}%</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default OverviewCardComponent
