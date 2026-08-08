import CategoriesComponent from "./components/categories";
import Events from "./components/events";
import FilterComponent from "./components/filterComponent";
import EventHeader from "./components/header";

export default function EventPage() {
  return (
    <div className="bg-soft-olive/5 antialiased text-dark-charkoal min-h-screen py-16 px-6 ">
      <div className="max-w-7xl mx-auto space-y-10">
        <EventHeader/>
        <FilterComponent/>
        <CategoriesComponent/>
        <Events />
      </div>
    </div>
  );
}
