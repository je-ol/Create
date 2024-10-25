import CreatePerson from "@/components/CreatePerson";
import SearchPerson from "@/components/SearchPerson";

function MainPage() {
  return (
    // main container
    <div className="w-5/6 h-5/6 flex">

      {/* left */}
      <div className="w-1/2 p-2 flex flex-col justify-between">
        {/* top left component */}
        <CreatePerson/>
        {/* bottom left component */}
        <div className="w-full h-[34%] bg-pink-950">person was found message</div>
      </div>

      {/* right */}
      <div className="w-1/2 p-2 flex flex-col justify-between">
        {/* top right component */}
        <div className="w-full h-[34%] bg-pink-950">person was created message</div>
        {/* bottom right component */}
        <SearchPerson/>
      </div>

    </div>
  );
}

export default MainPage;
