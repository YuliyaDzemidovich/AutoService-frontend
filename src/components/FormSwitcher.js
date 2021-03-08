import DeleteVehicleForm from './forms/deleteVehicleForm';
import EditVehicleForm from './forms/editVehicleForm';
import {Form} from './Form';

export const FormSwitcher = ({onSubmit, type, triggerText, obj}) => {
    //console.log(type);
    switch (type) {
        case "vehicle":
            switch (triggerText) {
                case "Delete":
                    return <DeleteVehicleForm onSubmit={onSubmit} triggerText={triggerText} obj={obj}/>;
                default:
                    return <EditVehicleForm onSubmit={onSubmit} triggerText={triggerText} obj={obj}/>;
            }
        default:
            return <Form onSubmit={onSubmit}/>;
    }
}