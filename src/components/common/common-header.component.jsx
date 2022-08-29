const CommonHeader = ({ heading }) => {
    return (
        <div className='common-header'>
            <h1 className='common-heading'>{heading}</h1>
            <div className='underline'>
                <div className='small-underline'></div>
                <div className='big-underline'></div>
            </div>
        </div>
    );
};

export default CommonHeader;
