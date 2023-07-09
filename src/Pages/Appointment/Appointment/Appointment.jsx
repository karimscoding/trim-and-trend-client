import { useState } from "react";
import DayPickerForm from "../../../components/DayPickerForm/DayPickerForm";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";

export default function Appointment() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <div className="w-96 mx-auto my-20">
        <DayPickerForm
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <div>
        <AvailableAppointments selectedDate={selectedDate} />
      </div>
    </div>
  );
}
