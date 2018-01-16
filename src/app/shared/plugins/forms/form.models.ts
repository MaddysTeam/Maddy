import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicRadioGroupModel
} from "@ng-dynamic-forms/core";

export const MY_FORM_MODEL: DynamicFormControlModel[] = [

    new DynamicInputModel({
        id: "sampleInput",
        label: "Sample Input",
        maxLength: 42,
        placeholder: "Sample input"
    }),

    new DynamicRadioGroupModel<string>({
        id: "sampleRadioGroup",
        label: "Sample Radio Group",
        options: [
            {
                label: "Option 1",
                value: "option-1",
            },
            {
                label: "Option 2",
                value: "option-2"
            },
            {
                label: "Option 3",
                value: "option-3"
            }
        ],
        value: "option-3"
    }),

    new DynamicCheckboxModel({
        id: "sampleCheckbox",
        label: "I do agree"
    }),

    new DynamicCheckboxModel({
        id: "sampleCheckbox2",
        label: "I do agree"
    })
];