import React from 'react'


const ApprovalDetail = (props) => {
    return ( 

        <div className="extra content">
            <div className="ui two buttons">
                <div className="ui basic green button">Approve</div>
                <div className="ui basic red button">Decline</div>
            </div>
            {props.children}
        </div>
     );
}
 
export default ApprovalDetail;