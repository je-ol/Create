/* import { useCreatePersonMutation } from '../api/apiSlice'; */

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

export function CreatePerson() {
  return (
    <Card variant="left">
      <div className="w-[83%]">
        <CardHeader>
          <CardTitle>Create new person</CardTitle>
          <CardDescription>
            Fill in the details below to create a new person.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">First name</Label>
            <Input id="name" placeholder="John" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="username">Last name</Label>
            <Input id="username" placeholder="Smith" />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="blue" size="md" type="submit">CREATE</Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default CreatePerson;
