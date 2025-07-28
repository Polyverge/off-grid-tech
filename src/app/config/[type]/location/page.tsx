import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function Page() {
  return (
    <section id="location" className="flex justify-center gap-20 items-center">
      <section id="headeline" className="mb-15">
        <h2 className="text-2xl mb-5 font-bold">Where you at?</h2>
        <h3 className="text-lg">
          To get a good estimate of how much sunlight you receive throughout the
          year, we'll need to check your location. This helps us determine how
          much solar energy, or other power sources you might need.
        </h3>
      </section>
      <Card>
        <CardHeader>
          <CardTitle>
            <h2 className="text-xl">Share your location</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-90 h-60 bg-gray-200 rounded flex items-center justify-center">
            <div>
              <MapPin fill="#d45252" strokeWidth={0.5} size={80} />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Share location</Button>
        </CardFooter>
      </Card>
    </section>
  );
}
