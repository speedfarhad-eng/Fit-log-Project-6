import React from 'react';

const loading = () => {
    return (
        <div className='flex items-center justify-center'>

            {/* loading fallback */}
            <span className="loading loading-spinner text-success"></span>
        </div>
    );
};

export default loading;