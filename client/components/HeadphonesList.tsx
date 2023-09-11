import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllData } from "@/redux/actions/alldataActions";
import { selectAllData } from "@/redux/slices/alldataSlice";
import { AppDispatch } from "@/redux/store/store";

const HeadphonesList = () => {
    const dispatch: AppDispatch = useDispatch();
    const { data, loading, error } = useSelector(selectAllData);

    useEffect(() => {
        dispatch(fetchAllData());
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
                {data?.headsets?.map((headphone:any) => (
                    <li key={headphone._id}>{headphone.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default HeadphonesList;
