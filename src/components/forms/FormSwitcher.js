import {EditVehicleForm} from './editVehicleForm';
import {Form} from '../Form';

export const FormSwitcher = ({onSubmit, type, objectForEdit}) => {
    //console.log(type);
    switch (type) {
        case "vehicle":
            return <EditVehicleForm onSubmit={onSubmit} objectForEdit={objectForEdit}/>;
        default:
            return <Form onSubmit={onSubmit}/>;
    }
}