import CreatePerson from "@/components/CreatePerson";
import SearchPerson from "@/components/SearchPerson";

function MainPage() {
  return (
    // main container
    <div className="w-5/6 h-5/6 flex flex-column">

      {/* left */}
      <div className="w-1/2 p-10">
        {/* top left component */}
        <CreatePerson/>
        {/* bottom left component */}
        <div className="p-24">person was found message</div>
      </div>

      {/* right */}
      <div className="w-1/2 p-10">
        {/* top right component */}
        <div className="p-24">person was created message</div>
        {/* bottom right component */}
        <SearchPerson/>
      </div>
    </div>
  );
}

export default MainPage;
