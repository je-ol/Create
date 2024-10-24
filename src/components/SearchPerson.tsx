import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SearchPerson() {

  return (
    <Card className="bg-primary-light">
      <CardHeader>
        <CardTitle>Search</CardTitle>
        <CardDescription>
          Introduce an ID and find the person that matches it by clicking the
          Search button.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="id">ID</Label>
          <Input
            id="id"
            placeholder="51e8dc7f-7273-4fd8-97be-3bf89583fe9d"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button typeof="Submit">Search</Button>
      </CardFooter>
    </Card>
  );
}

export default SearchPerson;


