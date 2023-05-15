import { AbstractControl } from "@angular/forms";

export function lowerCaseValidator(control: AbstractControl) {

    const autoria = control.value as string
    const regex = new RegExp(/([A-Z])/g)

    if(autoria === autoria.toLowerCase()){
        return null
    }
        return { 
            minuscula: true, 
            count: autoria.match(regex)?.length 
        }
}