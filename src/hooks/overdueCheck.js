import { useEffect } from "react";
import { axiosReq } from "../api/axiosDefaults";

const OverdueCheck = (task, setTask) => {
    useEffect(() => {
        const updateOverdue = async () => {
            try {
                const { data } = await axiosReq.patch(`/tasks/${task.id}/`, {
                    overdue: task.is_overdue,
                });
                setTask(data);
            } catch (err) {
                console.log(err);
            }
        };

        updateOverdue();
    }, [task, setTask]);
};

export default OverdueCheck;