import EventCard from './eventCard';

export default function Events() {
 const arr=[11,2,3,4,5]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            arr.map((_item,index)=>(
                <EventCard key={index} />
            ))
        }
    </div>
  );
}
