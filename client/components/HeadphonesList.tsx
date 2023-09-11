import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHeadphonesData } from "@/redux/actions/headphonesActions";
import { selectHeadphones } from "@/redux/slices/headphonesSlice";
import { AppDispatch } from "@/redux/store/store";

const HeadphonesList = () => {
    const dispatch: AppDispatch = useDispatch();
    const { data, loading, error } = useSelector(selectHeadphones);

    useEffect(() => {
        dispatch(fetchHeadphonesData());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Headphones</h1>
            <ul>
                {data.map((headphone) => (
                    <li key={headphone._id}>{headphone.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default HeadphonesList;
