import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../../common/iconBtn";

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile);
  console.log("user data", user);
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <h1 className="text-white">My Profile</h1>
      {/* Section 1 */}
      <div>
        <div>
          <img
            src={user?.image}
            alt={`profile ${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover "
          />
          <div>
            <p>{user?.firstName + " " + user?.lastName}</p>
            <p>{user?.email}</p>
          </div>
        </div>
        <IconBtn
          text="Edit"
          onclick={() => {
            navigate("/dashboard/settings");
          }}
          // addIcon
        />
      </div>

      {/* Section 2 */}
      <div>
        <div>
          <p>About</p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/setting");
            }}
          />
        </div>
        {/* user?.additionalDetails?.about? (user?.additionalDetails?.about):("Write Something About Your Self") */}

        <p>
          {user?.additionalInfo?.aboute ?? "Write Something About Your Self"}
        </p>
      </div>
      {/* Section 3 */}

      <div>
        <div>
          <p>Persional Details</p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/setting");
            }}
          />
        </div>
        <div className="flex gap-9">
          <div>
            <div>
            <p>First Name</p>
            <p>{user?.firstName}</p>
          </div>
          <div>
            <p>email</p>
            <p>{user?.email}</p>
          </div>
          <div>
            <p>Gender</p>
            <p>{user?.additionalInfo?.gender ?? "Add Gender"}</p>
          </div>
          </div>

          <div>
            <div>
            <p>Last Name</p>
            <p>{user?.lastName}</p>
          </div>
          <div>
            <p>Phone Number</p>
            <p>{user?.additionalInfo?.contactNumber ?? "Add Contact Number"}</p>
          </div>
          <div>
            <p>Date Of Birth</p>
            <p>{user?.additionalInfo?.dateOfbirth ?? "Add Date Of Birth"}</p>
          </div>

          </div>
        
        </div>
      </div>
    </div>
  );
}
