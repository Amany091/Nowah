import * as Yup from "yup";

export const getValidationSchema = (t: any) =>
Yup.object({
fullName: Yup.string().required(t("errors.fullNameRequired")),

email: Yup.string()
    .email(t("errors.emailInvalid"))
    .required(t("errors.emailRequired")),

phone: Yup.string()
    .matches(/^[0-9+\-\s()]+$/, t("errors.phoneInvalid"))
    .required(t("errors.phoneRequired")),

message: Yup.string().required(t("errors.messageRequired")),
});

export const initialValues = {
fullName: "",
email: "",
phone: "",
message: "",
};