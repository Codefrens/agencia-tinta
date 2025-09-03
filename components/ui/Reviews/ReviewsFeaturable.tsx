'use client'
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

function ReviewsFeaturable() {
  // Create a free Featurable account at https://featurable.com
  // Then create a new Featurable widget and copy the widget ID
  const featurableWidgetId = "0b50e871-4ad3-4d45-abd8-d377609e5bf3";

  return (
    <ReactGoogleReviews nameDisplay="firstAndLastInitials" logoVariant="icon" theme="dark" layout="carousel" carouselSpeed={5000} showDots={false} featurableId={featurableWidgetId} />
  );
}

export default ReviewsFeaturable;