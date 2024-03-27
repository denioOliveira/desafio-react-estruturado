/* eslint-disable @typescript-eslint/no-explicit-any */


export default function FormInput(props: any) {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { validation, invalid, ...inputProps } = props;

  return <input {...inputProps} data-invalid={invalid} />;
}
