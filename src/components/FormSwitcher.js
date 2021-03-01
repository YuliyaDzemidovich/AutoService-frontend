import {EditVehicleForm} from './forms/editVehicleForm';
import {Form} from './Form';

export const FormSwitcher = ({onSubmit, type}) => {
    //console.log(type);
    switch (type) {
        case "vehicle":
            return <EditVehicleForm onSubmit={onSubmit}/>;
        default:
            return <Form onSubmit={onSubmit}/>;
    }
}