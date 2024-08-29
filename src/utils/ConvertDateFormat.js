import moment from "moment";

export function convertDateFormat(dateInput, desiredFormat) {
  console.log("called")
  if (
    !dateInput ||
    (typeof dateInput === "object" && Object.keys(dateInput).length === 0) ||
    (Array.isArray(dateInput) && dateInput.length === 0)
  ) {
    console.log("inside return")
    return "";
  }
  let parsedDate;
  const ApplyDateFormat = desiredFormat
    ? desiredFormat
    : '';
  if (dateInput instanceof Date) {
    parsedDate = moment(dateInput);
  } else if (typeof dateInput === "string") {
    const formats = [
      "MM/DD/YYYY",
      "DD-MM-YYYY",
      "DD/MM/YYYY",
      "MM-DD-YYYY",
      "YYYY/MM/DD",
      "MMM D, YYYY",
      "D MMM YYYY",
      "MMMM D, YYYY",
      "D MMMM YYYY",
      "DD.MM.YYYY",
      "D/M/YYYY",
      "ddd MMM D YYYY HH:mm:ss",
      "YYYY-MM-DD",
      "YYYY.MM.DD",
      "YYYY-MM-DDTHH:mm:ss.SSS",
      "YYYY-MM-DDTHH:mm:ss.SSSZ",
      "YYYY-MM-DDTHH:mm:ssZ",
      "YYYY-MM-DDTHH:mm:ss",
    ];

    parsedDate = moment(dateInput, formats, true);

    if (!parsedDate.isValid()) {
      parsedDate = moment(dateInput, moment.ISO_8601, true);
    }
  } else {
    console.log("Unsupported date input type");
  }
console.log("comes")
  return parsedDate.isValid() ? parsedDate.format(ApplyDateFormat) : "";
}

;
