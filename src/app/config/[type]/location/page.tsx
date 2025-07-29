'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { handleUserSharingLocation } from '@/features/prodcut/configurator/utils/location';
import { Divide, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Page() {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const hasUserLocation = location.latitude !== 0;
  return (
    <>
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
          <div
            className="w-90 h-60 bg-gray-200 rounded flex items-center justify-center bg-cover bg-center"
            style={
              hasUserLocation
                ? {
                    backgroundImage:
                      "url('https://picsum.photos/id/212/1800/1200')",
                  }
                : {}
            }
          >
            {hasUserLocation ? (
              <div className="backdrop-blur-xs bg-gray-500/30 p-7 rounded">
                <p className="font-bold">You live in:</p>
                <p className="text-primary">Berlepschstraße 6</p>
                <p className="text-primary">34119 Kassel, Germany</p>
              </div>
            ) : (
              <MapPin
                fill="#d45252"
                stroke={'#000'}
                strokeWidth={0.5}
                size={80}
              />
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={() => handleUserSharingLocation(setLocation)}>
            Share location
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
