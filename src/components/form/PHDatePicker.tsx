import { DatePicker, Form } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TDatePickerProps = {
  name: string;
  label?: string;
};
const PHDatePicker = ({ name, label }: TDatePickerProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      {/* {label ? label : null} */}
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <DatePicker {...field} style={{ width: "100%" }} size="large" />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHDatePicker;
