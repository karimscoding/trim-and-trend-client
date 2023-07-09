import { DayPicker } from "react-day-picker";

export default function DayPickerForm({ selectedDate, setSelectedDate }) {
  return (
    <div>
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
      />
    </div>
  );
}
