import React from "react";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  Month,
  Agenda,
} from "@syncfusion/ej2-react-schedule";

function CalendarComponent() {
  return (
    <ScheduleComponent height="288px" width="311px" currentView="Month">
      <Inject services={[Day, Week, Month, Agenda]} />
    </ScheduleComponent>
  );
}

export default CalendarComponent;
