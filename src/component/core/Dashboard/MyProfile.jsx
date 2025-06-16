import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../../common/iconBtn";

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile);
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
          {user?.additionalDetails?.about ?? "Write Something About Your Self"}
        </p>
      </div>
    </div>
  );
}
