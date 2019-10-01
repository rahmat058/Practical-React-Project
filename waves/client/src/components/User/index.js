import React from "react";
import UserLayout from "../../hoc/User";
import MyButton from '../utils/button';

const UserDashboard = () => {
  return (
    <UserLayout>
      <div className="user_nfo_panel">
        <h1>User information</h1>
        <div>
          <span>name</span>
          <span>last name</span>
          <span>email</span>
        </div>

        <MyButton 
          type="default"
          title="Edit account info"
          linkto="/user/user_profile"
        />

        <div className="user_nfo_panel">
          <h1>History purchases</h1>
          <div className="user_product_block_wrapper">
            History
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default UserDashboard;
