import React, { useMemo } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { ITaskTypes } from "../../../types";

interface CalendarProps {
  tasks: ITaskTypes[];
}

export const Calendar: React.FC<CalendarProps> = ({ tasks }) => {
  const events = useMemo(
    () =>
      tasks.map((task) => ({
        title: task.title,
        start: task.dueDate,
        assign: task.assign,
      })),
    [tasks]
  );

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
      height={700}
    />
  );
};
