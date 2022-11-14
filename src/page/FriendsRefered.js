import React from 'react'
import Breadcrum from '../component/Breadcrum';
import ReferalArea from '../component/ReferalArea';
import EnrollCard from '../component/EnrollCard'
import TermandCondition from '../component/TermandCondition';

const FriendsRefered = () => {
  return (
    <>
    <div className="container">
      <Breadcrum></Breadcrum>
      <ReferalArea/>
      <EnrollCard/>
      <TermandCondition/>
    </div>
    </>
  )
}

export default FriendsRefered;