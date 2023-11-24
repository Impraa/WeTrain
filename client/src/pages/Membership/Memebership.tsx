import { Suspense, useEffect, useState } from "react";
import FirstTimeMembership from "../../components/first-time-membership/FirstTimeMembership";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/UserSelector";
import { getSingleMembershipAsync } from "../../redux/membership/MembershipAction";
import { selectExpiryDate } from "../../redux/membership/MembershipSelector";
import Spinner from "../../components/spinner/Spinner";
import MembershipExpired from "../../components/membership-expired/MembershipExpired";
import MembershipActive from "../../components/membership-active/MembershipActive";

const Memebership = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser)!;
  const expiryDate = useSelector(selectExpiryDate);

  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);
  const [expired, setExpired] = useState<boolean>(false);

  useEffect(() => {
    getSingleMembershipAsync(dispatch, user.id);
  }, [user]);

  useEffect(() => {
    if (expiryDate && expiryDate instanceof Date) {
      setIsFirstTime(false);
      if (expiryDate < new Date()) {
        setExpired(true);
      }
    }
  }, [expiryDate]);

  return (
    <Suspense fallback={<Spinner />}>
      {isFirstTime ? (
        <FirstTimeMembership />
      ) : expired ? (
        <MembershipExpired />
      ) : (
        <MembershipActive />
      )}
    </Suspense>
  );
};

export default Memebership;
