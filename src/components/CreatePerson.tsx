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
    <Card className="bg-primary-light">
      <CardHeader>
        <CardTitle>New Person</CardTitle>
        <CardDescription>
          Enter the details below to create a new person.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="name">First Name</Label>
          <Input id="name" placeholder="John" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="username">Last Name</Label>
          <Input id="username" placeholder="Smith" />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Create</Button>
      </CardFooter>
    </Card>
  );
}

export default CreatePerson;
