import type { RegisterFormValue } from "@/interfaces";
import { RegistrationForm } from "@/components/shared";
import { Card, CardContent, CardHeader, CardTitle, Toaster } from "@/components/ui";
import { useState } from "react";
import "@/public/styles/globals.css";

export function App() {
  const [users, setUsers] = useState<RegisterFormValue[]>([]);
  
  return (
    <div className="flex flex-col md:flex-row gap-5 m-5">
        <RegistrationForm
          onRegister={(userData) => setUsers((prev) => [...prev, userData])}
        />

      <div>
        <Card>
          <CardHeader>
            <CardTitle>USER REGISTER</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col-reverse gap-5">
            {users.length === 0 ? (
               <p className="text-gray-500">Fill the form to add a user.</p>
              ) : (
                users.map((user, index) => (
                  <Card key={index} className="p-5">
                    <p>Name: {user.fullName}</p>
                    <p>Email: {user.email}</p>
                    <p>Password: {user.password}</p>
                    <p>Age: {user.age}</p>
                    <p>Birthdate: {user.birthdate 
                      ? new Date(user.birthdate).toLocaleDateString("en-US", { 
                          day: "2-digit", 
                          month: "long", 
                          year: "numeric" 
                        }) 
                      : "No date"}</p>
                    <p>Gender: {user.gender}</p>
                    <p>Learning Path: {user.learningPath.join(", ")}</p>
                    {user.notes && <p>Notes: {user.notes}</p>}
                  </Card>
                )))
            }
          </CardContent>
        </Card>
      </div>
      <Toaster/>
    </div>
  );
}

export default App;
