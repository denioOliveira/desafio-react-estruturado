/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */

export function update(inputs: any, name: string, newValue: any){
    return { ...inputs, [name]: { ...inputs[name], value: newValue } };
}

export function toValues(inputs: any){
    const data: any = {};
    for(var name in inputs){
        data[name] = inputs[name].value;
    }

    return data;
}

export function updateAll(inputs: any, newValues: any){
    const newInputs: any = {};
    for (var name in inputs){
        newInputs[name] = { ...inputs[name], value: newValues[name]};
    }

    return newInputs;
}

export function validate(inputs: any, name: string){
    if(!inputs[name].validation){
        return inputs;
    }
    const isInvalid = !inputs[name].validation(inputs[name].value);
    return { ...inputs, [name]: {...inputs[name], invalid: isInvalid.toString()}};
}

export function toDirty(inputs: any, name: string){
    return { ...inputs, [name]:{...inputs[name], dirty: "true"}};
}

export function updateAndValidate(inputs: any, name: string, newValue: any){
    const dataUpdated = update(inputs, name, newValue);
    return validate(dataUpdated, name);
}

export function dirtyAndValidate(inputs: any, name: string){
    const dataDirty = toDirty(inputs, name);
    return validate(dataDirty, name);
}
