import React from "react";
import DayPickerForm from "../../components/DayPickerForm/DayPickerForm";
import { useState } from "react";
import AvailableAppointments from "./AvailableAppointments";

export default function Appointment() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <DayPickerForm
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <div>

      <AvailableAppointments selectedDate={selectedDate} />
      </div>
    </div>
  );
}
