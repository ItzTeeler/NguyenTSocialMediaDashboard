import React from 'react'
const FollowerCardComponent = (props: any) => {
    return (
        <>
            <div className={`cardStyle ${props.border}`}>
                <div className='flex flex-col items-center justify-evenly rounded-b-[5px] w-full h-full cursor-pointer'>
                    <div className='totFollowers flex items-center gap-2'>
                        <img src={props.icon} alt="fb" className='' />
                        <p>{props.username}</p>
                    </div>
                    <div className='text-center'>
                        <p className='followerNumbers'>{props.followers}</p>
                        <p className='followerText pt-[10px]'>{props.type}</p>
                    </div>
                    <div className='flex place-items-center'>
                        <img src={props.arrow} alt="up" className='mr-1' /> <span className={`followerGain ${props.textColor}`}>{props.numGain} Today</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FollowerCardComponent
