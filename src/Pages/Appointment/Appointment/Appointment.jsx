import DayPickerForm from "../../../components/DayPickerForm/DayPickerForm";
import { useState } from "react";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";
import BookingModal from "../BookingModal/BookingModal";

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
      <BookingModal />
    </div>
  );
}
