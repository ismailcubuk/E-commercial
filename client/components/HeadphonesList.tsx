import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHeadsetsData } from "@/redux/actions/headsetsActions";
import { selectHeadsets } from "@/redux/slices/headsetsSlice";
import { AppDispatch } from "@/redux/store/store";

const HeadphonesList = () => {
    const dispatch: AppDispatch = useDispatch();
    const { data, loading, error } = useSelector(selectHeadsets);

    useEffect(() => {
        dispatch(fetchHeadsetsData());
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
