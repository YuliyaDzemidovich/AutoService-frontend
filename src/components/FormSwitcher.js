import DeleteVehicleForm from './forms/deleteVehicleForm';
import EditVehicleForm from './forms/editVehicleForm';
import {Form} from './Form';

export const FormSwitcher = ({type, triggerText, obj, parentCallbackCloseModal, parentCallbackUpdateTable}) => {
    //console.log(type);
    switch (type) {
        case "vehicle":
            switch (triggerText) {
                case "Delete":
                    return <DeleteVehicleForm parentCallbackCloseModal={parentCallbackCloseModal} parentCallbackUpdateTable={parentCallbackUpdateTable} triggerText={triggerText} obj={obj}/>;
                default:
                    return <EditVehicleForm parentCallbackCloseModal={parentCallbackCloseModal} parentCallbackUpdateTable={parentCallbackUpdateTable} triggerText={triggerText} obj={obj}/>;
            }
        default:
            return <Form/>;
    }
}